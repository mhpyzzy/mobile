import React from 'react';
import styles from './styles.module.scss';
export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.flex}>
        <div className={`${styles.flex_item} ${styles.title}`}>iSTOX</div>
        <div className={`${styles.flex_item} ${styles.title}`}>iSTOX</div>
      </div>
      <div className={styles.flex}>
        <div className={styles.flex_item}>Home</div>
        <div className={styles.flex_item}>About Us</div>
      </div>
      <div className={styles.flex}>
        <div className={styles.flex_item}>For Issuers</div>
        <div className={styles.flex_item}>Careers</div>
      </div>
      <div className={styles.flex}>
        <div className={styles.flex_item}>FAQ </div>
        <div className={styles.flex_item}>iSTOX News</div>
      </div>
    </div>
  );
}
