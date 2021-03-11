import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import { UserContext } from '../context/UserContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)
    const { userInformations} = useContext(UserContext)

    return (
        <div className={styles.profileContainer}>
            <img src={userInformations?.avatar_url} alt="Leonardo Marcos" />
            <div>
                <strong>{userInformations?.name}</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}