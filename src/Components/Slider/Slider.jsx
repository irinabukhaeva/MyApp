import React,{useState} from 'react'
import { myContext } from '../../Context/MyContext';
import Card from '../Card/Card'
import style from "./Slider.module.scss"

export default function Slider() {
    const {data} = useContext(myContext)
    const [count, setCount] = useState(0)
    const handlePrev = ()=>{        
        setCount((prevCount) => prevCount-1)
    } 
    const handleNext = ()=>{        
        setCount((prevCount) => prevCount+1)
    }
    return (
    <>
    <div className={style.container}>
        {count>0 ? (<button onClick={handlePrev} className={style.button}>Предыдущее слово</button>) : <div className={style.empty}></div>}        
        <Card word={data[count]}/>
        {count<(words.length-1) ? <button onClick={handleNext} className={style.button}>Следующее слово</button> : <div className={style.empty}></div>}
    </div>
    </>
    )
}
