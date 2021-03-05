import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/CountDown.module.css'

let countdownTimeout: NodeJS.Timeout

interface IButton {
    isActive: boolean;
    setIsActive: (value: boolean) => void;
    setTime: (value: number) => void;
    hasFinished: boolean;
    setHasFinished: (value: boolean) => void;
}

function Button({ isActive, setIsActive, setTime, hasFinished, setHasFinished }: IButton) {
    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown() {
        setIsActive(false)
        setHasFinished(false)
        clearTimeout(countdownTimeout)
        setTime(0.1 * 60)
    }

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
    const [time, setTime] = useState(0.05 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    function getStringTime(number: number) {
        return String(number).padStart(2, '0').split('')
    }

    const [minuteLeft, minuteRight] = getStringTime(minutes)
    const [secondLeft, secondRight] = getStringTime(seconds)

    const { startNewChallenge } = useContext(ChallengesContext)


    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                 setTime(time - 1)
             }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }

    }, [isActive, time])

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
                setIsActive={setIsActive}
                setTime={setTime}
                hasFinished={hasFinished}
                setHasFinished={setHasFinished}
            />
        </div>
    )
}