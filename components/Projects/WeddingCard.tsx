import ProjectShowcaseCard, { type ProjectShowcaseCardProps } from './ProjectShowcaseCard';

const cards: Pick<ProjectShowcaseCardProps, 'title' | 'description' | 'src'>[] = [
  {
    title: '비슷비슷한 청첩장은 이제 그만!',
    description: '모바일 웹사이트 형태의 특별한 디자인',
    src: '01.jpg',
  },
  {
    title: '하객들을 위한 세심한 배려',
    description: '예식장 미리보기, 지도 앱 연동, 계좌번호 복사 등 편의 기능',
    src: '02.jpg',
  },
  {
    title: '모바일 청첩장의 꽃, 사진첩',
    description: '갤러리 앱처럼 편안하게 감상하세요.',
    src: '03.jpg',
  },
  {
    title: '방명록 작성',
    description: '방명록에 소중한 추억을 남겨보세요.',
    src: '04.jpg',
  },
];

const WeddingCard = () => {
  return (
    <>
      {cards.map((card) => (
        <ProjectShowcaseCard
          key={card.description}
          title={<p className="!my-0 font-semibold">{card.title}</p>}
          description={card.description}
          showcaseType="image"
          src={`/images/projects/wedding-card/${card.src}`}
          alt={card.description}
          cardBg="bg-sky-50/80"
        />
      ))}
    </>
  );
};

export default WeddingCard;
