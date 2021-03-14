import { useRouter } from 'next/router'

import styles from '../../styles/components/common/AppBar.module.css'

enum RouterPages {
    home = 'ranking',
    ranking = 'home'

}

export function AppBar({ pageName }) {
    const router = useRouter()

    const isHomePage = pageName === 'home'
    const isRankingPage = pageName === 'ranking'

    function onClick() {
        router.replace(`/${RouterPages[pageName]}`)
    }

    return (
        <div className={styles.container}>
            <img src="icons/logo.svg" alt="moveit logo"/>

            <div className={styles.links}>
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
        </div>
    )
}