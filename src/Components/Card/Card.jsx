import React, { useState } from 'react'
import words from "../../words.json"
import style from "./Card.module.scss";


export default function Card() {
    const wordIndex = Math.floor(Math.random()*Object.keys(words).length);
    const word = words[wordIndex].english;
    const transcription = words[wordIndex].transcription;
    const translation = words[wordIndex].russian;
    const [translateClicked, setTranslateClicked] = useState(false);
    const handleTranslateClicked = () => {
        setTranslateClicked(!translateClicked)    
      };
    
    return (
        <div className={style.card}>
        <div className={style.word}>{word}</div>
        <div className={style.word}>{transcription}</div>
        <div className={style.word}>{translateClicked ? <div onClick = {handleTranslateClicked}>{translation}</div> : <button onClick = {handleTranslateClicked} className={style.button}>Перевод</button>}</div>
      </div>
  )
}
