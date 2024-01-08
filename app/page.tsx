const Home = () => {
  return (
    <main>
      <section className="bg-gradient-light bg-gradient-to-b">
        <div className="flex h-screen items-center justify-center md:h-screen">
          <div className="px-6 text-center">
            <h1 className="mb-5 text-5xl font-semibold md:mb-8 md:text-7xl lg:mb-12 lg:text-8xl">
              개발자 부부
              <br />
              <span className="bg-gradient-text mt-4 inline-block md:mt-5 lg:mt-6">채채</span>
            </h1>
            <p className="text-lg text-slate-700 md:text-xl md:!leading-relaxed lg:text-2xl">
              세상에 필요한 서비스를 만듭니다.
              <br />
              사용하기 쉽고 편리한 서비스를 개발합니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
