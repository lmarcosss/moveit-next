import styles from '../styles/pages/Login.module.css'
export default function Login() {
    return (
        <div className={styles.container}>
            <img src="/icons/background-login.svg" alt="background"/>
            <div className={styles.login}>
                <img src="/logo-full.svg" alt="logo"/>
                
                <div className={styles.texts}>
                    <h1>Bem-vindo</h1>
                    <div className={styles.github}>
                        <img src="/icons/github.svg" alt="github icon"/>
                        <p>Faça login com seu Github para começar</p>
                    </div>
                </div>

                <div className={styles.form}>
                    <input type="text" placeholder="Digite seu username" />
                    <button type="button">
                        <img src="/icons/arrow-right.svg" alt="botão entrar"/>
                    </button>
                </div>
            </div>
        </div>
    )
}