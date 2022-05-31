import React from 'react'
import './Header.css'
import Img from '../../Assets/high-resolution-black-background-09.jpg'


function Header({setSearchTerm, searchTerm, title}) {

    function submitHandler(e) {
      e.preventDefault();

      setSearchTerm('')
    }

    function changeHandler(e) {
      setSearchTerm(e.target.value);
    }

  return (
    <div className="header" onSubmit={(e) => submitHandler(e)}>
      <img src={Img} alt="banner-img" className="banner-img__movies" />
      <div className="header-container">
        <h1 className="header-title">{title}</h1>
        <form className="search-container">
          <input type="text" className="search-bar" value={searchTerm} onChange={(e) => changeHandler(e)}/>
          <button className="submit-btn">Search</button>
        </form>
      </div>
    </div>
  );
}

export default Header