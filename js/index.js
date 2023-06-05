import Controls from "./controls.js"
import Timer from "./timer.js"
import {buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
    minutesDisplay,
    secondsDisplay} from "./elements.js"

import {Sounds} from "./sounds.js"

const sounds = Sounds({

})

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    
}) 

const timer = Timer({
    secondsDisplay,
    minutesDisplay,
    resetControls: controls.reset,
})


buttonPlay.addEventListener("click", function (){
    controls.play()
    timer.countDown()
    sounds.buttonPressAudio.play()

})

buttonPause.addEventListener("click", function (){

    controls.pause()
    timer.hold()
    sounds.buttonPressAudio.play()

})

buttonStop.addEventListener("click", function (){
    controls.reset()
    timer.reset()
    sounds.buttonPressAudio.play()
    
    
})

buttonSet.addEventListener("click", function(){

    sounds.buttonPressAudio.play()
    let newMinutes = controls.getMinutes()

    if(!newMinutes){
        timer.reset()
        return
    }
    timer.updateDisplay(newMinutes, 0)
    timer.updateMiuntes(newMinutes)

})

buttonSoundOn.addEventListener("click", function(){
    buttonSoundOn.classList.add("hide")
    buttonSoundOff.classList.remove("hide")

    sounds.bgAudio.play()
    sounds.bgAudio.loop
})
    
buttonSoundOff.addEventListener("click", function(){
    buttonSoundOn.classList.remove("hide")
    buttonSoundOff.classList.add("hide")

    sounds.bgAudio.pause()
    
})

