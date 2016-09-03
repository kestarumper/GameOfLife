class Cell {
    constructor(id) {
        this.obj = document.createElement("td");
        this.obj.id = `cell_${id}`;
        this.obj.className = "cell";
    }

    getObj(){
        return this.obj;
    }
}
