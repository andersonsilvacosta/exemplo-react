🚀 Criar Projeto React com Vite

1. Criar o Projeto

    Escolha o framework: React
    Escolha o variant: JavaScript ou TypeScript

2. Acessar a pasta do projeto

3. Instalar dependências

4. Iniciar o servidor de desenvolvimento

🧱 Estrutura Inicial
    Os arquivos App.css e index.css já possuem estilizações padrão.

5. Criar pastas de componentes
    Dentro da pasta src, crie:

6. Criar componentes
    Exemplo de componente simples no Header/index.jsx:

7. Importar componentes no App.jsx


# instalando o router-dom:
npm i react-router-dom
 
depois ir para main.jsx e colocar o app dentro do BrowserRouter :
 <BrowserRouter>
      <App />
</BrowserRouter>
 
No app jsx:
 
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  )
}
 
Devem ter os imports de onde vai querer navegar, ex:
 
import { Route, Routes } from "react-router-dom"
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
 
Criar um botão ou linkref para a navegação dentro do <Link to='o diretorio onde quer navegar'> <button> </button> </Link> :
        <Link to='/About'>
           <button type="button">Navegar</button>
        </Link>
 
E na outra pagina onde vai navegar:
 
import { Link } from "react-router-dom";
import "./style.css";
 
function About() {
  return (
    <>
    <h1>Paginas Sobre</h1>
 
    <Link to='/'>Voltar</Link>
   
    </>
  )
}