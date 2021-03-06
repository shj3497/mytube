import React, { useRef } from 'react';
import styles from './search_header.module.css'
import youtubePng from './youtube.png';

const SearchHeader = (props) => {

  const logoClick = props.mainPageGo;
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    // 자식 컴포넌트에서 부모컴포넌트의 함수를 호출한다?
    props.onSearch(value);
  }

  const mainPageGo = () => {
    logoClick();
  }

  const onClick = () => {
    handleSearch();
  }

  const onKeyPress = (event) => {
    if(event.key === 'Enter'){
      handleSearch();
    }
  }

  return(
    <header className={styles.header}>
      <div className={styles.logo} onClick={mainPageGo}>
        <img className={styles.img} src={youtubePng} alt="logo" />
        <h1 className={styles.title}>Mytube</h1>
      </div>
      <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress} />
      <button className={styles.button} type="submit" onClick={onClick}>
        <i className="fas fa-search"></i>
      </button>
    </header>
  )
}

export default SearchHeader;