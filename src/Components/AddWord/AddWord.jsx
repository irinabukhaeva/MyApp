import { useContext, useState } from "react";
import { myContext } from "../../Context/MyContext";
import JSONS from "../../Services/JSONServices";


export default function AddWord() {
    const [english, setEnglish] = useState ("")
    const [transcription, setTranscription] = useState ("")
    const [russian, setRussian] = useState ("")
    const { updServ, setUpdServ} = useContext(myContext)

    async function handleWordAdd(e) {
        e.preventDefault();

       await JSONS.addData({
            english,
            transcription,
            russian
        });
        setUpdServ(!updServ);
    }

    return (
        <div>
            <form onSubmit={handleWordAdd}>
                <input 
                  type="text"
                  name="english"
                  placeholder="Введите слово на наглийском"
                  value={english}
                  onChange={(e)=>{setEnglish(e.target.value)}} />
                <input 
                  type="text"
                  name="transcription"
                  placeholder="Введите транскрипцию слова"
                  value={transcription}
                  onChange={(e)=>{setTranscription(e.target.value)}} />
                <input 
                  type="text"
                  name="russian"
                  placeholder="Введите перевод слова на русский"
                  value={russian}
                  onChange={(e)=>{setRussian(e.target.value)}} />
                <button type="submit">Добавить новое слово</button>
            </form>
        </div>
    )
}