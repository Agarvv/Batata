import './lobby.css';

function Lobby() {
    return(
        <> 
            <div className="lobby">
              

                <div className='lobby-c'>
                    <div className='lobby-players'>

                        <div className='lp-h'>
                            <h1>Jugadores: 67</h1>
                        </div>

                    </div>
                    <div className="lobby-game-types">
                        <div> 
                               <i className="fas fa-time"></i>
                                <p>Pronto Os Agregare Mas Modalidades Aqui...</p>
                        </div>
                       <div className='lgt-f'>

                       </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Lobby;