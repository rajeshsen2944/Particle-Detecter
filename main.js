const sketch = require("./sketch");

function loop(d1, d2, p1, p2) {
    while (sketch.running()) {
        sketch.update(d1, d2, p1, p2);
        sketch.draw(d1, d2, p1, p2);
    }
}

function main() {
    const v = sketch.setup();
    loop(v.d1, v.d2, v.p1, v.p2);
    sketch.teardown();
}


main();
