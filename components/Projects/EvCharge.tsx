import Image from 'next/image';
import ProjectContainer from './ProjectContainer';

const EvCharge = () => {
  return (
    <ProjectContainer title="전기차G" description="전기차 충전소 상태 조회 서비스">
      <Image
        src="/images/projects/ev-charge.png"
        alt="전기차G"
        width={200}
        height={405}
        className="mx-auto"
      />
    </ProjectContainer>
  );
};

export default EvCharge;
