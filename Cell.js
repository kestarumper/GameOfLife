class Cell {
    constructor(id) {
        this.obj = document.createElement("td");

        this.getDOMObj().id = `cell_${id}`;
        this.getDOMObj().className = "cell";
        this.getDOMObj().setAttribute("dead","");
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
