import React, { useRef } from 'react';
import styles from './search_header.module.css'

const SearchHeader = (props) => {

  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
    // 자식 컴포넌트에서 부모컴포넌트의 함수를 호출한다?
    props.onSearch(value);
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
      <div className={styles.logo}>
        <img className={styles.img} src="/images/Youtube.png" alt="lgo" />
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