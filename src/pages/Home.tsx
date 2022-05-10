import { Button } from "../components/Button/Button";
import "../styles/Home.css";
import loginImage from "../assets/login.svg";
export function Home() {
  return (
    <div className="container">
      <div className="imgLogin">
        <img src={loginImage} alt="Imagem de Impressão Digital" />
      </div>
      <h1>Autenticação com o Google</h1>
      <p>
        Projeto feito para testar a Autenticação com o Google, visando facilitar
        o Login
      </p>
      <Button />
    </div>
  );
}
