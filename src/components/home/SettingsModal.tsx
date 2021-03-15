import { Modal } from "../common/Modal";
import styles from '../../styles/components/home/SettingsModal.module.css'

export function SettingsModal({ closeModal }) {
    return (
        <Modal closeModal={closeModal} containerStyles={styles.container}>
            <div className={styles.content}>
                <h2>Configurações</h2>

                <form>
                    <label htmlFor="time">Tempo de ciclo</label>
                    <input type="number" name="time" id="time" defaultValue={25} />

                    <button type="submit">Salvar</button>
                </form>
            </div>
        </Modal>
    )
}