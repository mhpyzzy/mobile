import React from 'react';
import styles from './styles.module.scss';
export default function Content(props) {
  return (
    <div className={`${styles.Content} ${styles.active}`}>{props.children}</div>
  );
}
