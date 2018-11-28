
var Clock = function () {
    var frames = 0;
    this.x = 500;
    this.y = 400;
    this.color = "#ffffff";
    this.radius = 200;

    Clock.prototype.constructor = function (radius) {
        this.radius = radius;
    };

    this.draw = function () {
        context.moveTo(this.x, this.y);
        context.beginPath();
        context.strokeStyle = this.color;
        var start = {x: 0, y: 0}, end = {x: 0, y: 0}, radius = this.radius;
        for (var i=0; i<Math.floor(frames / 6); i++) {
            start.x = Math.cos((6 * i) * Math.PI / 180) * ((i % 5 === 0 ? 0.9 : 0.95) * radius);
            start.y = Math.sin((6 * i) * Math.PI / 180) * ((i % 5 === 0 ? 0.9 : 0.95) * radius);
            end.x = Math.cos((6 * i) * Math.PI / 180) * radius;
            end.y = Math.sin((6 * i) * Math.PI / 180) * radius;

            context.moveTo(this.x + start.x, this.y + start.y);
            context.lineTo(this.x + end.x, this.y + end.y);
            context.stroke();
        }

        if (frames <= 360) {
            frames+=6;
        } else {
            var t = new Date(), s = t.getSeconds(), m = t.getMinutes(), h = t.getHours();

            context.moveTo(this.x, this.y);
            context.lineTo(this.x + Math.cos(6 * s * Math.PI / 180) * this.radius * 0.8, this.y + Math.sin(6 * s * Math.PI / 180) * this.radius * 0.8);
            context.stroke();
            context.moveTo(this.x, this.y);
            context.lineTo(this.x + Math.cos(6 * m * Math.PI / 180) * this.radius * 0.7, this.y + Math.sin(6 * m * Math.PI / 180) * this.radius * 0.7);
            context.stroke();
            context.moveTo(this.x, this.y);
            context.lineTo(this.x + Math.cos(30 * h * Math.PI / 180) * this.radius * 0.6, this.y + Math.sin(30 * h * Math.PI / 180) * this.radius * 0.6);
            context.stroke();
        }

        context.fillStyle = this.color;
        context.moveTo(this.x, this.y);
        context.arc(this.x, this.y, this.radius * 0.05, 0, 2 * Math.PI);
        context.fill();
    };

    return this;
};