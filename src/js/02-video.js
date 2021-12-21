import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const key = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimePlayer, 1000));

function onTimePlayer(event) {
localStorage.setItem(key, `${event.seconds}`);
}

const savedTime = localStorage.getItem(key);
if(savedTime){
  player.setCurrentTime(savedTime);
}
