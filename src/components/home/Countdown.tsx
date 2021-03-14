import { useContext } from 'react'
import { CountdownContext } from '../../context/CountdowContext'
import styles from '../../styles/components/home/Countdown.module.css'

interface IButton {
    isActive: boolean;
    hasFinished: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
    pauseCountdown: () => void;
}

function Button({ isActive, hasFinished, startCountdown, resetCountdown, pauseCountdown }: IButton) {

    if (isActive) {
        return (
            <div className={styles.containerButtonActivated}>
                <button
                    onClick={pauseCountdown}
                    className={`${styles.countdownButton} ${styles.buttonSize} ${styles.pauseButton}`}
                    type="button"
                >
                    Pausar ciclo
                </button>
                <div></div>
                <button
                    onClick={resetCountdown}
                    className={`${styles.countdownButton} ${styles.buttonSize} ${styles.abortButton}`}
                    type="button"
                >
                    Abortar ciclo
                </button>
            </div>
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
            Iniciar ciclo 
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
        pauseCountdown,
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
                pauseCountdown={pauseCountdown}
                hasFinished={hasFinished}
            />
        </div>
    )
}