var canvas, context, circles = [], block, count = 0, FPS = 0;

(function () {
    canvas = document.querySelector("#main-canvas");
    document.body.onresize = function () {
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
    };
    document.body.onresize();

    context = canvas.getContext("2d");

    block = new Clock();

    requestAnimationFrame(draw);
    setInterval(function() {
        document.querySelector("#FPS").innerHTML = "FPS: " + (count - FPS) + "<br/>COUNT: " + circles.length;
        FPS = count;
    }, 1000);
})();

function draw() {
    if (count++ % 2 === 0) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        // circles.push(new CircleParticle().set("x", Math.random() * document.body.clientWidth).set("radius", 3 + Math.round(Math.random() * 6)));
        // for (var i in circles) {
        //     if (circles[i] && circles[i].y + circles[i].radius <= canvas.height) circles[i].draw();
        //     else circles[i] = null;
        // }

        block.draw();
    }

    requestAnimationFrame(draw);
}