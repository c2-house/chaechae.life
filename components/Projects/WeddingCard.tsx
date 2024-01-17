import Image from 'next/image';
import ProjectContainer from './ProjectContainer';

const WeddingCard = () => {
  return (
    <ProjectContainer title="모바일 청접장" description="개발자 부부 채채의 모바일 청첩장">
      <Image
        src="/images/projects/wedding.png"
        alt="모바일 청접장"
        width={200}
        height={405}
        className="mx-auto"
      />
    </ProjectContainer>
  );
};

export default WeddingCard;
