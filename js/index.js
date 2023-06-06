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
import { Events } from "./events.js"

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

const events = Events({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,
    controls,
    timer,
    bgAudio: sounds.bgAudio,
    buttonPressAudio: sounds.buttonPressAudio
})
