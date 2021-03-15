import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { CookiesEnum } from '../../enums'

import styles from '../../styles/components/common/AppBar.module.css'
import { SettingsModal } from './SettingsModal'

enum RouterPages {
    home = 'ranking',
    ranking = 'home'

}

interface Props {
    pageName: string;
}

export function AppBar({ pageName }: Props) {
    const router = useRouter()
    const [settingsModal, setSettingsModal] = useState(false)

    const isHomePage = pageName === 'home'
    const isRankingPage = pageName === 'ranking'

    function onClick() {
        router.replace(`/${RouterPages[pageName]}`)
    }

    function onLogout() {
        router.replace('/')
        Cookies.remove(CookiesEnum.userInformation)
    }

    function closeSettingsModal() {
        setSettingsModal(false)
    }

    function openSettingsModal() {
        setSettingsModal(true)
    }

    return (
        <>
            <div className={styles.container}>
                <img src="icons/logo.svg" alt="moveit logo"/>

                <div className={styles.pageLinks}>
                    <button onClick={onClick} disabled={isHomePage}>
                        <img
                            src={`icons/home${isHomePage ? '-active' : '' }.svg`}
                            alt="house link"
                        />
                    </button>
                    <button onClick={onClick} disabled={isRankingPage}>
                        <img
                            src={`icons/award${isRankingPage ? '-active' : '' }.svg`}
                            alt="award link"
                        />
                    </button>
                </div>

                <div className={styles.modalLinks}>
                    <button onClick={openSettingsModal}>
                        <img
                            id={styles.settingsIcon}
                            src={`icons/settings.svg`}
                            alt="award link"
                        />
                    </button>
                    <button onClick={onLogout} disabled={false}>
                        <img
                            src={`icons/exit.svg`}
                            alt="award link"
                        />
                    </button>
                </div>
            </div>

            {settingsModal && <SettingsModal closeModal={closeSettingsModal} />}
        </>
    )
}