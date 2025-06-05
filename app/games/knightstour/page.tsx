'use client';

const KnightstourPage = () => {
  return (
    <main className="container-lg py-10">
      <h1 className="mb-2 text-3xl font-bold">기사의 여행</h1>
      <p className="mb-6 text-lg text-slate-600">데블스플랜에 나왔던 기사의 여행을 플레이해봐요!</p>
      <hr className="mb-8" />
      <div className="flex justify-center">
        <iframe
          src="https://chaechae-games.vercel.app/game1"
          title="기사의 여행 게임"
          className="h-[70vh] min-h-[500px] w-full max-w-7xl rounded-xl border border-gray-200 shadow-lg"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
};

export default KnightstourPage;
