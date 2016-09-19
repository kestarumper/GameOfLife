console.log("Spinacz");

let world = new World("world", 200);

world.drawGrid();

let f = new Figure(` x \n  x\nxxx`, world.getCells(), 20, 10);
let d = new Figure(`xx\nxx`, world.getCells(), 10, 5);
let fountain1 = new Figure(`x     x\n xx xx \n  x x  \nx     x\nxxx xxx`, world.getCells(), 20, 20);
let fountain2 = new Figure(`x     x\n xx xx \n  x x  \nx     x\nxxx xxx`, world.getCells(), 40, 20);
let fountain3 = new Figure(`x     x\n xx xx \n  x x  \nx     x\nxxx xxx`, world.getCells(), 20, 40);
let fountain4 = new Figure(`x     x\n xx xx \n  x x  \nx     x\nxxx xxx`, world.getCells(), 40, 40);
let fountain5 = new Figure(`x     x\n xx xx \n  x x  \nx     x\nxxx xxx`, world.getCells(), 30, 30);
let fountain6 = new Figure(`x     x\n xx xx \n  x x  \nx     x\nxxx xxx`, world.getCells(), 10, 30);
let fountain7 = new Figure(`x     x\n xx xx \n  x x  \nx     x\nxxx xxx`, world.getCells(), 30, 50);
let fountain8 = new Figure(`x     x\n xx xx \n  x x  \nx     x\nxxx xxx`, world.getCells(), 50, 30);
let fountain9 = new Figure(`x     x\n xx xx \n  x x  \nx     x\nxxx xxx`, world.getCells(), 30, 10);

let fountain10 = new Figure(`x     x\n xx xx \n  x x  \nx     x\nxxx xxx`, world.getCells(), 20+50, 20);
let fountain11 = new Figure(`x     x\n xx xx \n  x x  \nx     x\nxxx xxx`, world.getCells(), 40+50, 20);
let fountain12 = new Figure(`x     x\n xx xx \n  x x  \nx     x\nxxx xxx`, world.getCells(), 20+50, 40);
let fountain13 = new Figure(`x     x\n xx xx \n  x x  \nx     x\nxxx xxx`, world.getCells(), 40+50, 40);
let fountain14 = new Figure(`x     x\n xx xx \n  x x  \nx     x\nxxx xxx`, world.getCells(), 30+50, 30);
let fountain15 = new Figure(`x     x\n xx xx \n  x x  \nx     x\nxxx xxx`, world.getCells(), 10+50, 30);
let fountain16 = new Figure(`x     x\n xx xx \n  x x  \nx     x\nxxx xxx`, world.getCells(), 30+50, 50);
let fountain17 = new Figure(`x     x\n xx xx \n  x x  \nx     x\nxxx xxx`, world.getCells(), 50+50, 30);
let fountain18 = new Figure(`x     x\n xx xx \n  x x  \nx     x\nxxx xxx`, world.getCells(), 30+50, 10);
let acorn = new Figure(` x     \n   x   \nxx  xxx`, world.getCells(), 50, 40);


//world.put(f);
//world.put(d);
world.put(fountain1);
world.put(fountain2);
world.put(fountain3);
world.put(fountain4);
world.put(fountain5);
world.put(fountain6);
world.put(fountain7);
world.put(fountain8);
world.put(fountain9);
world.put(fountain10);
world.put(fountain11);
world.put(fountain12);
world.put(fountain13);
world.put(fountain14);
world.put(fountain15);
world.put(fountain16);
world.put(fountain17);
world.put(fountain18);
//world.put(acorn);

var interval = setInterval(function() {
    world.tick();
}, 100);
