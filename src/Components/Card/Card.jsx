import React, { useState, useEffect } from 'react';
import style from './Card.module.scss';

export default function Card({word}) {
  const [flag, setFlag]=useState(false);
  useEffect(() => {setFlag(false);},[word])

    return (          
          <div className={style.card}>
              <div className={style.word}>{word.english}</div>
              <div className={style.word}>{word.transcription}</div>
              {flag ? (
                      <div onClick={()=>setFlag(false)} className={style.word}>{word.russian}</div>
                  ) : (
                      <button onClick={()=>setFlag(true)} className={style.button}>
                          Перевод
                      </button>
                  )}              
          </div>        
    );
}
