import styles from '../../styles/components/common/Modal.module.css'
export function Modal({ closeModal, children }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                {children}

                <button type="button" onClick={closeModal}>
                    <img src="/icons/close.svg" alt="fechar modal"/>
                </button>
            </div>
        </div>
    )
}