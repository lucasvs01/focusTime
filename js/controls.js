
export default function Controls ({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet
}){
    function reset (){
        buttonSet.classList.remove("hide")
        buttonStop.classList.add("hide")
        buttonPlay.classList.remove("hide")
        buttonPause.classList.add("hide")
    }

    function play(){
        buttonPlay.classList.add("hide")
        buttonPause.classList.remove("hide")
        buttonSet.classList.add("hide")
        buttonStop.classList.remove("hide")
    }

    function pause(){
        buttonPlay.classList.remove("hide")
        buttonPause.classList.add("hide")
    }

    function getMinutes(){
        let newMinutes = prompt("Quantos Minutos?")
        if(!newMinutes){
            return false
        }
    
        return newMinutes
    }

    return {reset, play, pause, getMinutes}
}
//export default resetControls