


import './homepage.css'

function App() {

  return (
    <>
     <div className='app'>
           <div className='form-container'>
                <div className='form'>
                   <div className='logo'>
                     <p>Batata <strong> Safe Place</strong></p>
                  
                   </div>
                  
                <div className='f'>
                
                  <div className='form-content'>
                      <div className='fc-h'>
                         <h1>Quiero Jugar</h1>
                      </div>
                      
                      <div className='inps'>
                        <div className='inp'>
                           <input type="text" placeholder='aqui va tu nombre uwu'/>
                        </div>
                        <div className='inp'>
                           <input type="text" placeholder='aqui va un codigo de sala :v'/>
                        </div>
                      </div>
                      
                      <div className='btn'>
                         <button>YAAAA WEEE</button>
                      </div>
                  </div>

                   <div className='tuto'>
                      <h1>No sabes jugar? (gil)</h1>
                      <ul>
                        <li id='li-o'><i className="fa-sharp fa-solid fa-user"></i>Metes tu Nombre en el formulario q te hice ahi exclusivamente pa ti </li>
                        <li id='li-t'><i className="fa fa-door-open"></i> Metes el codigo de la sala en el formulario ahi bien bellako osi osi uwu</li>
                        <li id='li-o'> <i className="fa-sharp fa-solid fa-clock"></i>esperas a que se unan jugadores o acabe una partida,</li>
                        <li id='li-t'><i className="fa-sharp fa-solid fa-paint-brush"></i> Seras asignado a un equipo, dibujaras al mismo tiempo con tu equipo</li>
                        <li id='li-o'> <i className="fa-sharp fa-solid fa-comments"></i> Tambien tienes chat en tiempo real para coordinarte con tu equipo :p</li>
                        <li id='li-t'><i className="fa-sharp fa-solid fa-vote-yea"></i> Cuando todos los equipos terminen de dibujar, se votaran dibujos uno a uno</li>
                        <li id='li-o'><i className="fa-sharp fa-solid fa-trophy"></i> Gana el equipo que mas votos tenga. Hecho con amor por Agarvv :3</li>
                      </ul>
                   </div>
                  </div>



                </div>
            </div>
     </div>
    </> 
  )
}

export default App
