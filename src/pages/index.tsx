import { LoginForm } from '../components/LoginForm'
import { UserProvider } from '../context/UserContext'

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

                <UserProvider>
                    <LoginForm />
                </UserProvider>
            </div>
        </div>
    )
}