import throttle from 'lodash.throttle';
import Player from "@vimeo/player";

const player = new Vimeo.Player(iframe);

const LOCALSTORAGE_KEY = "videoplayer-current-time"

player.on('timeUpdate', throttle(data => localStorage.setItem(LOCALSTORAGE_KEY, data.seconds), 1000),);

player.on('loaded', updateTime); 

function updateTime(){
    const savedTime = localStorage.getItem(LOCALSTORAGE_KEY);
    player.setCurrentTime(savedTime).then(function(seconds){
        console.log(seconds);
    }).catch(function(error){
        switch(error.name){
            case 'RangeError':
                break;      
        }
    })
};