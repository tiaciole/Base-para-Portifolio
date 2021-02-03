import React from 'react'
import './App.css'

function Grid(){
    return(
        <div className = 'container-grid'>
            <div className = "coluna1">
                <img src="" alt=""/>
                <h2>Designer</h2>
                <p>Eu valorizo ​​uma estrutura de conteúdo simples, padrões de design limpos e interações atenciosas.</p>
                <h3>Coisas que gosto de desenhar:</h3>
                <p>UX, IU, Web, Celular, Aplicativos, Logotipos</p>
                <h3>Ferramentas de design:</h3>
                <ul className = "lista-grid">
                    <li>Balsamiq Mockups</li>
                    <li>Figma</li>
                    <li>Invision</li>
                    <li>Maravilha</li>
                    <li>Caneta e Papel</li>
                    <li>Esboço</li>
                    <li>Webflow</li>
                    <li>Zeplin</li>
                </ul>
            </div> 
            <div className = "coluna2">
            <img src="" alt=""/>
            <h2>Desenvolvedor front-end</h2>
            <p>Gosto de codificar coisas do zero e gosto de dar vida às ideias no navegador.</p>
            <h3>Línguas que falo:</h3>
            <p>HTML, Pug, Slim, CSS, Sass, Less</p>
            <h3>Ferramentas de desenvolvimento:</h3>
            <ul>
                <li>Átomo</li>
                <li>Bitbucket</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>Codekit</li>
                <li>Codepen</li>
                <li>Github</li>
                <li>Gitlab</li>
                <li>Terminal</li>
            </ul>
            </div>
            <div className = "coluna3">
            <img src="" alt=""/>
                <h2>Mentor</h2>
                <p>Eu realmente me importo com as pessoas e adoro ajudar outros designers a trabalhar em seu trabalho.</p>
                <h3>Experiências que utilizo:</h3>
                <p>UX / UI, design de produto, freelancer</p>
                <h3>Estatísticas do mentor:</h3>
                <ul>
                    <li>5 anos de experiência</li>
                    <li>26 minicursos</li>
                    <li>42 bootcamps</li>
                    <li>Mais de 125 alunos</li>
                    <li>Mais de 1.400 sessões de mentor</li>
                    <li>Mais de 60 críticas de grupo</li>
                    <li>Mais de 12.000 comentários</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Grid;

