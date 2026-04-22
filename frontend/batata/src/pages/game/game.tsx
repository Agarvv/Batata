import './game.css';

import Header from '../../common/header/header'
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