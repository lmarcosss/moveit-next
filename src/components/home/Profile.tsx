import { useContext } from 'react'
import { ChallengesContext } from '../../context/ChallengesContext'
import { UserContext } from '../../context/UserContext'
import styles from '../../styles/components/home/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)
    const { userInformation } = useContext(UserContext)

    return (
        <div className={styles.profileContainer}>
            <img src={userInformation?.avatarURL} alt="Leonardo Marcos" />
            <div>
                <strong>{userInformation?.name}</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}