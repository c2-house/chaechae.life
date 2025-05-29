'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface LeaderboardEntry {
  id: number;
  nickname: string;
  record: string;
}

const PoopDodgePage = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('leaderboard')
        .select('id, nickname, record')
        .eq('game_id', 'game1')
        .order('record', { ascending: false })
        .limit(5);
      if (error) {
        setError('리더보드 정보를 불러오지 못했습니다.');
        setLeaderboard([]);
      } else {
        setLeaderboard(data || []);
      }
      setLoading(false);
    };
    fetchLeaderboard();
  }, []);

  return (
    <main className="container-lg py-10">
      <h1 className="mb-2 text-3xl font-bold">똥피하기</h1>
      <p className="mb-6 text-lg text-slate-600">똥을 피해 살아남으세요!</p>
      <hr className="mb-8" />
      <div className="flex justify-center">
        <iframe
          src="https://poop-dodge-chi.vercel.app/"
          title="똥피하기 게임"
          width="1400"
          height="800"
          className="h-[65vh] min-h-[500px] w-full max-w-7xl rounded-xl border border-gray-200 shadow-lg"
          allowFullScreen
        ></iframe>
      </div>
      {/* 리더보드 */}
      <div className="mt-10 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">리더보드</h2>
        {loading ? (
          <div className="text-slate-500">로딩 중...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <table className="min-w-[320px] max-w-lg w-full text-center border-separate border-spacing-y-2">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 rounded-l-lg">순위</th>
                <th className="py-2">닉네임</th>
                <th className="py-2 rounded-r-lg">기록</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, idx) => (
                <tr key={entry.id} className="bg-white shadow rounded-lg">
                  <td className="py-2 font-bold text-indigo-600">{idx + 1}</td>
                  <td className="py-2">{entry.nickname}</td>
                  <td className="py-2">{entry.record}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
};

export default PoopDodgePage;
