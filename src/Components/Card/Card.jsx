import React, { useState, useEffect, useRef, useContext } from 'react';
import { myContext } from '../../Context/MyContext';
import style from './Card.module.scss';

export default function Card({ word, onLearned, learnedCounter }) {
  const {data} = useContext(myContext)
  const [flag, setFlag] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    if (flag) setFlag(false);
  }, [word]);

  useEffect(() => {
    console.log(btnRef.current);
    if (btnRef.current) {
      btnRef.current.focus();
    }
  }, [word]);

  const getTranslate = () => {
    setFlag(true);
    onLearned();
  };

  return (
    <div className={style.card}>
      <div className={style.word}>{word.english}</div>
      <div className={style.word}>{word.transcription}</div>
      {flag ? (
        <div className={style.word}>{word.russian}</div>
      ) : (
        <button ref={btnRef} onClick={getTranslate} className={style.button}>
          Перевод
        </button>
      )}
      <div className={style.learnedCounter}>Выучено слов: {learnedCounter}</div>
    </div>
  );
}
