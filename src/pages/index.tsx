import Head from 'next/head'
import { LoginForm } from '../components/login/LoginForm'
import { UserProvider } from '../context/UserContext'
import { useWindowSize } from '../hooks/use-window'

import styles from '../styles/pages/Login.module.css'

export default function Login() {
    const windowSize = useWindowSize()

    return (
        <div className={styles.container}>
            <Head>
                <title>Login | Moveit</title>
            </Head>
            {windowSize.width > 1530 && <img src="/icons/background-login.svg" alt="background"/>}
            <div className={styles.login}>
                <img src="/logo-full.svg" alt="logo" />
                
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