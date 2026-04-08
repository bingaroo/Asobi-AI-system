import { createClient } from '@supabase/supabase-js';

// [v85] Ultimate Build-safe Dynamic Client
let supabaseInstance: any = null;

export const getSupabase = () => {
    if (typeof window === 'undefined') return null; // SSR/Build 시점엔 생성하지 않음
    if (!supabaseInstance) {
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
        const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';
        supabaseInstance = createClient(url, key);
    }
    return supabaseInstance;
};

// 기존 코드와의 호환성을 위한 placeholder (클라이언트 전용)
export const supabase = typeof window !== 'undefined' ? getSupabase() : null;

export type Profile = {
  id: string;
  full_name: string;
  nickname: string;
  birth_date?: string;
  phone_number?: string;
  email: string;
  created_at: string;
};

export type Comment = {
  id: string;
  post_id: string;
  user_id: string;
  nickname: string;
  content: string;
  created_at: string;
};
