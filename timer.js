let time = 10; // 10 секунд

const timer = setInterval(() => {
    console.log(time);
    time--;
    
    if (time < 0) {
        clearInterval(timer);
        console.log("Время вышло!");
    }
}, 1000);