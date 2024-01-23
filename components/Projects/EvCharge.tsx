import ProjectShowcaseCard, { type ProjectShowcaseCardProps } from './ProjectShowcaseCard';

const cards: Pick<ProjectShowcaseCardProps, 'title' | 'alt' | 'src' | 'phoneBg'>[] = [
  {
    title: (
      <>
        어디서든 현 위치 중심으로
        <br />
        <span className="text-green-600">가까운 충전소</span>를 찾아드려요.
      </>
    ),
    alt: '어디서든 현 위치 중심으로 가까운 충전소를 찾아드려요.',
    src: '01.jpg',
  },
  {
    title: (
      <>
        <span className="text-green-600">잔여 충전기, 급속충전기</span>가 있는지
        <br />
        실시간 정보를 보여드려요.
      </>
    ),
    alt: '잔여 충전기, 급속충전기가 있는지 실시간 정보를 보여드려요.',
    src: '02.jpg',
  },
  {
    title: (
      <>
        <span className="text-green-600">충전소 리뷰</span>를 남겨
        <br />
        최신 정보를 공유할 수 있어요.
      </>
    ),
    alt: '충전소 리뷰를 남겨 최신 정보를 공유할 수 있어요.',
    src: '03.jpg',
    phoneBg: 'bg-[#848484]',
  },
  {
    title: (
      <>
        전기차 관련 유용한 정보를
        <br />
        <span className="text-green-600">블로그</span>에서 전달해드려요.
      </>
    ),
    alt: '전기차 관련 유용한 정보를 블로그에서 전달해드려요.',
    src: '04.jpg',
  },
  {
    title: (
      <>
        전기차 <span className="text-green-600">중고 시세</span>를
        <br />
        월별로 확인해보세요.
      </>
    ),
    alt: '전기차 중고 시세를 월별로 확인해보세요.',
    src: '05.jpg',
  },
];

const EvCharge = () => {
  return (
    <>
      {cards.map((card) => (
        <ProjectShowcaseCard
          key={card.alt}
          title={<p className="!mt-0">{card.title}</p>}
          showcaseType="image"
          src={`/images/projects/ev-charge/${card.src}`}
          alt={card.alt}
          cardBg="odd:bg-teal-50 even:bg-amber-50/70"
          phoneBg={card.phoneBg}
        />
      ))}
    </>
  );
};

export default EvCharge;
