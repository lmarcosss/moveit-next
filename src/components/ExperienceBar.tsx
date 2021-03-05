import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.css'
export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel
    const experiencePercentage = `${percentToNextLevel}%`

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: experiencePercentage }} />

                {percentToNextLevel > 0 && (
                    <span className={styles.currentExperience} style={{ left: experiencePercentage }}>
                        {currentExperience} xp
                    </span>
                )}
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}