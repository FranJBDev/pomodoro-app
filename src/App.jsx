import React, { useEffect, useContext } from 'react'
import Button from './components/Button'
import CountdownAnimation from './components/CountdownAnimation'
import SetPomodoro from './components/SetPomodoro'
import { SettingsContext } from './context/SettingsContext'

function App() {
  const {
    pomodoro, executing, children,
    startAnimate, startTimer, pauseTimer,
    updateExecute, setCurrentTimer, SettingsBtn
  } = useContext(SettingsContext)

  useEffect(() => { updateExecute(executing) }, [executing, startAnimate])

  return (
    <div className="container">
      <h1>Pomodoro Timer</h1>
      <small>El tiempo es el recurso mas valioso</small>
      {pomodoro !== 0 ?
        <SetPomodoro /> :
        <>
          <ul className='labels'>
            <li>
              <Button title='work'
                activeClass={executing.active === 'work' ? 'active-label' : undefined}
                _callback={() => setCurrentTimer('work')} />
            </li>
            <li>
              <Button title='Short Break'
                activeClass={executing.active === 'work' ? 'active-label' : undefined}
                _callback={() => setCurrentTimer('short')} />
            </li>
            <li>
              <Button title='Long Break'
                activeClass={executing.active === 'work' ? 'active-label' : undefined}
                _callback={() => setCurrentTimer('long')} />
            </li>
          </ul>
          <Button title='Configurar' _callback={SettingsBtn} />
          <div className='time-container'>
            <div className='time-wrapper'>
              <CountdownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
            </div>
          </div>

          <div className='button-wrapper'>
            <Button title='Inicio' className={!startAnimate ? 'active' : undefined} _callback={startTimer} />
            <Button title='Pausa' className={startAnimate ? 'active' : undefined} _callback={pauseTimer} />
          </div>
        </>
      }
      {/*<CountdownCircleTimer />*/}
    </div>
  );
}

export default App;
