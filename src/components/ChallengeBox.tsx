import { useContext } from 'react';
import { ChallengesContext, Challenge } from '../context/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

interface ContentProps {
    activeChallenge: Challenge;
    resetChallenge: () => void;
    completeChallenge: () => void;
}

function Content({ activeChallenge, resetChallenge, completeChallenge }: ContentProps) {
    if (activeChallenge) {
        return (
            <div className={styles.challengeActive}>
                <header>Ganhe {activeChallenge.amount}xp</header>

                <main>
                    <img src={`icons/${activeChallenge.type}.svg`} />
                    <strong>Novo desafio</strong>
                    <p>{activeChallenge.description}</p>
                </main>

                <footer>
                    <button
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={resetChallenge}
                    >
                        Falhei
                    </button>
                    <button
                        type="button"
                        className={styles.challengeSucceededButton}
                        onClick={completeChallenge}
                    >
                        Completei
                    </button>
                </footer>
            </div>
        )
    }

    return (
        <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
                <img src="icons/level-up.svg" alt="Level Up"/>
                Avance de level completando desafios
            </p>
        </div>
    )
}
export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)

    return (
        <div className={styles.challengeBoxContainer}>
            <Content
                activeChallenge={activeChallenge}
                resetChallenge={resetChallenge}
                completeChallenge={completeChallenge}
            />
        </div>
    )
}