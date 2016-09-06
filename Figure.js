class Figure {
    constructor(shape, worldCells, x = 0, y = 0) {
        this.rows = [];
        this.cells = [];
        this.pos_x = x;
        this.pos_y = y;

        for(let row of shape.split("\n")){
            this.rows.push(row);
        }

        for(let i = 0; i < this.rows.length; i++){
            for(let j = 0; j < this.rows[i].length; j++){
                if(this.rows[i][j] == "x"){
                    this.cells.push(worldCells[(this.pos_y + i)*world.width + this.pos_x + j]);
                }
            }
        }
    }

    render(){
        for(let cell of this.cells){
            cell.makeAlive();
        }
    }
}
