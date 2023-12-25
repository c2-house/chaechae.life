import Image from 'next/image';

const Home = () => {
  return (
    <main>
      <section className="container-lg p-0 lg:px-8">
        <div className="relative flex h-[30vh] items-center justify-center bg-black/60">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <Image
              src={`/images/cover/main.jpg`}
              alt="Welcome to my blog!"
              width={960}
              height={400}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="px-6 text-center text-white">
            <h1 className="mb-3 text-3xl font-semibold sm:mb-6 md:text-4xl lg:text-5xl">
              Welcome to my blog!
            </h1>
            <p className="text-base md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sapiente numquam ipsum
            </p>
          </div>
        </div>
      </section>
      <section className="container-lg pt-10">Homepage</section>
    </main>
  );
};

export default Home;
