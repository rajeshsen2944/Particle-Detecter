const w = require("./windowsProperty.js");
const r = require("raylib");

function draw(p) {
    r.DrawRectangle(
        p.x,
        0,
        p.w,
        r.GetScreenWidth(),
        w.color.PARTICLE
    )
}
function createParticle(x, w) {
    return {
        x: x,
        w: w,
    };
}
module.exports = {
    draw,
    createParticle,
}