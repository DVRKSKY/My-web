import React from 'react'
import styles from '../../modules/creativeDesign.module.sass'

export default function CreativeDesign() {
  return (
    <div className={styles.contenedor}>
        <div className={styles.sombra}></div>
        <div className={styles.gatito}>
            <div className={styles.orejita}></div>
            <div className={styles.ojitos}></div>
            <div className={styles.boca}></div>
            <div className={styles.boquita}></div>
            <div className={styles.nariz}></div>
            <div className={styles.colita}></div>
            <div className={styles.cuerpo}></div>
            <div className={styles.moco}></div>
        </div>
    </div>

  )
}
