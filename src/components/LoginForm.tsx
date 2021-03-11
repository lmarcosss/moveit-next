import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '../context/UserContext'
import { getUserInformations } from '../services'
import styles from '../styles/components/LoginForm.module.css'
export function LoginForm() {
    const [user, setUser] = useState('')
    const { handleUserInformations } = useContext(UserContext)
    const router = useRouter()

    const fetchUser = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const { data } = await getUserInformations(user)

            handleUserInformations(data)
            router.push('/home')
        } catch (error) {
            alert(error)
        }
    }

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUser(e.target.value)
    }

    return (
        <form className={styles.form} onSubmit={fetchUser}>
            <input type="text" placeholder="Digite seu username" value={user} onChange={onChange} />
            <button type="submit" disabled={!user}>
                <img src="/icons/arrow-right.svg" alt="botão entrar"/>
            </button>
        </form>
    )
}