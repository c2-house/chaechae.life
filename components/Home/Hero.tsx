const Hero = () => {
  return (
    <section className="bg-gradient-light bg-gradient-to-b">
      <div className="flex h-[100svh] items-center justify-center">
        <div className="px-6 text-center">
          <h1 className="mb-5 text-5xl font-bold md:mb-8 md:text-7xl lg:mb-12 lg:text-8xl">
            <span
              className="mb-4 block animate-fade-in md:mb-5 lg:mb-6"
              style={{ animationDelay: '0.1s' }}
            >
              개발자 부부
            </span>
            <span className="bg-gradient-text animate-fade-in" style={{ animationDelay: '0.3s' }}>
              채채
            </span>
          </h1>
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
    </section>
  );
};

export default Hero;
