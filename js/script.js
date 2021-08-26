window.addEventListener('DOMContentLoaded', function() {
    
    let allTime = 60 * 30;
    let timer;
    const seconds = document.getElementById('seconds');
    const minutes = document.getElementById('minutes');
    const endTime =  document.getElementById('end');

    countdown(allTime); 

    function countdown() {
        
        allTime--;
        if (allTime < 0) {
            endTime.innerText = 'Акция закончилась.';
        } else {
            let s = allTime % 60;
            let m = Math.floor(allTime / 60);
            if (s < 10) seconds.innerText = `0${s}`;
            else seconds.innerText = s;
            if (m < 10) minutes.innerText = `0${m}`;
            else minutes.innerText = m;
            timer = setTimeout(countdown, 1000);
        }
    }

});