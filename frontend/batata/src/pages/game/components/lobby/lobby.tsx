import './lobby.css';
import User from './components/user/user';


function Lobby() {
    return(
        <> 
            <div className="lobby">
              

                <div className='lobby-c'>
                    <div className='lobby-players'>

                        <div className='lp-h'>
                            <h1>Jugadores: 67</h1>
                        </div>

                        <div className="user-list">
                            <User />
                            <User />
                            <User />
                            <User />
                            <User />
                            <User />
                            <User />
                            <User />
                        </div> 
                    </div>
                    <div className="lobby-game-types">
                        <div className="lgt-h">
                            <div>
                               <i className='fa fa-arrow-left'></i>
                            </div>
                            <div>
                                <h1>Batata Mierda Place</h1>
                            </div>
                            <div>
                                 <i className="fa-brands fa-discord"></i>
                            </div>
                        </div>
                        <div> 
                               <i className="fas fa-time"></i>
                                <p>Pronto Os Agregare Mas Modalidades Aqui...</p>
                        </div>
                       <div className='lgt-f'>
                           <div className='f-btns'>
                              <button>
                                  <i className="fas fa-share-alt"></i>
                                  
                               </button>

                               <button>
                              <i className='fa fa-play'></i> 
                               
                               </button>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Lobby;