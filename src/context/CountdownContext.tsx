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
    savedTime: number;
}

let countdownTimeout: NodeJS.Timeout

const DEFAULT_TIME = 25

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children, savedTime }: CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext)
    const [time, setTime] = useState((savedTime ?? DEFAULT_TIME) * 60)
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

    useEffect(() => {
        Cookies.set(CookiesEnum.countdownTime, String(time))
    }, [time])

    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown() {
        setIsActive(false)
        setHasFinished(false)
        clearTimeout(countdownTimeout)
        setTime(DEFAULT_TIME * 60)
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