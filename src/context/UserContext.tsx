import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { UserInformation } from '../types'

interface UserContextData {
    handleUserInformations: (userInformations: UserInformation) => void;
    userInformation: UserInformation
}

interface UserProviderProps {
    children: ReactNode;
    userInformation?: UserInformation;
}


export const UserContext = createContext({} as UserContextData)

export function UserProvider({ children, userInformation: newUserInformation }: UserProviderProps) {
    const [userInformation, setUserInformation] = useState<UserInformation>(newUserInformation ?? null as UserInformation)
    const cookieName = 'userInformation'

    useEffect(() => {
        Cookies.set(cookieName, JSON.stringify(userInformation))
    }, [userInformation])

    function handleUserInformations(newUserInformation: UserInformation) {
        setUserInformation(newUserInformation)
    }

    return (
        <UserContext.Provider value={{ handleUserInformations, userInformation }}>
            {children}
        </UserContext.Provider>
    )
}