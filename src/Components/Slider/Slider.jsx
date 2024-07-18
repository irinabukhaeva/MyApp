import React,{useState} from 'react'
import words from "../../words.json"
import Card from '../Card/Card'
import style from "./Slider.module.scss"

export default function Slider() {
    const [count, setCount] = useState(0)
    const handlePrev = ()=>{
        
        setCount((prevCount) => prevCount-1)
    } 
    const handleNext = ()=>{
        if (count>(words.length-1)) {
            count=0
        }
        setCount((prevCount) => prevCount+1)
    }
    return (
    <>
    <div className={style.container}>
        {count>0 ? (<button onClick={handlePrev} className={style.button}>Предыдущее слово</button>) : <div className={style.empty}></div>}        
        <Card word={words[count]}/>
        {count<(words.length-1) ? <button onClick={handleNext} className={style.button}>Следующее слово</button> : <div className={style.empty}></div>}
    </div>
    </>
    )
}
