import {createContext, useState} from 'react'

export const GlobalContext = createContext()

const AuthContext = (props) => {
    const [loggedInUser,setLoggedInUser] = useState(false)

  return (
    <GlobalContext.Provider value={{loggedInUser,setLoggedInUser}}>
        {props.children} {/* <App/> --> indirectly calling App inside Provider */}
    </GlobalContext.Provider>
  )
}

export default AuthContext