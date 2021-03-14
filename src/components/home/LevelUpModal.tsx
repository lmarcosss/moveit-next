import { useContext } from 'react'
import { ChallengesContext } from '../../context/ChallengesContext'
import { Modal } from '../common/Modal'
import styles from '../../styles/components/home/LevelUpModal.module.css'

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext)
    return (
        <Modal closeModal={closeLevelUpModal}>
            <div className={styles.content}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>
            </div>
        </Modal>
    )
}