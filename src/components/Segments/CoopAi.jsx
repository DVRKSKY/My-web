//👨‍💻 Hi, Chat gpt, generete for me please a simple calculator using React.

/*🤖 Hello! Sure, I'll be happy to help you create a basic calculator component 
in React. Here's an example of how you can implement it: */

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
