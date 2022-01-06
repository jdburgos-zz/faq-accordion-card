/** React core **/
import React, { useState } from 'react';

/** Styles **/
import styles from './FaqItem.module.scss';

type FaqItemProps = {
  item: {
    id: number;
    content: string;
    title: string;
  };
};

const FaqItem: React.FC<FaqItemProps> = ({ item }) => {
  const [showContent, setShowContent] = useState(false);

  const itemClickHandler = () => {
    setShowContent(prevState => !prevState);
  };

  const activeClass = showContent ? styles.active : '';
  const content = <p className={styles['faq-item__content']}>{item.content}</p>;

  return (
    <div
      id={String(item.id)}
      className={`${styles['faq-item']} ${activeClass}`}
      onClick={itemClickHandler.bind(null, item)}
    >
      <div className={styles['faq-item__header']}>
        <div className={styles['faq-item__title']}>{item.title}</div>
        <img
          className={styles['faq-item__arrow']}
          src={`${process.env.PUBLIC_URL}/images/icon-arrow-down.svg`}
          alt="arrow"
        />
      </div>
      {showContent && content}
    </div>
  );
};

export default FaqItem;
