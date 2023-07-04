import React from 'react'
import styles from '../../modules/mediaPlayer.module.sass'
import {IconPause, IconPlayPause, IconPlayPauseBack} from '../../components'

export default function Mediaplayer() {
  return (
    <div className={styles.cardMedia}>
        <div className={styles.cover}>
            <div className={styles.photo}></div>
            <div className={styles.information}>
                <span  className={styles.album}>Album Muerte</span>
                <span  className={styles.name}>Maquiavélico</span>
                <span  className={styles.author}>Canserbero</span>
            </div>
        </div>
        <div className={styles.timeline}>
            <div className={styles.backgroundTime}>
                <div className={styles.bar}></div>
            </div>
            <div className={styles.time}>
                <span className={styles.start}>2:32</span>
                <span className={styles.end}>4:55</span>
            </div>
        </div>
        <div className={styles.buttons}>
            
            <button className={styles.secondaryButtons}>
                <IconPlayPauseBack/>
            </button>
            <button className={styles.principalButton}>
                <IconPause/>
            </button>
            <button className={styles.secondaryButtons}>
                <IconPlayPause/>
            </button>
            
        </div>
    </div>
  )
}
