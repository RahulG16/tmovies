import React, {useContext} from 'react'
import './Button.css'
import {FilmContext} from '../../../Store/FilmInfoProvider'

function Button({BtnName, data_id, data_type}) {

  let filmCtx = useContext(FilmContext)

  function clickHandler(e) {

    let movieId = e.target.dataset.id;
    let contentType = e.target.dataset.type;

    filmCtx.setID(movieId);
    filmCtx.setType(contentType);
  }


  return (
    <button className='btn' data-id={data_id} data-type={data_type} onClick={(e) => clickHandler(e)}>{BtnName}</button>
  )
}

export default Button