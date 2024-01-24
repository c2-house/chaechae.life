import { ProfileEkoIcon1, ProfileEkoIcon2, ProfileEkoIcon3 } from '@/public/icons';
import ProfileCard, { type ProfileCardProps } from './ProfileCard';

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
        text: '편리하고 직관적인 UI/UX를 만들기 위해 사용자 관점에서 고민합니다.',
      },
      {
        icon: <ProfileEkoIcon2 />,
        text: '모든 기기에서 원활하게 작동하는 반응형 웹사이트를 개발합니다.',
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
        text: '편리하고 직관적인 UI/UX를 만들기 위해 사용자 관점에서 고민합니다.',
      },
      {
        icon: <ProfileEkoIcon2 />,
        text: '모든 기기에서 원활하게 작동하는 반응형 웹사이트를 개발합니다.',
      },
      {
        icon: <ProfileEkoIcon3 />,
        text: '개발뿐만 아니라 기획, 디자인, SEO 등 서비스 출시에 필요한 모든 과정을 직접 수행할 수 있습니다.',
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
    </section>
  );
};

export default AboutUs;
