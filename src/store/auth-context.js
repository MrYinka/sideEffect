import {createContext} from "react";

//AuthContext is an object that will contain a component
const AuthContext = createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});


export default AuthContext;