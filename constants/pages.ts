export const navLinks = [
  { name: 'Projects', path: '/projects' },
  { name: 'Games', path: '/games' },
  { name: 'Blog', path: '/blog' },
] as const;

export const authors = ['EKO', 'mingke'] as const;

export const tags = [
  'AI',
  'AWS',
  'Career',
  'Certification',
  'Django',
  'Docker',
  'FastAPI',
  'Git',
  'Github Actions',
  'Gunicorn',
  'JavaScript',
  'MCP',
  'Nextjs',
  'Nodejs',
  'PostgreSQL',
  'pre-commit',
  'Programming',
  'Prompt Engineering',
  'Pydantic',
  'Pytest',
  'Python',
  'React',
  'Redis',
  'Rust',
  'SQLAlchemy',
  'Supabase',
  'Swagger',
  'Tools',
  'Vercel',
  'VSCode',
  'Writing',
  '오름캠프',
  'Others',
] as const;

export const games = [
  {
    name: '똥피하기',
    slug: 'poop-dodge',
    thumbnail: '/images/games/poop/poop-dodge-thumbnail.png',
    description: '똥을 피해 살아남으세요!',
  },
  {
    name: '기사의 여행',
    slug: 'knightstour',
    thumbnail: '/images/games/knight/knights-tour-thumbnail.png',
    description: '데블스플랜에 나왔던 기사의 여행을 플레이해봐요!',
  },
  {
    name: '카드 뒤집기',
    slug: 'cardmemory',
    thumbnail: '/images/games/cardmemory/card-memory-thumbnail.png',
    description: '카드 뒤집기 게임으로 기억력을 향상시켜봐요!',
  },
  // 추후 게임 추가 가능
];