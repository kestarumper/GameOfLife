class Cell {
    constructor(id) {
        this.obj = document.createElement("td");
        this.obj.id = `cell_${id}`;
        this.obj.className = "cell";
    }

    makeAlive(){
        this.getDOMObj().style.backgroundColor = "red";
        this.getDOMObj().removeAttribute("dead","");
        this.getDOMObj().setAttribute("alive","");
    }

    makeDead(){
        this.getDOMObj().style.backgroundColor = "white";
        this.getDOMObj().removeAttribute("alive","");
        this.getDOMObj().setAttribute("dead","");
    }

    getDOMObj(){
        return this.obj;
    }
}
