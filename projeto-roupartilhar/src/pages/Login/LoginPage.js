import { useState } from "react";

const LoginPage = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);

    // Compara as informaçoes de user
    if (userData) {
      if (userData.password !== pass.value) {
        // password inválido
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    }
  };

  // messagem de erro
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div>{errorMessages.message}</div>
    );

  // login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
    

    return (
        <div>
        <div className="login-form">
          <div className="title">Login</div>
          {isSubmitted ? <div>Usuários logado com sucesso!</div> : renderForm}
        </div>
      </div>
    )
}

export default LoginPage