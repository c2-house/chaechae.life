import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-gradient-light relative bg-gradient-to-b">
      <div className="flex h-[100svh] items-center justify-center">
        <div className="px-6 text-center">
          <div className="mx-auto mb-4 flex w-fit flex-col lg:mb-5">
            <span
              className="bg-gradient-dark animate-fade-in rounded-full text-xl tracking-wider text-white md:py-1 md:text-2xl lg:text-3xl"
              style={{ animationDelay: '0.1s' }}
            >
              개발자 부부 채채의
            </span>
            <h1
              className="bg-gradient-text my-3 animate-fade-in text-5xl font-semibold tracking-tight md:my-4 md:text-7xl lg:my-5 lg:text-8xl"
              style={{ animationDelay: '0.3s' }}
            >
              채채라이프
            </h1>
          </div>
          <p
            className="animate-fade-in text-lg text-slate-700 md:text-xl md:!leading-relaxed lg:text-2xl"
            style={{ animationDelay: '0.5s' }}
          >
            세상에 필요한 서비스를 만듭니다.
            <br />
            사용하기 쉽고 편리한 서비스를 개발합니다.
          </p>
        </div>
      </div>
      <Image
        src="/images/avatar/eko.png"
        alt="eko"
        width={100}
        height={100}
        className="animate-move-right absolute bottom-0 left-0"
      />
      <Image
        src="/images/avatar/mingke.png"
        alt="mingke"
        width={100}
        height={100}
        className="animate-move-left absolute bottom-0 right-0"
      />
    </section>
  );
};

export default Hero;
