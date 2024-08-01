

export default function Cell(props) {
    const { english } = props.item;
  return (
    <div> <input
    type="text"
    
    value={english}
    // onChange={handleChange}
    className={style.word}
  /></div>
  )
}
