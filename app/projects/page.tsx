import ProjectListItem from '@/components/Projects/ProjectListItem';
import { WebsiteIcon } from '@/public/icons';

const Page = () => {
  return (
    <ul className="grid grid-cols-1 gap-5 py-6 md:grid-cols-2">
      <ProjectListItem
        slug="ev-charge"
        title="전기차G"
        description="전기차 충전소 상태 조회 서비스"
        mockup="mobile"
      />
      <ProjectListItem
        slug="messagebot"
        title="메시지봇"
        description="인사말을 간편하게 생성해주는 AI 챗봇"
        mockup="mobile"
      />
      <ProjectListItem
        slug="wedding-card"
        title="모바일 청접장"
        description="개발자 부부 채채의 모바일 청첩장"
        mockup="mobile"
      />

      <li className="flex aspect-square max-w-[470px] flex-col items-center justify-center rounded-xl border-2 border-gray-100">
        <WebsiteIcon className="mb-5 h-36 w-36 lg:mb-7 lg:h-44 lg:w-44" />
        <p className="text-xl text-slate-500 lg:text-2xl">
          <span className="mr-1">오늘도 개발 중</span>
          {Array.from('...').map((letter, index) => (
            <span
              key={index}
              className="inline-flex animate-bounce tracking-wide"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </p>
      </li>
    </ul>
  );
};

export default Page;
