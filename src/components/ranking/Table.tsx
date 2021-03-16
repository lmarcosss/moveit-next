import styles from '../../styles/components/ranking/Table.module.css'

const head = [
    'POSIÇÃO',
    'USUÁRIO',
    'DESAFIOS',
    'EXPERIÊNCIA',
]

const rows = [
    {
        name: 'Leonardo Marcos',
        avatarURL: 'https://avatars.githubusercontent.com/u/32651857?v=4',
        level: 2,
        completedChallenges: 2,
        experience: 100000,
    },
    {
        name: 'Leonardo Marcos',
        avatarURL: 'https://avatars.githubusercontent.com/u/32651857?v=4',
        level: 2,
        completedChallenges: 2,
        experience: 100000,
    },
    {
        name: 'Leonardo Marcos',
        avatarURL: 'https://avatars.githubusercontent.com/u/32651857?v=4',
        level: 2,
        completedChallenges: 2,
        experience: 100000,
    }
]

function Head() {
    return (
        <div className={styles.head}>
            {head.map((item) => {
                return (
                    <span>{item}</span>
                )
            })}
        </div>
    )
}

function Rows() {
    return (
        <div>
            {rows.map(({name, level, avatarURL, experience, completedChallenges}, index) => {
                return (
                    <div className={styles.rows}>
                        <div>{index + 1}</div>
                        <div className={styles.userInformation}>
                            <img src={avatarURL} alt=""/>
                            <div className={styles.texts}>
                                <span>{name}</span>
                                <div>
                                    <img src="/icons/level.svg" alt=""/>
                                    <span>Level {level}</span>
                                </div>
                            </div>

                            <div className={`${styles.text} ${styles.completedChallenges}`}>
                                <span>{completedChallenges}</span>
                                <span>completados</span>
                            </div>

                            <div className={`${styles.text} ${styles.experience}`}>
                                <span >{experience}</span>
                                <span>xp</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export function Table() {
    return (
        <div className={styles.container}>
            <Head />
            <Rows />
        </div>
    )
}