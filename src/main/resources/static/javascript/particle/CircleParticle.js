
var CircleParticle = function (params) {
    CircleParticle.prototype.__c = null;
    CircleParticle.prototype.radius = 5;
    CircleParticle.prototype.color = "#FFFFFF";
    CircleParticle.prototype.stroke = 0;
    CircleParticle.prototype.strokeShadow = 5;

    for (var key in params) {
        if (this.hasOwnProperty(key + "")) this[key + ""] = params[key + ""];
    }

    CircleParticle.prototype.drawTo = function (x, y) {
        if (!this.__c) this.__c = canvas.getContext("2d");
        var context = this.__c;
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(x, y, this.radius, 0, 2 * Math.PI);
        context.fill();
    };

    CircleParticle.prototype.play = function () {

        return this;
    };

    return this;
};