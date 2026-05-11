import './votations.css'
import Smash from './components/smash/smash';
import Pass from './components/pass/pass';
import Header from '../../common/header/header';

function Votations() {
    return(
      <>

         <div className="votations-ctn">
          <div className="votations-h">
              <h1>VOTA (pero mis tetasas son aun mejores uwu)</h1>
          </div>
               <div className="votation-canvas">
                  <canvas>

                  </canvas>
                </div>  

                <div className="votation-c">
                       <Smash />
                                           <Pass />
                </div>
          </div> 
      </>
    );
}

export default Votations;