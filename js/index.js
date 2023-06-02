import Controls from "./controls.js"
import Timer from "./timer.js"

const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonSet = document.querySelector(".set")
const buttonStop = document.querySelector(".stop")
const buttonSoundOn = document.querySelector(".sound-on")
const buttonSoundOff = document.querySelector(".sound-off")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

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


})

buttonPause.addEventListener("click", function (){

    controls.pause()
    timer.hold()

})


buttonStop.addEventListener("click", function (){
    controls.reset()
    timer.reset()
    
    
})

buttonSet.addEventListener("click", function(){

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
})
    
buttonSoundOff.addEventListener("click", function(){
    buttonSoundOn.classList.remove("hide")
    buttonSoundOff.classList.add("hide")
})

