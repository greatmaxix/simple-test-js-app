import TestAppApiService from "./testAppApi";
import successSound from './../public/assets/sounds/successSound.mp3';
import errorSound from './../public/assets/sounds/errorSound.mp3';
import Helper from "./helper";

export default class baseTestState {
    constructor() {
        this.apiService = new TestAppApiService();
        this.helper = new Helper();
        this.volumeOn = true;
    }

    handleVolumeOnOff() {
        this.volumeOn = !this.volumeOn;
        let elem = document.getElementById('volume-image');
        if (this.volumeOn) {
            elem.classList.replace('off', 'on');
        }
        else {
            elem.classList.replace('on', 'off');
        }
    }

    clearAll() {
        document.getElementById('flex_container').innerHTML = '';
    }

    playSound(success) {
        let sound = errorSound;
        if (this.volumeOn) {
            if (success) {
                sound = successSound; 
            }
            let audio = new Audio(sound);
            audio.play();
        }
    }
}