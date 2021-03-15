import { useState } from "react";
import { Modal } from "../common/Modal"

import styles from '../../styles/components/home/SettingsModal.module.css'

const DEFAULT_TIME = 25

interface Props {
    closeModal: () => void;
}

export function SettingsModal({ closeModal }: Props) {
    const [time, setTime] = useState(DEFAULT_TIME)
    const [isDisabledButton, setIsDisabledButton] = useState(true)

    function onSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        closeModal()
    }

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = Number(e.target.value)
        setTime(value)
        setIsDisabledButton(value === DEFAULT_TIME)
    }

    return (
        <Modal closeModal={closeModal} containerStyles={styles.container}>
            <div className={styles.content}>
                <h2>Configurações</h2>

                <form onSubmit={onSubmit}>
                    <label htmlFor="time">Tempo de ciclo (minutos)</label>
                    <input
                        type="number"
                        name="time"
                        id="time"
                        value={time}
                        onChange={onChange}
                        min={1}
                    />
                    <button
                        disabled={isDisabledButton}
                        type="submit"
                    >
                        Salvar
                    </button>
                </form>
            </div>
        </Modal>
    )
}