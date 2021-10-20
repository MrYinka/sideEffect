import React, { useContext, Fragment } from 'react';
import AuthContext from "./store/auth-context";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

const App = () => {

    const ctx = useContext(AuthContext);
  return (
      <Fragment>
            <MainHeader />
            <main>
                {!ctx.isLoggedIn && <Login />}
                {ctx.isLoggedIn && <Home />}
            </main>
      </Fragment>

  );
}

export default App;
