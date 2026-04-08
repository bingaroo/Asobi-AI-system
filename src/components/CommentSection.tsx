'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function CommentSection({ postId }: { postId: string }) {
  const [comments, setComments] = useState<any[]>([]);
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchComments();
    
    // 실시간 구독 설정
    const channel = supabase
      .channel(`comments-${postId}`)
      .on('postgres_changes', { 
        event: 'INSERT', 
        schema: 'public', 
        table: 'comments',
        filter: `post_id=eq.${postId}`
      }, (payload: { new: any }) => {
        setComments((prev) => [payload.new, ...prev]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [postId]);

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('post_id', postId)
      .order('created_at', { ascending: false });
    
    if (data) setComments(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname || !content) return;

    setLoading(true);
    const { error } = await supabase
      .from('comments')
      .insert([{ post_id: postId, nickname, content }]);

    if (error) {
      console.error('Error posting comment:', error);
      alert('댓글 저장에 실패했습니다. (API 설정 확인 필요)');
    } else {
      setContent('');
    }
    setLoading(false);
  };

  return (
    <div className="mt-12 bg-gray-50 rounded-[2.5rem] p-10 border-2 border-gray-100 shadow-inner">
      <h6 className="text-xl font-black italic mb-8 flex items-center gap-3">
        💬 사용자 의견 <span className="text-rina-pink text-xs bg-rina-pink/10 px-3 py-1 rounded-full not-italic">REAL-TIME</span>
      </h6>

      {/* Write Comment */}
      <form onSubmit={handleSubmit} className="mb-10 space-y-4">
        <div className="flex gap-4">
          <input 
            type="text" 
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-1/3 px-6 py-4 bg-white border-2 border-gray-100 rounded-2xl text-sm font-bold focus:border-rina-pink outline-none transition-all"
            required
          />
          <button 
            type="submit" 
            disabled={loading}
            className="w-2/3 py-4 bg-gray-900 text-white rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-rina-pink transition-all active:scale-95"
          >
            {loading ? 'Posting...' : '의견 남기기 →'}
          </button>
        </div>
        <textarea 
          placeholder="이 기술에 대해 어떻게 생각하시나요?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-6 py-4 bg-white border-2 border-gray-100 rounded-2xl text-sm font-bold focus:border-rina-pink outline-none transition-all h-24 resize-none"
          required
        ></textarea>
      </form>

      {/* List Comments */}
      <div className="space-y-6 max-h-[400px] overflow-y-auto pr-4 scrollbar-hide">
        {comments.length === 0 ? (
          <p className="text-center py-10 text-gray-400 font-bold italic text-sm">첫 번째 의견을 남겨주세요! ✨</p>
        ) : (
          comments.map((c) => (
            <div key={c.id} className="p-6 bg-white rounded-3xl border-2 border-gray-50 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-black text-rina-pink italic">@{c.nickname}</span>
                <span className="text-[9px] text-gray-400 font-bold uppercase">{new Date(c.created_at).toLocaleString()}</span>
              </div>
              <p className="text-sm text-gray-600 font-bold leading-relaxed">{c.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
