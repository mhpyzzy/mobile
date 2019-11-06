import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { useHistory, useLocation } from 'react-router-dom';
export default function Header() {
  console.log('useLocation', useLocation());
  const history = useHistory();
  useEffect(() => {});

  return (
    <div className={`${styles.Header}`}>
      <div onClick={() => history.push('/', { name: 'zzy' })}>
        <img className={styles.logo} src='/image/logo_white.png' alt='' />
      </div>
      <div className={styles.right}>
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
    </div>
  );
}
