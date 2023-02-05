import React, { useState } from 'react';
import s from './Counter.module.scss';
export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      Counter:{count}
      <button className={s.button} onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className={s.button} onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}
