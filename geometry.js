function isOverlap(d, p) {
    const end1 = d.x + d.w;
    const end2 = p.x + p.w;

    return !(end2 < d.x || p.x > end1);
}

module.exports ={
    isOverlap,
}