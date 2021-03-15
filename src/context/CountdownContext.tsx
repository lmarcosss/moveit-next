import Cookies from 'js-cookie'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { ChallengesContext } from './ChallengesContext'
import { CookiesEnum } from '../enums/index'

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
    pauseCountdown: () => void;
    setCountdownTime: (newTime: any) => void;
    countdownTime: number;
}

interface CountdownProviderProps {
    children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout

const TIME = 25

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownProviderProps) {
    const savedTime = Number(Cookies.get(CookiesEnum.countdownTime))

    const { startNewChallenge } = useContext(ChallengesContext)
    const [time, setTime] = useState((savedTime ?? TIME) * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

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

    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown() {
        setIsActive(false)
        setHasFinished(false)
        clearTimeout(countdownTimeout)
        setTime(TIME * 60)
    }

    function pauseCountdown() {
        setIsActive(false)
        setHasFinished(false)
        clearTimeout(countdownTimeout)

    }

    function setCountdownTime(newTime: number) {
        setTime(newTime)
    }

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
            pauseCountdown,
            setCountdownTime,
            countdownTime: time,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}