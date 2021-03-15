import { ReactNode } from 'react'

import styles from '../../styles/components/common/Modal.module.css'

interface Props {
    closeModal: () => void;
    children: ReactNode;
    containerStyles?: string;
}

export function Modal({ closeModal, children, containerStyles }: Props) {
    return (
        <div className={styles.overlay}>
            <div className={`${styles.container} ${containerStyles}`}>
                {children}

                <button type="button" onClick={closeModal}>
                    <img src="/icons/close.svg" alt="fechar modal"/>
                </button>
            </div>
        </div>
    )
}