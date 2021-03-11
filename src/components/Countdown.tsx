import { useContext } from 'react'
import { CountdownContext } from '../context/CountdowContext'
import styles from '../styles/components/Countdown.module.css'

interface IButton {
    isActive: boolean;
    hasFinished: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

function Button({ isActive, hasFinished, startCountdown, resetCountdown }: IButton) {

    if (isActive) {
        return (
            <button
                onClick={resetCountdown}
                className={`${styles.countdownButton} ${styles.countdownButtonActivated}`}
                type="button"
            >
                Abortar ciclo
            </button>
        )
    }

    if (hasFinished) {
        return (
            <button
                className={styles.countdownButton}
                disabled

            >
                Ciclo encerrado {<img src="icons/complete.svg" alt=""/>}
            </button>
        )
    }

    return (
        <button
            onClick={startCountdown}
            className={styles.countdownButton}
            type="button"
        >
            Iniciar um ciclo 
        </button>
    )
}

export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
    } = useContext(CountdownContext)

    function getStringTime(number: number) {
        return String(number).padStart(2, '0').split('')
    }

    const [minuteLeft, minuteRight] = getStringTime(minutes)
    const [secondLeft, secondRight] = getStringTime(seconds)

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            <Button
                isActive={isActive}
                startCountdown={startCountdown}
                resetCountdown={resetCountdown}
                hasFinished={hasFinished}
            />
        </div>
    )
}