console.log("Spinacz");

let world = new World("world", 200);

world.drawGrid();

let f = new Figure(` x \n  x\nxxx`, 20, 10);

world.put(f);
