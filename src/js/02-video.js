import throttle from 'lodash.throttle';
import Player from "@vimeo/player";

const iframe = document.querySelector('iframe'); 


const player = new Vimeo.Player(iframe);

const LOCALSTORAGE_KEY = "videoplayer-current-time"
   
player.on('timeupdate', throttle(data => localStorage.setItem(LOCALSTORAGE_KEY, data.seconds), 1000),);
const savedTime = localStorage.getItem(LOCALSTORAGE_KEY)
if(savedTime){
    player.setCurrentTime(savedTime);
};









// function updateTime(){
//     ;
//     player.setCurrentTime(savedTime).then(function(seconds){
//         console.log(seconds);
//     }).catch(function(error){
//         switch(error.name){
//             case 'RangeError':
//                 break;      
//         }
//     })
// };


// function onPlay(){
//     player.getCurrentTime().then(function(seconds) {
//     localStorage.setItem(LOCALSTORAGE_KEY, seconds);
//         });
// };  
