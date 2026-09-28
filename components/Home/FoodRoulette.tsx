'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const foods = [
  { emoji: '🍜', name: '라멘' },
  { emoji: '🍔', name: '햄버거' },
  { emoji: '🍗', name: '치킨' },
  { emoji: '🍣', name: '초밥' },
  { emoji: '🥗', name: '샐러드' },
  { emoji: '🍕', name: '피자' },
];

const FoodRoulette = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string>();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const spin = () => {
    if (isSpinning) return;
    const selected = Math.floor(Math.random() * foods.length);
    const nextAngle = (360 - selected * 60) % 360;
    setRotation((previous) => previous + 1080 + ((nextAngle - (previous % 360) + 360) % 360));
    setIsSpinning(true);
    setResult(undefined);
    timeoutRef.current = setTimeout(() => {
      setResult(foods[selected].name);
      setIsSpinning(false);
    }, 1500);
  };

  return (
    <div className={styles.rouletteCard}>
      <p className={styles.foodBubble} aria-live="polite" aria-atomic="true">
        {result ? (
          <>
            오늘은 {result},<br />
            어때요?
          </>
        ) : (
          <>
            맛있는
            <br />
            하루 되세요!
          </>
        )}
      </p>
      <p className={styles.rouletteTitle}>오늘 뭐 먹지?</p>
      <div className={styles.roulette}>
        <div
          className={styles.wheel}
          style={{ transform: `rotate(${rotation}deg)` }}
          aria-hidden="true"
        >
          {foods.map((food, index) => (
            <span
              key={food.name}
              className={styles.foodEmoji}
              style={{
                left: `${50 + Math.sin((index * Math.PI) / 3) * 34}%`,
                top: `${50 - Math.cos((index * Math.PI) / 3) * 34}%`,
              }}
            >
              {food.emoji}
            </span>
          ))}
        </div>
        <button
          type="button"
          className={styles.spinButton}
          onClick={spin}
          disabled={isSpinning}
          aria-label="오늘의 메뉴 룰렛 돌리기"
        >
          {isSpinning ? '두근두근' : '돌리기'}
        </button>
      </div>
    </div>
  );
};

export default FoodRoulette;
