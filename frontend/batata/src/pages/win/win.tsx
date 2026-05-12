import './win.css'
import WinnerCard from './components/winnercard/winnercard';
import ConfettiExplosion from 'react-confetti-explosion';
import { useState } from 'react';

function Win() {
  const [s, setS] = useState(true);

  return(
    <>
     {s && <ConfettiExplosion 
      force={0.5}
  duration={5000}
  particleCount={500}
  width={5000}
  colors={['#ff6b9d', '#ffd700', '#ff85a1', '#c77dff']}
  onComplete={() => setS(false)}
     />}
      <div className="w-ctn">
         <WinnerCard />
      </div>
    </>
  )
}

export default Win;