
export function Events({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,
    controls,
    timer,
    buttonPressAudio,
    bgAudio,
    
}){
    const eventPlay = buttonPlay.addEventListener("click", function (){
        controls.play()
        timer.countDown()
        buttonPressAudio.play()
    
    })
    
    const eventPause = buttonPause.addEventListener("click", function (){
    
        controls.pause()
        timer.hold()
        buttonPressAudio.play()
    
    })
    
    const eventStop = buttonStop.addEventListener("click", function (){
        controls.reset()
        timer.reset()
        buttonPressAudio.play()
        
        
    })
    
    const eventSet = buttonSet.addEventListener("click", function(){
    
        buttonPressAudio.play()
        let newMinutes = controls.getMinutes()
    
        if(!newMinutes){
            timer.reset()
            return
        }
        timer.updateDisplay(newMinutes, 0)
        timer.updateMiuntes(newMinutes)
    
    })
    
    const eventSoundOn = buttonSoundOn.addEventListener("click", function(){
        buttonSoundOn.classList.add("hide")
        buttonSoundOff.classList.remove("hide")
        
        bgAudio.pause()
        bgAudio.loop = true
    })
        
    const eventSoundOff = buttonSoundOff.addEventListener("click", function(){
        buttonSoundOn.classList.remove("hide")
        buttonSoundOff.classList.add("hide")
    
        bgAudio.play()

    })

    return {eventPlay, eventPause, eventStop, eventSet, eventSoundOn, eventSoundOff}
}