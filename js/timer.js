export default function Timer({
    secondsDisplay,
    minutesDisplay,
    resetControls,
}){

    let timeOut
    let minutes = Number(minutesDisplay.textContent)


    function updateDisplay(minutes, seconds){
    secondsDisplay.textContent =  String(seconds).padStart(2, "0")
    minutesDisplay.textContent =  String(minutes).padStart(2, "0") 
}

function reset (){
    
    updateDisplay(minutes, 0)
    clearTimeout(timeOut)

}


function countDown(){
    
  timeOut = setTimeout(function(){
        
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        
        updateDisplay(minutes, 0)
        
        if(minutes <= 0 & seconds <= 0){
            
            resetControls()
            
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