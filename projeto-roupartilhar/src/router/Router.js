import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/Login/LoginPage'
import SignUpPage from '../pages/SignUp/SignUpPage';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/login"}>
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