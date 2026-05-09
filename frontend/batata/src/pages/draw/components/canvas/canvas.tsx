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

                        <div>

                        </div>
                 

                      </div>
                    <div className="c-footer-c-options">
                
                          <div className='colors'>
                       
                                <div className="red"></div>
<                               div className="blue"></div>
<div className="green"></div>
<div className="yellow"></div>
<div className="orange"></div>
<div className="purple"></div>
<div className="pink"></div>
<div className="brown"></div>
<div className="black"></div>
<div className="white"></div>
<div className="gray"></div>
<div className="cyan"></div>
<div className="lime"></div>
<div className="lavender"></div>
                         
                          </div>


                          <div className='tools'>
                              <div className="pencil">
                                 <i className="fas fa-pencil-alt"></i>
                              </div>
                              <div className="eraser">
                                    <i className="fas fa-eraser"></i>
                              </div>
                              <div className="bucket">
                                    <i className="fas fa-fill-drip"></i>
                              </div>
                              <div className="t1">
                                    <div className="t1-cube">

                                    </div>
                              </div>
                              <div className="t2">
                                <div className="t2-cube">

                                    </div>
                              </div>
                              <div className="t3">
                                 <div className="t3-cube">

                                    </div>
                              </div>
                              <div className="t4">
                                 <div className="t4-cube">

                                    </div>
                              </div>
                              <div className="delete">
                                    <i className="fas fa-trash"></i>
                              </div>
                          </div>
                    </div>  
                  </div>
             </div>

             <div className="chat">
                <div className="chat-msg">
                   <div className='msg-user'>
                       <img src="src/assets/abstract-technology-blue-curve-modern-600nw-2720628121.webp" alt="" />
                    </div>
                    <div className="msg-content"> 
                        <p>Hola, ¿Cómo estás?</p>
                    </div> 
                </div>

                <div className="chat-msg">
                   <div className='msg-user'>
                       <img src="src/assets/abstract-technology-blue-curve-modern-600nw-2720628121.webp" alt="" />
                    </div>
                    <div className="msg-content"> 
                        <p>Hola, ¿Cómo estás?</p>
                    </div> 
                </div>

                <div className="chat-msg">
                   <div className='msg-user'>
                       <img src="src/assets/abstract-technology-blue-curve-modern-600nw-2720628121.webp" alt="" />
                    </div>
                    <div className="msg-content"> 
                        <p>Hola, ¿Cómo estás?</p>
                    </div> 
                </div>

                <div className="chat-msg">
                   <div className='msg-user'>
                       <img src="src/assets/abstract-technology-blue-curve-modern-600nw-2720628121.webp" alt="" />
                    </div>
                    <div className="msg-content"> 
                        <p>Hola, ¿Cómo estás?</p>
                    </div> 
                </div>

                <div className="chat-msg">
                   <div className='msg-user'>
                       <img src="src/assets/abstract-technology-blue-curve-modern-600nw-2720628121.webp" alt="" />
                    </div>
                    <div className="msg-content"> 
                        <p>Hola, ¿Cómo estás?</p>
                    </div> 
                </div>

                <div className="chat-msg">
                   <div className='msg-user'>
                       <img src="src/assets/abstract-technology-blue-curve-modern-600nw-2720628121.webp" alt="" />
                    </div>
                    <div className="msg-content"> 
                        <p>Hola, ¿Cómo estás?mo estásmo estásmo estásmo estásmo estásmo estás</p>
                    </div> 
                </div>

                <div className="chat-msg">
                   <div className='msg-user'>
                       <img src="src/assets/abstract-technology-blue-curve-modern-600nw-2720628121.webp" alt="" />
                    </div>
                    <div className="msg-content"> 
                        <p>Hola, ¿Cómo estás?mo estásmo estásmo estásmo estásmo estásmo estás</p>
                    </div> 
                </div>

                <div className="chat-msg">
                   <div className='msg-user'>
                       <img src="src/assets/abstract-technology-blue-curve-modern-600nw-2720628121.webp" alt="" />
                    </div>
                    <div className="msg-content"> 
                        <p>Hola, ¿Cómo estás?mo estásmo estásmo estásmo estásmo estásmo estás</p>
                    </div> 
                </div>

                <div className="chat-msg">
                   <div className='msg-user'>
                       <img src="src/assets/abstract-technology-blue-curve-modern-600nw-2720628121.webp" alt="" />
                    </div>
                    <div className="msg-content"> 
                        <p>Hola, ¿Cómo estás?mo estásmo estásmo estásmo estásmo estásmo estás</p>
                    </div> 
                </div>

                <div className="chat-msg">
                   <div className='msg-user'>
                       <img src="src/assets/abstract-technology-blue-curve-modern-600nw-2720628121.webp" alt="" />
                    </div>
                    <div className="msg-content"> 
                        <p>Hola, ¿Cómo estás?mo estásmo estásmo estásmo estásmo estásmo estás</p>
                    </div> 
                </div>

                <div className='c-footer'> 
                   <input type="text" placeholder='Di Algo We'/>
                   <i className="fa fa-send"></i> 
                </div> 
             </div>
          </div>
        </div>
      </>
    );
}

export default Canvas;