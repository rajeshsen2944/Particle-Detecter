const r = require("raylib");
const g = require("./geometry");
const w = require("./windowsProperty");

function isInBound(d) {
    const end = d.x + d.w;
    return d.x < d.l || end > d.u
}

function doesDetectorOverlap(d, i = 0, ...p) {
    if (i === p.length) { return false; }
    return g.isOverlap(d, p[i]) ||
        doesDetectorOverlap(d, ++i, ...p);
}

function updateScannerColor(d, p1, p2) {
    d.d = doesDetectorOverlap(d, 0, p1, p2);
}

function calcVelocity(d) {
    return isInBound(d) ? -d.v : d.v;
}

function updateDetecter(d) {
    d.v = calcVelocity(d);
    d.x += d.v;
}

function createDetecter(x, w, v, l, u) {
    return {
        x: x,
        w: w,
        v: v,
        d: false,
        l: l,
        u: u,
    }
}

function setColor(d) {
    return d.d ? w.color.DETECTED : w.color.DEFAULT;
}

function draw(d) {
    const color = setColor(d);
    r.DrawRectangle(
        d.x,
        0,
        d.w,
        r.GetScreenWidth(),
        color
    )
}
module.exports = {

    updateDetecter,
    createDetecter,
    draw,
    updateScannerColor,
}