import style from "./Table.module.scss"
import words from "../../words.json"
import Cards from "../Cards/Cards"

export default function Table() {
  return (
    <div className="container">{words.map((item,index) => <Cards key={index} item={item}/>)}</div>
  )
}
