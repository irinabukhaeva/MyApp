import React, { useState } from 'react';
import style from "./Cards.module.scss";
import SaveIcon from '../Icons/SaveIcon/SaveIcon';
import EditIcon from '../Icons/EditIcon/EditIcon';
import DeleteIcon from '../Icons/DeleteIcon/DeleteIcon';
import ResetIcon from '../Icons/ResetIcon/ResetIcon';

export default function Cards(props) {
  const { english, transcription, russian } = props.item;
  const [isEditing, setIsEditing] = useState(false);
  const [word, setWord] = useState({
    english,
    transcription,
    russian
  });

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
    <div className={style.row}>
      {isEditing ? (
        <>
          <input
            type="text"
            name="english"
            value={word.english}
            onChange={handleChange}
            className={style.word}
          />
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
        <button onClick={handleEdit} className={style.svg}>
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
    </div>
  );
}
