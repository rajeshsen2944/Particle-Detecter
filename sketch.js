const r = require("raylib");
const g = require("./geometry");
const w = require("./windowsProperty.js")
const d = require("./detecter");
const p = require("./particle");

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(w.width, w.height, w.title);
    r.SetTargetFPS(w.fps);
    r.SetWindowPosition(w.pos.x, w.pos.y);

    let d1;
    let d2;

    let p1;
    let p2;

    d1 = d.createDetecter(0, 30, 2, 0, r.GetScreenWidth() / 2);
    d2 = d.createDetecter(300, 30, 5, 300, r.GetScreenWidth());

    p1 = p.createParticle(100, 60);
    p2 = p.createParticle(300, 90);

    return { d1, d2, p1, p2 }

}

function running() {
    return !r.WindowShouldClose();
}

function teardown() {
    r.CloseWindow();
}

function update(d1, d2, p1, p2) {

    d.updateDetecter(d1);
    d.updateDetecter(d2);

    d.updateScannerColor(d1, p1, p2);
    d.updateScannerColor(d2, p1, p2);
}

function draw(d1, d2, p1, p2) {
    r.BeginDrawing();
    r.ClearBackground(w.color.BG);

    p.draw(p1);
    p.draw(p2);

    d.draw(d1);
    d.draw(d2);

    r.EndDrawing();
}

module.exports = {
    setup,
    draw,
    running,
    teardown,
    update,
}


// function doesDetectorOverlap(d, p1, p2) {
//     return g.isOverlap(d, p1)
//         || g.isOverlap(d, p2);
// }