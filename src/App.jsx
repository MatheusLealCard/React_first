import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <header id='Header'>
        <h1>Matheus Leal</h1>
        <div className='ArrowContainer'>
          <a href="#AboutMe" id='DownArrow'>
            &darr;
          </a>
        </div>
      </header>
      <main id='MainC'>
        <div className='MainContainer' id='MainContainer'>
          <h1 id='AboutMe'>Sobre mim</h1>
          <img src="https://media.licdn.com/dms/image/D4E03AQFVh6fxofG1vA/profile-displayphoto-shrink_400_400/0/1689286392927?e=1694649600&v=beta&t=6W1GrOpwgbQhWi6BtJNIzDJE2BU32SCD8yWF0ImUEzo" alt="" />
          <h4>Olá! Sou um programador júnior apaixonado pelo mundo da codificação e com uma sede insaciável de aprendizado. Embora eu esteja nos estágios iniciais da minha jornada profissional, estou totalmente comprometido em expandir meu conhecimento e habilidades na programação. Estou sempre em busca de novas tecnologias, frameworks e melhores práticas. Participar de cursos, workshops e conferências é uma parte essencial da minha rotina, pois acredito que o aprendizado contínuo é a chave para se tornar um desenvolvedor excepcional. Tenho plena consciência de que o campo da programação está em constante evolução e que o conhecimento adquirido hoje pode se tornar obsoleto amanhã. No entanto, encaro isso como um desafio positivo e me comprometo a me adaptar e aprender continuamente.</h4>
          <div className='ArrowContainer'>
          <a href="top" id='DownArrow'>
            &uarr;
          </a>
          <a href="#TextHabilidades" id='DownArrow'>
            &darr;
          </a>
        </div>
        </div>  
      </main>
      <section id='Habilidades'>
        <div id="TextHabilidades">
          <h1>Habilidades:</h1>
          <a href="top" id='DownArrow'>
            &uarr;
          </a>
          <div id="HabilidadeLogo">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/919/919826.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" />            <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/4494/4494740.png" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
