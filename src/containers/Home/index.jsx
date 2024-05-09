import { Container } from "./styles"
import { useEffect, useState } from "react";

function Home()  {

    const [username, setUsername] = useState("");

  useEffect(() => {
    const savedUsername = getCookie("username");

    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };

    return(
        <Container>
       <h1>CONNECT HUB</h1>
       {username && <p>Olá, {username}!</p>}
       <p>Bem-Vindo(a) ao seu local de Gerenciamento de Parceiros e Empresas</p>
       <h3>Sobre o Sistema:</h3>
       <h4>Desenvolvido em React JS, esse é o sistema perfeito para cadastrar, <br/>editar e visualizar os parceiros e empresas da Connect Hub.</h4>
        </Container>
    )
    
    }
    
    export default Home