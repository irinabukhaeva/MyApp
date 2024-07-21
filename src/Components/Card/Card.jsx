import React, { useState, useEffect, useRef } from 'react';
import style from './Card.module.scss';

export default function Card({word}) {
    const [flag, setFlag]=useState(false);
    useEffect(() => {if (flag) setFlag(false);},[word]);

    const [learnedCounter, setLearnedCounter] = useState(0);
    const editLearnedCounter = () => {
        setLearnedCounter(learnedCounter+1)};

    const btnRef = useRef("")
    useEffect(()=>{btnRef.current.focus();});
        
    function getTranslate () {
          setFlag(true);
          editLearnedCounter();
        }
        return (          
          <div className={style.card}>
              <div className={style.word}>{word.english}</div>
              <div className={style.word}>{word.transcription}</div>
              {flag ? (
                      <div className={style.word}>{word.russian}</div>
                  ) : (
                      <button ref={btnRef} onClick = {getTranslate} className={style.button}>
                          Перевод
                      </button>
                  )}
                  <div className={style.learnedCounter}>Выучено слов: {learnedCounter}</div>              
          </div>        
    );
}
