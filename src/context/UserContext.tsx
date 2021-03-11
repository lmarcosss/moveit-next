import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { UserInformations } from '../types'

interface UserContextData {
    handleUserInformations: (userInformations: UserInformations) => void;
    userInformations: UserInformations
}

interface UserProviderProps {
    children: ReactNode;
    userInformations?: UserInformations;
}


export const UserContext = createContext({} as UserContextData)

export function UserProvider({ children, userInformations: newUserInformation }: UserProviderProps) {
    const [userInformations, setUserInformations] = useState<UserInformations>(newUserInformation ?? {} as UserInformations)
    const cookieName = 'userInformations'

    useEffect(() => {
        Cookies.set(cookieName, JSON.stringify(userInformations))
    }, [userInformations])

    function handleUserInformations(newUserInformations: UserInformations) {
        setUserInformations(newUserInformations)
    }

    return (
        <UserContext.Provider value={{ handleUserInformations, userInformations }}>
            {children}
        </UserContext.Provider>
    )
}