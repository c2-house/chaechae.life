import Link from 'next/link';
import ProfileCard, { type ProfileCardProps } from './ProfileCard';
import {
  ChevronRightIcon,
  ProfileEkoIcon1,
  ProfileEkoIcon2,
  ProfileEkoIcon3,
  ProfileMingkeIcon1,
  ProfileMingkeIcon2,
  ProfileMingkeIcon3,
} from '@/public/icons';

const profiles: ProfileCardProps[] = [
  {
    name: 'EKO',
    role: 'Frontend Developer',
    cardBg: 'bg-pink-50/60',
    iconBg: 'bg-pink-100',
    iconColor: 'fill-pink-500',
    descriptions: [
      {
        icon: <ProfileEkoIcon1 className="h-8 w-8" />,
        text: 'Next.js와 TypeScript를 사용하여 빠르고 안정적인 웹사이트를 개발합니다.',
      },
      {
        icon: <ProfileEkoIcon2 className="h-8 w-8" />,
        text: '편리하고 직관적인 UI/UX를 설계하기 위해 사용자 관점에서 고민하고, 모든 기기에서 원활하게 작동하는 반응형 웹사이트를 개발합니다.',
      },
      {
        icon: <ProfileEkoIcon3 className="h-8 w-8" />,
        text: '개발뿐만 아니라 기획, 디자인, SEO 등 서비스 출시에 필요한 모든 과정을 직접 수행할 수 있습니다.',
      },
    ],
  },
  {
    name: 'mingke',
    role: 'Backend Developer',
    cardBg: 'bg-indigo-50/60',
    iconBg: 'bg-indigo-100',
    iconColor: 'fill-indigo-500',
    descriptions: [
      {
        icon: <ProfileMingkeIcon1 className="h-8 w-8" />,
        text: 'FastAPI 또는 Django를 사용하여 안정적인 서버를 구축하는 Python 개발자입니다.',
      },
      {
        icon: <ProfileMingkeIcon2 className="h-8 w-8" />,
        text: '컨테이너 기술과 AWS를 사용하여 서버를 배포하고, CI/CD를 구축하여 개발 생산성을 높일 수 있습니다.',
      },
      {
        icon: <ProfileMingkeIcon3 className="h-8 w-8" />,
        text: '새로운 기술을 배우고 지식을 공유하는 것을 좋아합니다. 최근 관심사는 백엔드 개발자로 취업하기 입니다.',
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
