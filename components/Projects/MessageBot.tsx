import Image from 'next/image';
import ProjectContainer from './ProjectContainer';

const MessageBot = () => {
  return (
    <ProjectContainer title="메시지봇" description="인사말을 간편하게 생성해주는 AI 챗봇">
      <Image
        src="/images/projects/messagebot.png"
        alt="메시지봇"
        width={200}
        height={405}
        className="mx-auto"
      />
    </ProjectContainer>
  );
};

export default MessageBot;
