import style from "./Cards.module.scss"

export default function Cards(props) {
  const {english, transcription, russian} = props.item
  return (
    <><div className={style.row}>
        <div className={style.word}>{english}</div>
        <div className={style.word}>{transcription}</div>
        <div className={style.word}>{russian}</div>
        <div className={style.buttons}>
          <button classname={style.save}><svg version="1.1" id="icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="41.92px" height="41.92px" viewBox="0 0 41.92 41.92" enable-background="new 0 0 41.92 41.92" xml:space="preserve">
<g id="Icon_52_">
	
		<circle fill="none" stroke="#50BC93" stroke-width="3.92" stroke-linecap="round" stroke-miterlimit="10" cx="20.96" cy="20.96" r="19"/>
	
		<polyline fill="none" stroke="#50BC93" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
		13.091,20.338 18.483,25.87 29.091,15.87 	"/>
</g>
</svg></button>
          <button><svg version="1.1" id="icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="46.815px" height="46.856px" viewBox="0 0 46.815 46.856" enable-background="new 0 0 46.815 46.856" xml:space="preserve">
<g id="Icon_8_">
	
		<polyline fill="none" stroke="#50BC93" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
		36,28.856 36,44.856 2,44.856 2,10.856 16,10.856 	"/>
	<g>
		
			<polygon fill="none" stroke="#50BC93" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
			25.215,30.107 44.815,10.431 36.351,2 16.751,21.676 15.185,31.712 		"/>
		
			<line fill="none" stroke="#50BC93" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="31.285" y1="7.829" x2="39.063" y2="15.607"/>
	</g>
</g>
</svg></button>
          <button><svg version="1.1" id="icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="42px" height="48px" viewBox="0 0 42 48" enable-background="new 0 0 42 48" xml:space="preserve">
<g id="Icon_42_">
	<path fill="none" stroke="#50BC93" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" d="M31.372,46H11.628
		C7.762,46,5,42.366,5,38.5V11.086C5,9.982,5.523,10,6.628,10h28.744C36.477,10,37,9.982,37,11.086V39.5
		C37,42.814,34.686,46,31.372,46z"/>
	
		<line fill="none" stroke="#50BC93" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="2" y1="10" x2="40" y2="10"/>
	<path fill="none" stroke="#50BC93" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" d="M28,8c0,0.552-0.448,1-1,1
		H15c-0.552,0-1-0.448-1-1V3c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1V8z"/>
	
		<line fill="none" stroke="#50BC93" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="13" y1="19" x2="13" y2="37"/>
	
		<line fill="none" stroke="#50BC93" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="21" y1="19" x2="21" y2="37"/>
	
		<line fill="none" stroke="#50BC93" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" x1="29" y1="19" x2="29" y2="37"/>
</g>
</svg></button>
          
        </div>
    </div>
    </>               
  )
}
