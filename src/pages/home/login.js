import { fb } from "../../services/index.js";
let user = firebase.auth().currentUser;

export const Login = () => {
  const container = document.querySelector(".about-text");
  container.innerHTML = `
    <div class="login-area">
      <form>
        <p class="form-login">E-mail:</p>
        <input class="email-input" type="text" placeholder="Digite seu email">
        <p class="form-login">Password:</p>
        <input class="password-input" type="password" autocomplete="off" placeholder="Digite sua senha">
        <p id="alert"><p>
        <input class="home-buttons" type="submit" value="Entrar">
      </form>
      <button class="return-button" title="Voltar">◄</button>
    </div>
    `;

  document.querySelector(".home-buttons")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector(".email-input").value;
    const password = document.querySelector(".password-input").value;

    fb.signIn(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        const alertArea = document.querySelector("#alert");

        if (error.code === "auth/wrong-password") {
          alertArea.innerHTML = "Senha incorreta";
        }
        if (error.code === "auth/user-not-found") {
          alertArea.innerHTML = "E-mail não cadastrado.";
        }
        if (error.code === "auth/invalid-email") {
          alertArea.innerHTML = "E-mail inválido.";
        }
      });
  });
};
