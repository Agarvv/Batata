import './homepage.css'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  username: string
  pfp: string
  id: number
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(data)
  }

  return (
    <>
      <div className='form-container'>
        <div className="f">
          <div className="fh">
            <h1><strong>Batata</strong> Safe Place</h1>
          </div>

          <div className="fc">
            <div className="l">
              <div className="lh">
                <h1>Quiero Jugar</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="d">
                    <div className="pfp">
                    </div>

                    <input
                      type="text"
                      placeholder="Meteme Tu Nombre uwu"
                      {...register("username", {
                        required: "Tampoco te olvides del nombre.",
                        minLength: {
                          value: 3,
                          message: "Minimo 3 caracteres, gil."
                        }
                      })}
                    />
                    {errors.username && (
                      <span style={{ color: 'red', display: 'block', fontSize: '14px' }}>
                        {errors.username.message}
                      </span>
                    )}

                    <button type="submit">VAMOOOOO CHII</button>
                  </div>
                </form>

              </div>
            </div>

            <div className="r">
              <div className="rh">
                <h1>No Se Jugar</h1>
              </div>

              <div className="rd">
                <p>1: Mete Tus Datitos ❤️</p>
                <p>2: Haz Click en el Boton 🍓</p>
                <p>3: Seras Emparejado Con Alguien 💕</p>
                <p>4: Dibujares SImultaneamente Juntitos 🍰</p>
                <p>5: Os Hice Chat en tiempo real para coordinaros 🚀</p>
                <p>6: Cuando Acabeis de Dibujar, Votareis dibujos 🌟</p>
                <p>7: Gana el Equipo Con Mayores Votos 💯</p>
                <p>8: Disfruta!! Hecho por Agarvv Con Mucho ❤️❤️</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App