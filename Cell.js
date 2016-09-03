class Cell {
    constructor(id, letter = "") {
        this.obj = document.createElement("td");
        this.obj.id = `cell_${id}`;
        this.obj.className = "cell";

        this.letter = letter;
        this.obj.appendChild(document.createTextNode(letter));
    }

    getObj(){
        return this.obj;
    }
}
