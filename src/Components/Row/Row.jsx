import { useState } from 'react';
import {SaveIcon, EditIcon, DeleteIcon, ResetIcon} from '../Icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import style from "./Row.module.scss";

const schema = yup.object({
    english: yup.string().required("Введите слово").min(2, "Минимум 2 буквы").matches(/^[a-zA-Z]*$/, "Только латинские буквы")
})

export default function Row (props) {
  const { english, transcription, russian } = props.item;
  const [isEditing, setIsEditing] = useState(false);
  const [word, setWord] = useState({
    english,
    transcription,
    russian
  });
  
  const {handleSubmit, register, formState: {errors},} = useForm({mode:"onChange", resolver: yupResolver(schema)})

  const onSubmit = (data) => console.log(data);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWord((prevWord) => ({
      ...prevWord,
      [name]: value
    }));
  };
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleCancelEdit = () => {
    setWord({
      english,
      transcription,
      russian
    });
    setIsEditing(false);
  };

  return (
    <form className={style.row} onSubmit={handleSubmit(onSubmit)}>
      {isEditing ? (
        <>
          <div>
            <input
              type="text"
              {...register("english")}
              value={word.english}
              onChange={handleChange}
              className={style.word}
            />
            <p>{errors.english?.message}</p>
          </div>
          <input
            type="text"
            name="transcription"
            value={word.transcription}
            onChange={handleChange}
            className={style.word}
          />
          <input
            type="text"
            name="russian"
            value={word.russian}
            onChange={handleChange}
            className={style.word}
          />
        </>
      ) : (
        <>
          <div className={style.word}>{word.english}</div>
          <div className={style.word}>{word.transcription}</div>
          <div className={style.word}>{word.russian}</div>
        </>
      )}
      <div className={style.buttons}>
        <button type="submit" onClick={handleEdit} className={style.svg}>
          {isEditing ? (<SaveIcon />) : (<EditIcon />)}
        </button>
        {isEditing && (
          <button onClick={handleCancelEdit} className={style.svg}>
            <ResetIcon />
          </button>
        )}
        <button className={style.svg}>
          <DeleteIcon />
        </button>
      </div>
    </form>
  );
}
