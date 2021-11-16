import { useState, createContext } from "react";

export const SettingsContext = createContext()

function SettingsContextProvider(props) {

    const [pomodoro, setPomodoro] = useState(0)
    const [executing, setExecuting] = useState({})
    const [startAnimate, setStartAnimate] = useState(false)

    // clear session storage 
    const SettingsBtn = () => {
        setExecuting({})
        setPomodoro(0)
    }

    function setCurrentTimer(active_state) {
        updateExecute({
            ...executing,
            active: active_state
        })
        setTimerTime(executing)
    }

    // start animation fn 
    function startTimer() {
        setStartAnimate(true)
    }
    // pause animation fn 
    function pauseTimer() {
        setStartAnimate(false)
    }

    const children = ({ remainingTime }) => { // Muestra los minutos y segundos en el reloj animado 
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60

        return `${minutes}:${seconds}`
    }

    const updateExecute = updatedSettings => {
        console.log('entra updateExecute')
        setExecuting(updatedSettings)
        setTimerTime(updatedSettings)
    }

    const setTimerTime = (evaluate) => {
        switch (evaluate.active) { // Dependiendo de cual input esta actvo hace los calculos
            case 'work':
                setPomodoro(evaluate.work)
                break;
            case 'short':
                setPomodoro(evaluate.short)
                break;
            case 'long':
                setPomodoro(evaluate.long)
                break;
            default:
                setPomodoro(0)
                break;
        }
    }

    function stopTimer() {
        setStartAnimate(false)
    }

    return (
        <SettingsContext.Provider value={{
            stopTimer, updateExecute, pomodoro,
            executing, startAnimate, startTimer,
            pauseTimer, SettingsBtn, setCurrentTimer,
            children
        }}>
            {props.children}
        </SettingsContext.Provider>
    )

}

export default SettingsContextProvider