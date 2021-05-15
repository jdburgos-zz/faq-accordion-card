/** React core **/
import React from 'react';

/** Styles **/
import styles from './Card.module.scss';

const Card = props => {
  return (
    <div className={styles.card}>{ props.children }</div>
  );
}

export default Card;
