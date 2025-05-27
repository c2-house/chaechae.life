'use client';

const PoopDodgePage = () => {
  return (
    <main className="container-lg py-10">
      <h1 className="text-3xl font-bold mb-2">똥피하기</h1>
      <p className="mb-6 text-lg text-slate-600">똥을 피해 살아남으세요!</p>
      <hr className="mb-8" />
      <div className="flex justify-center">
        <iframe
          src="https://poop-dodge-chi.vercel.app/"
          title="똥피하기 게임"
          width="1400"
          height="800"
          className="w-full max-w-7xl h-[80vh] min-h-[500px] rounded-xl border border-gray-200 shadow-lg"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
};

export default PoopDodgePage; 