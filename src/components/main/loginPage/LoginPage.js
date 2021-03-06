import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import Input from 'components/parts/input/Input';
import Page from 'components/parts/page/Page';

// Styles
import './login.scss';

// Reducer
import {
  selectLoginError,
  selectRegisterResult,
  userLoginAsync,
} from 'reducers/login/loginSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const registerResult = useSelector(selectRegisterResult);
  const loginError = useSelector(selectLoginError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const userLogin = (evt) => {
    evt.preventDefault();
    setError('');
    if (email && password) {
      dispatch(userLoginAsync({
        email,
        password
      }));
    } else {
      setError('Les deux champs doivent être remplis');
    }
  }

  return (
    <Page title="Se connecter" extraClass="login">
      { registerResult.success && <p className="success">Le compte a bien été créé, veuillez vous connecter</p> }
      <Link to="/register">Pas encore de compte ? Inscrivez-vous !</Link>
      <form onSubmit={userLogin}>
        <Input
          inputName="email"
          inputType="email"
          label="Email"
          inputValue={email}
          changeInputValue={setEmail}
        ></Input>
        <Input
          inputName="password"
          inputType="password"
          label="Mot de passe"
          inputValue={password}
          changeInputValue={setPassword}
        ></Input>
        { error && <p className="error">{error}</p>}
        { (!error && loginError) && <p className="error">{loginError}</p> }

        <button type="submit">Connexion</button>
      </form>
    </Page>
  )
}

export default LoginPage;
