import { useContext, useState } from "react"
import { myContext } from "../../Context/MyContext"
import { SimpleModal } from "../../Components/SimpleModal/SimpleModal";
import Row from "../../Components/Row/Row"
import AddWord from "../../Components/AddWord/AddWord";
import style from "./Table.module.scss"


export default function Table() {
  const {data} = useContext(myContext)
  const [modalIsOpen, setModalOpen] = useState(false);
  
  
  return (
    <>
      {data.map((item)=>{
        return <>
        <div className="container"><Row key={data.id} item={item}/></div></>
      })}
      
        <button
          className="modal-show-button"
          onClick={() => setModalOpen(true)}
        >
          Добавить новое слово
        </button>
        <SimpleModal
          isOpen={modalIsOpen}
          onClose={() => setModalOpen(false)}
        >
          <h2>Добавить новое слово</h2>
          
            <AddWord/>
          
        </SimpleModal>
    </>
    
    
  )
}
