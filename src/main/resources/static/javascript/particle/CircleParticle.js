
var CircleParticle = function () {
    this.x = 0;
    this.y = 0;
    this.speed = 1;
    this.radius = 0;
    this.color = "#ffffff";

    this.draw = function () {
        this.speed = Math.round(Math.sqrt(this.radius) * 10) / 10;

        this.y += this.speed;
        context.beginPath();

        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill();

        var gradient = context.createRadialGradient(this.x, this.y, this.radius, this.x, this.y, this.radius * 1.6);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        context.fillStyle = gradient;
        context.arc(this.x, this.y, this.radius * 1.6, 0, 2 * Math.PI);
        context.fill();
    };

    this.set = function (key, value) {
        if (this.hasOwnProperty(key + "")) this[key + ""] = value;
        return this;
    };

    return this;
};