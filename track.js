class Track {
    constructor(type) {
        this.type = type;
        this.colors = ['green', 'blue', 'red', 'yellow', 'black', 'orange', 'brown', 'gray']

    }

    build(x, y, teta) {
        if (this.type == 'straight') {
            // make a straight track
            push();
            translate(x, y);
            rotate(teta)
            strokeWeight(5)
            line(-40, -100, -40, 100);
            line(40, -100, 40, 100);
            strokeWeight(8)
            line(-40, -100, 40, -100)
            line(-40, -60, 40, -60)
            line(-40, -20, 40, -20)
            line(-40, 20, 40, 20)
            line(-40, 60, 40, 60)
            line(-40, 100, 40, 100)
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
                translate(-100, -100)
                push()
                // stroke(this.colors[i]);
                rotate(-i * (2 * QUARTER_PI / 5))
                strokeWeight(7)

                line(0, 0, 0, 142)
                pop()
                pop()
            }
            translate(0, 0);
            strokeWeight(5)
            arc(-100, -100, 120, 120, 0, HALF_PI)
            noFill();
            arc(-100, -100, 280, 280, 0, HALF_PI)
            pop();
        }
    }

    show() {

    }
}