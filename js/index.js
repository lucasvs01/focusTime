// Default import
import resetControls from "./controls.js"

// Named import
import {Timer} from "./timer.js"

const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonSet = document.querySelector(".set")
const buttonStop = document.querySelector(".stop")
const buttonSoundOn = document.querySelector(".sound-on")
const buttonSoundOff = document.querySelector(".sound-off")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let minutes = Number(minutesDisplay.textContent)
let timeOut

let timer = Timer([
    secondsDisplay,
    minutesDisplay,
    timeOut,
    resetControls,
])

buttonPlay.addEventListener("click", function (){
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")
    buttonSet.classList.add("hide")
    buttonStop.classList.remove("hide")

    timer.countDown()


})

buttonPause.addEventListener("click", function (){
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")

    clearTimeout(timeOut)

})


buttonStop.addEventListener("click", function (){
    timer.resetControls()
    resetTimer()
    
})

buttonSoundOn.addEventListener("click", function(){
    buttonSoundOn.classList.add("hide")
    buttonSoundOff.classList.remove("hide")
})
    
buttonSoundOff.addEventListener("click", function(){
    buttonSoundOn.classList.remove("hide")
    buttonSoundOff.classList.add("hide")
})

buttonSet.addEventListener("click", function(){
    let newMinutes = prompt("Quantos Minutos?")
     if(!newMinutes){
         resetTimer()
         return
     }
 
     minutes = newMinutes
     updateTimerDisplays(minutes, 0)
 })
