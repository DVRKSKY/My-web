import React from 'react';
import styles from '../../modules/versatileDesign.module.sass';

export default function VersatileDesign() {
  return (
    <div className={styles.containCube}>
        <div className={styles.cube}>
        <div className={styles.top}></div>
        <div>
            <span className={styles.span} style={{ '--i': 0 }}></span>
            <span className={styles.span} style={{ '--i': 1 }}></span>
            <span className={styles.span} style={{ '--i': 2 }}></span>
            <span className={styles.span} style={{ '--i': 3 }}></span>
        </div>
        </div>
    </div>
  );
}
