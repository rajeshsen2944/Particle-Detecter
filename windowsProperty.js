// const r = require("raylib");

const title = "Particle Detector";
let width = 600;
let height = 600;
const fps = 50;
const pos = {
    x: 1100,
    y: 10,
}

color = {
    BG: {
        r: 0,
        g: 0,
        b: 0,
        a: 255,
    },
    DEFAULT: {
        r: 255,
        g: 255,
        b: 255,
        a: 255,
    },
    DETECTED: {
        r: 230,
        g: 41,
        b: 55,
        a: 150,
    },
    PARTICLE: {
        r: 102,
        g: 191,
        b: 255,
        a: 255,
    },
}

module.exports = {
    title,
    width,
    height,
    fps,
    pos,
    color,
}