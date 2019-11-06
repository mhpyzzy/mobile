import React, { useState } from 'react';
import styles from './styles.module.scss';
export default function Footer() {
  const [email, setEmail] = useState('');
  return (
    <div className={styles.Footer}>
      <div className={styles.content}>
        <div>
          <div className={styles.flex}>
            <div className={`${styles.item} ${styles.title}`}>iSTOX</div>
            <div className={`${styles.item} ${styles.title}`}>Company</div>
          </div>
          <div className={styles.flex}>
            <div className={styles.item}>Home</div>
            <div className={styles.item}>About Us</div>
          </div>
          <div className={styles.flex}>
            <div className={styles.item}>For Issuers</div>
            <div className={styles.item}>Careers</div>
          </div>
          <div className={styles.flex}>
            <div className={styles.item}>FAQ </div>
            <div className={styles.item}>iSTOX News</div>
          </div>
        </div>
        {/* Legal */}
        <div className={styles.Legal}>
          <div className={`${styles.item} ${styles.title}`}>Legal</div>
          <div className={styles.item}>Terms and Conditions </div>
          <div className={styles.item}>Privacy Policy</div>
          <div className={styles.item}>Cookie Policy</div>
          <div className={styles.item}>Listing Rules </div>
          <div className={styles.item}>Exchange Rules </div>
        </div>

        <div className={styles.connect}>Connect With Us</div>
        <div className={styles.email}>contact@istox.com</div>

        {/* icon */}
        <div className={styles.icon_group}>
          <img className={styles.icon} src='/image/linkedin-in.svg' />
          <img className={styles.icon} src='/image/twitter.svg' />
          <img className={styles.icon} src='/image/medium-m.svg' />
          <img className={styles.icon} src='/image/facebook.svg' />
        </div>

        {/* Letter */}
        <div className={styles.letter}>
          <div className={styles.letter_title}>Newsletter</div>
          <input
            className={styles.input}
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={styles.btn}>Subscribe</div>
        </div>
      </div>

      <div className={styles.istox}>
        <div className={styles.reserved}>
          © 2019 iSTOX. All rights reserved.
        </div>
        <div className={styles.text}>
          The iSTOX Platform is established and operated by ICHX Tech Pte. Ltd.
          in a regulatory sandbox, and has been exempted from compliance with
          some of the requirements under the Securities and Futures Act (Cap
          289) (“SFA”) during the period of 1 May 2019 to 31 January 2020 (both
          dates inclusive), subject to such further extension as the Monetary
          Authority of Singapore (“MAS”) may approve (the “Sandbox Period”).
        </div>
        <div className={styles.protected}>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </div>
      </div>
    </div>
  );
}
