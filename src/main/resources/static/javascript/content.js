var canvas, mainContext, _w, _h;
(function () {
    canvas = document.querySelector("#main-canvas");
    document.body.onresize = function () {
        canvas.width = document.body.offsetWidth;
        canvas.height = document.body.offsetHeight;
    };
    document.body.onresize();

    if (canvas.getContext) {
        mainContext = canvas.getContext("2d");
    }

    new CircleParticle().drawTo(100, 100);

    requestAnimationFrame(refill);
})();

function refill() {
    mainContext.clearRect(0, 0, document.body.offsetWidth, document.body.offsetHeight);
    mainContext.fillStyle = 0x000000;
    mainContext.fillRect(0, 0, document.body.offsetWidth, document.body.offsetHeight);
    mainContext.fill();

    requestAnimationFrame(refill);
}