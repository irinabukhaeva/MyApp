import React, { useState } from 'react';
import words from "../../words.json";
import Card from '../../Components/Card/Card';
import style from "./Slider.module.scss";

export default function Slider() {
  const [count, setCount] = useState(0);
  const [learnedCounter, setLearnedCounter] = useState(0);

  const handlePrev = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleNext = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleLearned = () => {
    setLearnedCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className={style.container}>
      {count > 0 ? (
        <button onClick={handlePrev} className={style.button}>Предыдущее слово</button>
      ) : (
        <div className={style.empty}></div>
      )}
      <Card key={count}
        word={words[count]} 
        onLearned={handleLearned} 
        learnedCounter={learnedCounter}
      />
      {count < (words.length - 1) ? (
        <button onClick={handleNext} className={style.button}>Следующее слово</button>
      ) : (
        <div className={style.empty}></div>
      )}
    </div>
  );
}
