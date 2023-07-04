const mediaplayerCode = `import React from 'react'
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
}`;

const responsiveDesign = `import React, { useState } from 'react'
import styles from '../../modules/responsiveCard.module.sass'
import { IconMobile, IconWeb, IconEdit, IconDelete } from '../../components'

export default function ResponsiveCard() {
    const [isResponsive, setIsResponsive] = useState(false)

    const changeView = (view) => {
        setIsResponsive(view === 'web')
    }

    return (
        <div className={\`{styles.contentCard} \{isResponsive ? styles.responsive : ''}\`}>
            <div className={styles.actionsResponsive}>
                <div onClick={() => changeView('mobile')} className={\`\${!isResponsive ? styles.active : styles.disabled}\`}><IconMobile/></div>
                <div onClick={() => changeView('web')} className={\`\${isResponsive ? styles.active : styles.disabled}\`}><IconWeb/></div>
            </div>
            <div className={styles.responsiveCard}>
                <img className={styles.image} src='https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Amadeo-portafolio%2Fimage-PhotoRoom%207.png?alt=media&token=9dac9652-6f43-4336-9265-4b955ae60cee' alt='zapatillas azules'/>
                <div className={styles.data}>
                    <div className={styles.price}>$1000.00</div>
                    <div className={styles.information}>
                        <div className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, possimus?</div>
                        <div className={styles.actions}>
                            <div className={styles.edit}><IconEdit/></div>
                            <div className={styles.delete}><IconDelete/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}`

const creativeDesign = `import React from 'react'
import styles from '../../modules/creativeDesign.module.sass'

//All magic is in css

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

`

const versatileDesign = `/*

There is nothing that cannot be done, we just have to 
write code, google and drink a lot of coffee.

*/

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


`
const coopAi = `//👨‍💻 Hi, Chat gpt, generete for me please a simple calculator using React.

/*🤖 Hello! Sure, I'll be happy to help you create a basic calculator component 
in React. Here's an example of how you can implement it: */

//👨‍💻 Great thanks, it works but doesn't look so good

/*🤖 It already helps you a lot, if you want it to look pretty, do it yourself👁️👅👁️.*/

//👨‍💻Hahaha should not have been trumpeted to talk to me like a best friend.

import React from 'react'
import { useState } from 'react';
import styles from '../../modules/coopAi.module.sass'

export default function CoopAi() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const handleNum1Change = (e) => {
        setNum1(Number(e.target.value));
    };
    const handleNum2Change = (e) => {
        setNum2(Number(e.target.value));
    };
    const handleAddition = () => {
        setResult(num1 + num2);
    };
    const handleSubtraction = () => {
        setResult(num1 - num2);
    };
    const handleMultiplication = () => {
        setResult(num1 * num2);
    };
    const handleDivision = () => {
        setResult(num1 / num2);
    };
    return (
        <div className={styles.cardCalculator}>
            <div className={styles.result}>
                <h2 className={styles.number}>{result}</h2>
            </div>
            <div className={styles.inputsCalculator}>
                <input className={styles.inputCal} type="number" value={num1} onChange={handleNum1Change} />
                <input className={styles.inputCal} type="number" value={num2} onChange={handleNum2Change} />
            </div>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={handleAddition}>+</button>
                <button className={styles.button} onClick={handleSubtraction}>-</button>
                <button className={styles.button} onClick={handleMultiplication}>*</button>
                <button className={styles.button} onClick={handleDivision}>/</button>
            </div>
        </div>
    );
}


`

export {mediaplayerCode, responsiveDesign, creativeDesign, versatileDesign, coopAi} ;