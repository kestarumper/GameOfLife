class World {
    constructor(tableId, width, height = width){
        this.width = width;
        this.height = height;
        this.worldGrid = document.getElementById(tableId);
        this.cellTable = [];
    }

    drawGrid(){
        for(let i = 0; i < this.height; i++){
            let row = document.createElement("tr");
            row.id = `row_${i}`;
            row.className = "row";

            this.worldGrid.appendChild(row);

            for (let j = 0; j < this.width; j++) {
                let cell = new Cell(j,i);
                this.cellTable.push(cell);
                row.appendChild(cell.getDOMObj());
            }
        }
    }

    getCell(x,y){
        return this.cellTable[y*this.width+x];
    }

    getCells(){
        return this.cellTable;
    }

    put(figure){
        if(!(figure instanceof Figure)){
            console.error(`${figure.constructor.name} is not a valid object.`);
        }else {
            figure.render();
        }
    }

    tick(){
        for(let cell of this.getCells()){
            if(cell.isAlive()){
                for(let i = -1; i < 2; i++){
                    for(let j = -1; j < 2; j++){
                        let neighbour = this.getCell(cell.getPos().x+j, cell.getPos().y+i);
                        if(neighbour != undefined){
                            neighbour.checkNeighbours(this);
                        }
                    }
                }
            }
        }
        for(let cell of this.getCells()){
            if(!cell.isAlive() && cell.aliveNeighbours == 3){
                cell.makeAlive();
            }
            if(cell.isAlive() && (cell.aliveNeighbours != 2 && cell.aliveNeighbours != 3)){
                cell.makeDead();
            }
            cell.setChecked(false);
            cell.aliveNeighbours = 0;
        }
    }
}
