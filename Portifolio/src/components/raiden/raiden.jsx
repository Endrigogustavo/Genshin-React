
import './raiden.css'

import circulo from './img/preview.jpg'
import raiden from './img/shogun_raiden_genshin_impact_character_render_by_deg5270_deqwe2o.png'
import detalhe from './img/Group 13887.png'
import fundo from './img/Group 13889.png'
import elementos from './img/Genshin-impact-elementi-1-1536x281-removebg-preview.png'
import logo from './img/Genshin-Impact-Logo.png'
function App() {

  return (
    <>
    <div className="home">
        <div className="fundoq" >
        <img src={fundo} alt="" className="fundoimg" />
        <img src={detalhe} alt="" className="left" />
        <img src={elementos} alt="" className="right" />
        </div>


        <div className="fundo">
            <img src={circulo} alt="" className="circulo" />
            <img src={raiden} alt="" className="raiden" />
            <img src={logo} alt="" className="logo" />
        </div>


        </div>
    </>
  )
}

export default App
