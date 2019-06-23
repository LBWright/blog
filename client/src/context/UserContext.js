import { createContext } from 'react'

const UserContext = createContext(null)

const UserContextProvider = props => {
    return <UserContext.Provider {...props} />
}
