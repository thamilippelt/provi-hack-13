import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/Login/LoginPage'
import SignUpPage from '../pages/SignUp/SignUpPage';


const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                <Route exact path={"/"}  >
                        <HomePage />
                    </Route>
                    <Route exact path={"/login"} >
                        <LoginPage />
                    </Route>
                    <Route exact path={"/cadastro"}>
                        <SignUpPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router;