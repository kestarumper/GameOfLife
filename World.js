class World {
    constructor(tableId, width, height = width){
        this.width = width;
        this.height = height;
        this.worldGrid = document.getElementById(tableId);
    }

    drawGrid(){
        for(let i = 0; i < this.height; i++){
            let row = document.createElement("tr");
            row.id = `row_${i}`;
            row.className = "row";

            this.worldGrid.appendChild(row);

            for (let j = 0; j < this.width; j++) {
                let cell = new Cell(j);
                row.appendChild(cell.getObj());
            }
        }
    }

    getCells(){
        return this.worldGrid.getElementsByClassName('cell');
    }

    getRows(){
        return this.worldGrid.getElementsByClassName('row');
    }
}
