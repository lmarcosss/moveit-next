import { Modal } from "../common/Modal";
import styles from '../../styles/components/home/SettingsModal.module.css'

export function SettingsModal({ closeModal }) {
    return (
        <Modal closeModal={closeModal}>
            <div className={styles.content}>
                <h2>Settings</h2>


            </div>
        </Modal>
    )
}