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
                let cell = new Cell(j);
                this.cellTable.push(cell);
                row.appendChild(cell.getDOMObj());
            }
        }
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
}
