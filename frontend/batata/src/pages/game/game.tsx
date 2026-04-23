import './game.css';

import Lobby from './components/lobby/lobby'


function Game() {
    return(
        <> 
           <div className='lobby-ctn'> 
               <Lobby />
           </div>
        </>
    );
}

export default Game;