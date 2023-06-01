export default function Timer({
    secondsDisplay,
    minutesDisplay,
    timeOut,
    resetControls
}){
    function updateTimerDisplays(minutes, seconds){
    secondsDisplay.textContent =  String(seconds).padStart(2, "0")
    minutesDisplay.textContent =  String(minutes).padStart(2, "0") 
}

function resetTimer (){
    
    updateTimerDisplays(minutes, 0)
    clearTimeout(timeOut)

}


function countDown(){
    
  timeOut = setTimeout(function(){
        
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        
        updateTimerDisplays(minutes, 0)
        
        if(minutes <= 0){
            
            resetControls()
            
            return
        }
        
        if(seconds <= 0){
            seconds = 2
            --minutes
        }

        
        updateTimerDisplays(minutes, String(seconds -1))

        countDown()
    }, 1000)
}
    return {resetTimer, countDown}
}