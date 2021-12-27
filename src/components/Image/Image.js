/** React core **/
import React from 'react';

/** Styles **/
import styles from './Image.module.scss';

const Image = () => (
  <div className={styles.image}>
    <picture className={styles['image-box']}>
      <source media="(min-width: 992px)" srcSet={`${process.env.PUBLIC_URL}/images/illustration-box-desktop.svg`} />
      <img src={`${process.env.PUBLIC_URL}/images/illustration-box-desktop.svg`} alt="box" />
    </picture>
    <picture className={styles['image-main']}>
      <source media="(min-width: 992px)" srcSet={`${process.env.PUBLIC_URL}/images/illustration-woman-online-desktop.svg`} />
      <img src={`${process.env.PUBLIC_URL}/images/illustration-woman-online-mobile.svg`} alt="woman online" />
    </picture>
    <picture className={styles['image-shadow']}>
      <source media="(min-width: 992px)" srcSet={`${process.env.PUBLIC_URL}/images/bg-pattern-desktop.svg`} />
      <img src={`${process.env.PUBLIC_URL}/images/bg-pattern-mobile.svg`} alt="shadow"/>
    </picture>
  </div>
);

export default Image;
