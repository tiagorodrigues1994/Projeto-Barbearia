import { useState } from 'react'
import './style.css'

export default function LandingPage(){
    const [temaEscuro, setTemaEscuro] = useState(false);

    const alterarTema = () => {
        setTemaEscuro(!temaEscuro);
    }
    return(
        <div className={temaEscuro ? 'modo-escuro' : 'modo-claro'}>
     <header >
        <div className='box-header limita-secao'>
        <figure>
                    <img src='./assets/barbearia-logo.png' alt='logo barbearia' />
                </figure>

                <div>
                    <button onClick={alterarTema} className={temaEscuro ? 'modo-escuro': 'modo-claro'}>
                        <img className='img-button'  src={temaEscuro ?'./assets/sun.png': 'assets/moon.png'} alt='imagem lua/dark' /> {temaEscuro ? 'Light' : 'Dark'}</button>
                </div>
        </div>
             
            </header>

        <section className='banner'>

        </section>
        <section className='box-informacao'>
            <div className='box-texto limita-secao'>
                <h1>Bem-Vindo a Barber Shop</h1>
                <p>Nossa barbearia sempre oference profissões de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
                <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concurso de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>

                <span>S.Kelly</span>
            </div>
        </section>
        </div>
       
            
    )
}