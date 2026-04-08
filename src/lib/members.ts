export type PaperCategory = 'RNA' | 'DNA' | 'Protein' | 'Model' | 'Technique' | 'Optimization' | 'Trends' | 'Training' | 'Bioinformatics' | 'General' | string;

export interface AmiBotMember {
  id: string;
  name: string;
  color: string;
  themeBg: string;
  themeText: string;
  themeBorder: string;
  category: PaperCategory;
  description: string;
  accessory: string;
  image: string;
  icon: string;
  ribbon: string;
}

export const AMIBOT_MEMBERS: AmiBotMember[] = [
  { id: 'ami', name: 'Ami', color: 'ami-purple', themeBg: 'bg-ami-purple', themeText: 'text-ami-purple', themeBorder: 'border-ami-purple', category: 'Model', description: 'LLM, Vision Model 등 최신 AI 모델', accessory: '보라색 마이크', image: '/figure/characters/member_ami.png', icon: '/figure/icons/icon_ami.png', ribbon: '2개 (양쪽)' },
  { id: 'rina', name: 'Rina', color: 'rina-pink', themeBg: 'bg-rina-pink', themeText: 'text-rina-pink', themeBorder: 'border-rina-pink', category: 'RNA', description: 'RNA 구조 및 합성 연구', accessory: '핑크색 RNA 나선', image: '/figure/characters/member_rina.png', icon: '/figure/icons/icon_rina.png', ribbon: '1개 (왼쪽)' },
  { id: 'dina', name: 'Dina', color: 'dina-mint', themeBg: 'bg-dina-mint', themeText: 'text-dina-mint', themeBorder: 'border-dina-mint', category: 'DNA', description: '유전체 및 DNA 분석 연구', accessory: '민트색 DNA 이중나선', image: '/figure/characters/member_dina.png', icon: '/figure/icons/icon_dina.png', ribbon: '1개 (오른쪽)' },
  { id: 'prota', name: 'Prota', color: 'prota-sky', themeBg: 'bg-prota-sky', themeText: 'text-prota-sky', themeBorder: 'border-prota-sky', category: 'Protein', description: '단백질 구조 및 오믹스 연구', accessory: '파스텔 단백질 구조체', image: '/figure/characters/member_prota.png', icon: '/figure/icons/icon_prota.png', ribbon: '1개 (왼쪽)' },
  { id: 'techa', name: 'Techa', color: 'techa-yellow', themeBg: 'bg-techa-yellow', themeText: 'text-techa-yellow', themeBorder: 'border-techa-yellow', category: 'Technique', description: 'Activation Function 등 핵심 AI 기술', accessory: '노란색 테크 망치', image: '/figure/characters/member_techa.png', icon: '/figure/icons/icon_techa.png', ribbon: '2개 (양쪽)' },
  { id: 'opti', name: 'Opti', color: 'opti-blue', themeBg: 'bg-opti-blue', themeText: 'text-opti-blue', themeBorder: 'border-opti-blue', category: 'Optimization', description: 'ToMe, 경량화 등 최적화 기법', accessory: '블루 야광 검', image: '/figure/characters/member_opti.png', icon: '/figure/icons/icon_opti.png', ribbon: '1개 (오른쪽)' },
  { id: 'trenda', name: 'Trenda', color: 'trenda-red', themeBg: 'bg-trenda-red', themeText: 'text-trenda-red', themeBorder: 'border-trenda-red', category: 'Trends', description: '유튜브 및 최신 AI 트렌드 영상', accessory: '레드 마법 지팡이', image: '/figure/characters/member_trenda.png', icon: '/figure/icons/icon_trenda.png', ribbon: '2개 (양쪽)' },
  { id: 'basic', name: 'Basic', color: 'basic-orange', themeBg: 'bg-basic-orange', themeText: 'text-basic-orange', themeBorder: 'border-basic-orange', category: 'Training', description: 'MLP, 기초 AI 이론 교육', accessory: '주황색 지휘봉', image: '/figure/characters/member_basic.png', icon: '/figure/icons/icon_basic.png', ribbon: '1개 (왼쪽)' },
];

export interface BioMedPaper {
  id: string;
  type?: 'paper' | 'video';
  title: string;
  summary: string;
  summary_kr?: string;
  summary_en?: string;
  purpose?: string;
  method?: string;
  link: string;
  published: string;
  category: PaperCategory | string;
  venue?: string;
  memberId?: string;
  managed_by?: string;
  thumbnail?: string;
  source?: string;
  status?: 'pending' | 'approved' | 'rejected';
  detailed_analysis_kr?: string;
  detailed_analysis_en?: string;
  references?: { title: string; link: string; reason: string }[];
  ceo_comment?: string;
  keywords?: string[];
}

export interface TrainingItem {
  id: string;
  step: number;
  title: string;
  summary: string;
  content: string;
  status: string;
}

export const BIOMED_CATEGORIES = [
  'Model',
  'RNA',
  'DNA',
  'Protein',
  'Technique',
  'Optimization',
  'Trends',
  'Training'
];

export function getMemberByCategory(category: string): AmiBotMember {
  const member = AMIBOT_MEMBERS.find(m => m.category === category) || AMIBOT_MEMBERS[0];
  return member;
}
