console.log("Spinacz");

let world = new World("world", 200);

world.drawGrid();

let f = new Figure(` x \n  x\nxxx`, world.getCells(), 20, 10);
let d = new Figure(`xx\nxx`, world.getCells(), 10, 5);
let fountain = new Figure(`x     x\n xx xx \n  x x  \nx     x\nxxx xxx`, world.getCells(), 60, 7);


world.put(f);
world.put(d);
world.put(fountain);

var interval = setInterval(function() {
    world.tick();
}, 100);
