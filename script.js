// ルーレットスタート
function start() {
    roulette = setInterval(function() {
        var idx = Math.floor(Math.random() * 3) + 1;
        document.getElementById("roulette").innerHTML = idx;
    }, 10);
}

// ルーレットストップ
function stop() {
    if (roulette) {
        clearInterval(roulette);
    }
}