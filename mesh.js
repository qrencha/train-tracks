class TrackMesh {
    constructor(config) {
        this.rows = config.rows;
        this.cols = config.cols;
        this.start = config.start;
        this.end = config.end;
        this.rowCounts = config.rowCounts;
        this.colCounts = config.colCounts;
        this.trackPath = config.trackPath;

        this.trackMap = new Map(
            this.trackPath.map(cell => [
                this.coordKey(cell.row, cell.col),
                cell
            ])
        );
        this.cellWidth = width / MESHCOLUMNS-10;
        // console.log(this.trackPath)

    }

    coordKey(row, col) {
        return `${row},${col}`;
    }

    hasTrack(row, col) {
        return this.trackMap.has(this.coordKey(row, col));
    }

    getTrack(row, col) {
        return this.trackMap.get(this.coordKey(row, col));
    }

    layTrack() {

        for (const track of this.trackPath) {
            // console.log(track.col, track.row, track.direction)
            // square((track.col - 1) * this.cellWidth, (track.row - 1) * this.cellWidth, this.cellWidth)
            if (track.type == "CURVE") {
                let cell = new Track('curve',this.cellWidth);
                if (track.direction == "LEFTFROMDOWN"||track.direction == "DOWNFROMLEFT") {
                    // 90 degrees counter-clockwise
                    cell.build((track.col - 1) * this.cellWidth + this.cellWidth / 2, (track.row - 1) * this.cellWidth + this.cellWidth / 2, -HALF_PI)
                }
                if (track.direction == "LEFTFROMUP"||track.direction == "UPFROMLEFT") {
                    // 90 degrees counter-clockwise
                    cell.build((track.col - 1) * this.cellWidth + this.cellWidth / 2, (track.row - 1) * this.cellWidth + this.cellWidth / 2, 0)
                }
                if (track.direction == "UPFROMRIGHT"||track.direction == "RIGHTFROMUP") {
                    // 90 degrees clockwise
                    cell.build((track.col - 1) * this.cellWidth + this.cellWidth / 2, (track.row - 1) * this.cellWidth + this.cellWidth / 2, HALF_PI)
                }
                if (track.direction == "DOWNFROMRIGHT"||track.direction == "RIGHTFROMDOWN") {
                    // 180 degrees clockwise or counter-clockwise
                    cell.build((track.col - 1) * this.cellWidth + this.cellWidth / 2, (track.row - 1) * this.cellWidth + this.cellWidth / 2, PI)
                }
            }
            if (track.type == "STRAIGHT") {
                let cell = new Track('straight',this.cellWidth);
                if (track.direction == "LEFT"||track.direction == "RIGHT") {
                    cell.build((track.col - 1) * this.cellWidth + this.cellWidth / 2, (track.row - 1) * this.cellWidth + this.cellWidth / 2, HALF_PI)
                }
                if (track.direction == "UP"||track.direction == "DOWN") {
                    cell.build((track.col - 1) * this.cellWidth + this.cellWidth / 2, (track.row - 1) * this.cellWidth + this.cellWidth / 2, 0)
                }
            }
        }
    }
    showMesh() {
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                // noFill();
                strokeWeight(1)
                square(c * this.cellWidth, r * this.cellWidth, this.cellWidth)
            }
        }
    }

    showCounts(){
        for(let r=0; r<this.rows;r++){
            textSize(36)
            text(this.rowCounts[r],width-20,this.cellWidth*r+this.cellWidth/2)
        }
        for(let c=0; c<this.cols;c++){
            textSize(36)
            text(this.colCounts[c],this.cellWidth*c+this.cellWidth/2, height)
        }
    }

}