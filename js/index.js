import resetControls from "./controls"
import "./timer"


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


buttonPlay.addEventListener("click", function (){
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")
    buttonSet.classList.add("hide")
    buttonStop.classList.remove("hide")

    countDown()


})

buttonPause.addEventListener("click", function (){
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")

    clearTimeout(timeOut)

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


buttonStop.addEventListener("click", function (){
    resetControls()
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