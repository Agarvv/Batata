import './canvas.css';

function Canvas() {
    return(
      <>
        <div className="canvas">
          <div className="c">
             <div className='canvas-area'>
                  <div className='ca-header'>
                    <h1>Dibuja, Cohone.</h1>
                  </div>

                  <div className="ca-canvas">
                    <canvas>

                    </canvas>
                  </div>

                  <div className="ca-footer">
                      <div className='current-color'>

                      </div>
                    <div className="c-footer-c-options">
                
                          <div className='colors'>
                             <div>

                             </div>
                          </div>
                          <div className='tools'>

                          </div>
                    </div>  
                  </div>
             </div>

             <div className="chat">


                <div className='c-footer'> 
                
                </div> 
             </div>
          </div>
        </div>
      </>
    );
}

export default Canvas;