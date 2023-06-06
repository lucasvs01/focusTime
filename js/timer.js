import { Sounds } from "./sounds.js"

const sounds = Sounds()

export default function Timer({
    secondsDisplay,
    minutesDisplay,
    resetControls,
}){

    let timeOut
    let minutes = Number(minutesDisplay.textContent)


    function updateDisplay(newMinutes, seconds){
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds 

        minutesDisplay.textContent =  String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent =  String(seconds).padStart(2, "0")

        
}

function reset (){
    
    updateDisplay(minutes, 0)
    clearTimeout(timeOut)

}


function countDown(){
    
  timeOut = setTimeout(function(){
        
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        const isFinished = minutes <= 0 && seconds <= 0
        
        updateDisplay(minutes, 0)
        
        if(isFinished){
            
            resetControls()
            updateDisplay()
            sounds.kitchenTimer.play()
            return
        }
        
        if(seconds <= 0){
            seconds = 60
            --minutes
        }

        
        updateDisplay(minutes, String(seconds -1))

        countDown()
    }, 1000)
}

function updateMiuntes(newMinutes){
    minutes = newMinutes

}

function hold (){
    clearTimeout(timeOut)
}
    return {reset, countDown, updateDisplay, updateMiuntes, hold}
}