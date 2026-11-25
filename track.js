class Track {
    constructor(type,cellWidth) {
        this.type = type;
        this.cellWidth = cellWidth;
        this.colors = ['green', 'blue', 'red', 'yellow', 'black', 'orange', 'brown', 'gray']

    }

    build(x, y, teta) {
        if (this.type == 'straight') {
            // make a straight track
            push();
            translate(x, y);
            rotate(teta)
            strokeWeight(5)
            line(-this.cellWidth/5, -this.cellWidth/2, -this.cellWidth/5, this.cellWidth/2);
            line(this.cellWidth/5, -this.cellWidth/2, this.cellWidth/5, this.cellWidth/2);
            strokeWeight(8)
            line(-this.cellWidth/5, -this.cellWidth/2, this.cellWidth/5, -this.cellWidth/2)
            line(-this.cellWidth/5, -6*this.cellWidth/20, this.cellWidth/5, -6*this.cellWidth/20)
            line(-this.cellWidth/5, -this.cellWidth/10, this.cellWidth/5, -this.cellWidth/10)
            line(-this.cellWidth/5, this.cellWidth/10, this.cellWidth/5, this.cellWidth/10)
            line(-this.cellWidth/5, 6*this.cellWidth/20, this.cellWidth/5, 6*this.cellWidth/20)
            line(-this.cellWidth/5, this.cellWidth/2, this.cellWidth/5, this.cellWidth/2)
            pop();
        } else if (this.type = 'curve') {
            // make a straight track
            push();
            translate(x, y);
            rotate(teta)
            strokeWeight(5)
            // fill('red')
            for (let i = 0; i < 6; i++) {
                push()
                translate(-this.cellWidth/2, -this.cellWidth/2)
                push()
                // stroke(this.colors[i]);
                rotate(-i * (2 * QUARTER_PI / 5))
                strokeWeight(7)

                line(0, 0, 0, 14*this.cellWidth/20)
                pop()
                pop()
            }
            translate(0, 0);
            strokeWeight(5)
            arc(-this.cellWidth/2, -this.cellWidth/2, 12*this.cellWidth/20, 12*this.cellWidth/20, 0, HALF_PI)
            noFill();
            arc(-this.cellWidth/2, -this.cellWidth/2, 28*this.cellWidth/20, 28*this.cellWidth/20, 0, HALF_PI)
            pop();
        }
    }

    show() {

    }
}