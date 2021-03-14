import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '../../context/UserContext'
import { GithubService } from '../../services/github.service'
import styles from '../../styles/components/login/LoginForm.module.css'
import { Loading } from '../common/Loading'

export function LoginForm() {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(false)
    const { handleUserInformations } = useContext(UserContext)
    const router = useRouter()

    const fetchUser = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)

        try {
            const { data } = await GithubService.getUserInformations(user)

            handleUserInformations(data)
            router.push('/home')
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUser(e.target.value)
    }

    return (
        <form className={styles.form} onSubmit={fetchUser}>
            <input type="text" placeholder="Digite seu username" value={user} onChange={onChange} />
            <button type="submit" disabled={!user} className={!!user && styles.hasValue}>
                {loading ? <Loading /> : <img src="/icons/arrow-right.svg" alt="botão entrar"/>}
            </button>
        </form>
    )
}