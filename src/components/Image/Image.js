import React from 'react';
import styles from './Image.module.scss';

const Image = () => (
  <div className={styles.image}>
    <img className={styles['image-main']} src={`${process.env.PUBLIC_URL}/images/illustration-woman-online-mobile.svg`} alt="woman online" />
    <img className={styles['image-shadow']} src={`${process.env.PUBLIC_URL}/images/bg-pattern-mobile.svg`} alt="shadow"/>
  </div>
);

export default Image;
