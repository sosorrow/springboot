
var Clock = function () {
    var frames = 0;
    this.x = 500;
    this.y = 400;
    this.color = "#ffffff";
    this.radius = 300;
    this.time = Math.floor(new Date().valueOf() / 1000) % (24 * 60 * 60);

    Clock.prototype.constructor = function (radius) {
        this.radius = radius;
    };

    this.draw = function () {
        context.moveTo(this.x, this.y);
        context.beginPath();
        context.strokeStyle = this.color;
        var start = {x: 0, y: 0}, end = {x: 0, y: 0}, radius = frames * this.radius / 360;
        for (var i=0; i<60; i++) {
            start.x = Math.sin((6 * i + frames) * Math.PI / 180) * ((i % 5 === 0 ? 0.9 : 0.95) * radius);
            start.y = Math.cos((6 * i + frames) * Math.PI / 180) * ((i % 5 === 0 ? 0.9 : 0.95) * radius);
            end.x = Math.sin((6 * i + frames) * Math.PI / 180) * radius;
            end.y = Math.cos((6 * i + frames) * Math.PI / 180) * radius;

            context.moveTo(this.x + start.x, this.y + start.y);
            context.lineTo(this.x + end.x, this.y + end.y);
            context.stroke();
        }

        if (frames <= 360) {
            frames+=6;
        } else {
            var s = this.time % 60,
                m = Math.floor(this.time % 3600 / 60),
                h = this.time / 3600;
            console.log(h + ":" + m + ":" + s);

            context.moveTo(this.x, this.y);
            context.lineTo(this.x + Math.cos(6 * s * Math.PI / 180) * this.radius * 0.8, this.y + Math.sin(6 * s * Math.PI / 180) * this.radius * 0.8);
            context.stroke();
            context.moveTo(this.x, this.y);
            context.lineTo(this.x + Math.cos(6 * m * Math.PI / 180) * this.radius * 0.7, this.y + Math.sin(6 * m * Math.PI / 180) * this.radius * 0.7);
            context.stroke();
            context.moveTo(this.x, this.y);
            context.lineTo(this.x + Math.cos(30 * (h % 12) * Math.PI / 180) * this.radius * 0.6, this.y + Math.sin(30 * (h % 12) * Math.PI / 180) * this.radius * 0.6);
            context.stroke();
        }

        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius * 0.05, 0, 2 * Math.PI);
        context.fill();
    };

    setInterval(function() {
        this.time = ++this.time % (24 * 60 * 60);
    }.bind(this), 1000);

    return this;
};