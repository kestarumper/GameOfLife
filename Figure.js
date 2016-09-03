class Figure {
    constructor(shape, x = 0, y = 0) {
        this.rows = [];
        this.width = [];

        for(let row of shape.split("\n")){
            this.rows.push(row.split(""));
        }

        this.height = this.rows.length;
        this.pos_x = x;
        this.pos_y = y;
    }
}
