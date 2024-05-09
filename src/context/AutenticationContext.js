import React, { createContext, useState} from 'react'
export const AuthContext = createContext({});
function AuthProvider({children}) {
 const [data, setData] = useState({name: "teste da silva", status: "ativo"})
 return (
 <AuthContext.Provider value={{data, setData}}>
 {children}
 </AuthContext.Provider>
 )
}
export default AuthProvider;