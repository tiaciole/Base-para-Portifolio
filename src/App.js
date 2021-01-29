import React from 'react'
import './App.css'
import Header from './Header'
import Cabeçalho from './Cabeçalho'
import Avatar from './Avatar'
import Apresentação from './Apresentacao'
import Grid from './Grid'



function App(){
    return(

    <div className = "container">
        <Header logo = "Logo"/>   

        <Cabeçalho titulo = "Designer, desenvolvedor front-end e mentor" subtitulo = "Eu projeto e codifico coisas lindamente simples e adoro o que faço"/>

        <Avatar/>

        <Apresentação eu = "Olá, sou o Tiago. Prazer em conhecê-lo."
         descricao = "Desde o início da minha jornada como designer 
         freelance há quase 10 anos, fiz trabalho remoto para 
         agências, dei consultoria para startups e colaborei com 
         pessoas talentosas para criar produtos digitais para uso 
         comercial e consumidor. Estou silenciosamente confiante, naturalmente 
         curioso e trabalhando perpetuamente para melhorar minhas habilidades, 
         um problema de design por vez."/>

         <Grid/>

    </div>
    )
}

export default App;