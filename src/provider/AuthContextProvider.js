import React, {useState, useEffect} from "react";
import AuthContext from "../store/auth-context";

const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };


    useEffect(() => {
        if(localStorage.getItem('isLoggedIn') === '1'){
            setIsLoggedIn(true);
        }
    }, []);


    return (
        <AuthContext.Provider value={
            {
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }
        }>

            {
                props.children
            }
        </AuthContext.Provider>
    )
};


export default AuthContextProvider