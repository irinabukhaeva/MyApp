import style from "./Table.module.scss"
import words from "../../words.json"
import Row from "../../Components/Row/Row"

export default function Table() {
  return (
    <div className={style.container}>{words.map((item,index) => <Row key={index} item={item}/>)}</div>
  )
}
