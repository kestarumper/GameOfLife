class Cell {
    constructor(x,y) {
        this.obj = document.createElement("td");
        this.pos_x = x;
        this.pos_y = y;
        this.checked = false;
        this.aliveNeighbours = 0;

        this.getDOMObj().onclick = () => {
            this.getDOMObj().style.backgroundColor = "green";
            this.makeAlive();
        }

        this.getDOMObj().className = "cell";
        this.getDOMObj().setAttribute("pos_x",this.pos_x);
        this.getDOMObj().setAttribute("pos_y",this.pos_y);
        this.getDOMObj().setAttribute("dead","");
    }

    isAlive(){
        return this.getDOMObj().hasAttribute("alive");
    }

    isChecked(){
        return this.checked;
    }

    setChecked(state){
        this.checked = state;
    }

    getPos(){
        return {
            x: this.pos_x,
            y: this.pos_y
        };
    }

    checkNeighbours(world){
        if(!this.isChecked()){
            this.setChecked(true);

            let aliveNeighbours = 0;

            for(let i = -1; i < 2; i++){
                for(let j = -1; j < 2; j++){
                    let neighbour = world.getCell(this.getPos().x+j, this.getPos().y+i);
                    if(neighbour != undefined){
                        if(neighbour != this){
                            if(neighbour.isAlive()){
                                aliveNeighbours++;
                            }
                        }
                    }
                }
            }
            this.aliveNeighbours = aliveNeighbours;
        }
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
