import React from 'react';
import { Link } from 'react-router-dom';
//import { FiLogIn } from 'react-icons/fi'; É necessário fazer a instalação do pacote (npm install react-icons)
//Jogar o seguinte elemento dentro da tag Span no Botão <FiLogIn />
import './styles.css';
import logo from '../../assets/logo.svg';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta Logo"/>
                </header>

                <main>
                    <h1>Seu marketplace de coleta de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

                    <Link to="/create-point">
                        <span>--></span>
                        <strong>Cadastre um ponto de coleta</strong>
                    </Link>
                </main>
            </div>
        </div>
    );
};

export default Home;