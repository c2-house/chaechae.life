import Link from 'next/link';
import ProfileCard, { type ProfileCardProps } from './ProfileCard';
import {
  ChevronRightIcon,
  ProfileEkoIcon1,
  ProfileEkoIcon2,
  ProfileEkoIcon3,
} from '@/public/icons';

const profiles: ProfileCardProps[] = [
  {
    name: '고은채',
    role: 'Frontend Developer',
    image: 'eko.png',
    cardBg: 'bg-pink-50/60',
    iconBg: 'bg-pink-100',
    iconColor: 'fill-pink-500',
    descriptions: [
      {
        icon: <ProfileEkoIcon1 />,
        text: 'Next.js와 TypeScript를 사용하여 빠르고 안정적인 웹사이트를 개발합니다.',
      },
      {
        icon: <ProfileEkoIcon2 />,
        text: '편리하고 직관적인 UI/UX를 설계하기 위해 사용자 관점에서 고민하고, 모든 기기에서 원활하게 작동하는 반응형 웹사이트를 개발합니다.',
      },
      {
        icon: <ProfileEkoIcon3 />,
        text: '개발뿐만 아니라 기획, 디자인, SEO 등 서비스 출시에 필요한 모든 과정을 직접 수행할 수 있습니다.',
      },
    ],
  },
  {
    name: '정민채',
    role: 'Backend Developer',
    image: 'mingke.png',
    cardBg: 'bg-indigo-50/60',
    iconBg: 'bg-indigo-100',
    iconColor: 'fill-indigo-500',
    descriptions: [
      {
        icon: <ProfileEkoIcon1 />,
        text: '주로 FastAPI, Django를 사용합니다. Python을 주 무기로 이것저것 합니다. ',
      },
      {
        icon: <ProfileEkoIcon2 />,
        text: '새로운 기술에 열려있고 모르는 것을 부끄러워하지 않고 배웁니다. 최근 주 관심사는 AI 입니다.',
      },
      {
        icon: <ProfileEkoIcon3 />,
        text: '1밖에 모르지만 0.5만 아는 사람들에게 알려주는 것을 좋아합니다.',
      },
    ],
  },
];

const AboutUs = () => {
  return (
    <section className="container-lg py-10">
      <h2 className="mb-5 text-xl font-semibold md:mb-7 md:text-2xl lg:text-3xl">About Us</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {profiles.map((profile) => (
          <ProfileCard key={profile.name} {...profile} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/projects"
          className="bg-gradient-dark inline-flex items-center justify-center rounded-lg bg-opacity-100 px-4 py-3 font-semibold text-white hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600"
        >
          <span className="pl-2">프로젝트 보기</span>
          <ChevronRightIcon className="h-6 w-6 fill-current" />
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;