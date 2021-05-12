import { Login } from "./login.js";
import { Register } from "./register.js";
import { fb } from "../../services/index.js";

export const Home = () => {
  const rootElement = document.createElement("div");
  rootElement.classList.add("main-container");
  rootElement.innerHTML = `
    <div class="main-itens">
      <img src="../images/women.png">
       <div class="about-text">
         <h1>Sobre</h1>
         <p class="text-sobre">
            Para além da Sobrevivência - Um Espaço Seguro para Mulheres!
            Esse espaço é destinado às mulheres que procuram um espaço seguro 
            para compartilhar planos, sonhos, desafios, oportunidades e encontrar
            apoio e fortalecimento. Há potência em mulheres construtoras de igualdade.
            
         </p>
          <ul class="home-buttons-container">
            <li><button class="home-buttons login">Login</button></li>
            <li><button class="home-buttons subscribe">Inscreva-se</button></li>
            <li><button class="google-login">Login com o <span>Google<span></button></li>
          </ul>
        <div>
    </div>
    `;
  return rootElement;
};

export const homeFunctions = () => {
  document.querySelectorAll(".home-buttons").forEach((button) => {
    button.addEventListener("click", (event) => {
      const buttonClicked = event.path[0].innerHTML;
      buttonClicked == "Login" ? Login() : Register();
      document.querySelector(".return-button").addEventListener("click", () => {
        window.location.reload();
      });
    });
  });

  document.querySelector(".google-login")
  .addEventListener("click", () => {
    fb.signUpGoogle();
  })
};
