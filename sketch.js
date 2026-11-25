const MESHROWS = 8;
const MESHCOLUMNS = 6;
let matrixWidth, matrixHeight, cellWidth, cellHeight, halfCell;
const tracksMatrix = {
    rows: MESHROWS,
    cols: MESHCOLUMNS,
    start: { row: 5, col: 6 },
    end: { row: 6, col: 6 },
    rowCounts: [4, 3, 5, 4, 4, 3, 4, 3],
    colCounts: [7, 4, 5, 6, 6, 2],
    trackPath: [
        { row: 5, col: 6, type: "STRAIGHT", direction: "LEFT" },
        { row: 5, col: 5, type: "STRAIGHT", direction: "LEFT" },
        { row: 5, col: 4, type: "CURVE", direction: "UPFROMRIGHT" },
        { row: 4, col: 4, type: "STRAIGHT", direction: "UP" },
        { row: 3, col: 4, type: "CURVE", direction: "RIGHTFROMDOWN" },
        { row: 3, col: 5, type: "CURVE", direction: "UPFROMLEFT" },
        { row: 2, col: 5, type: "CURVE", direction: "LEFTFROMDOWN" },
        { row: 2, col: 4, type: "CURVE", direction: "UPFROMRIGHT" },
        { row: 1, col: 4, type: "CURVE", direction: "LEFTFROMDOWN" },
        { row: 1, col: 3, type: "STRAIGHT", direction: "LEFT" },
        { row: 1, col: 2, type: "STRAIGHT", direction: "LEFT" },
        { row: 1, col: 1, type: "CURVE", direction: "DOWNFROMRIGHT" },
        { row: 2, col: 1, type: "STRAIGHT", direction: "DOWN" },
        { row: 3, col: 1, type: "CURVE", direction: "RIGHTFROMUP" },
        { row: 3, col: 2, type: "STRAIGHT", direction: "RIGHT" },
        { row: 3, col: 3, type: "CURVE", direction: "DOWNFROMLEFT" },
        { row: 4, col: 3, type: "CURVE", direction: "LEFTFROMUP" },
        { row: 4, col: 2, type: "STRAIGHT", direction: "LEFT" },
        { row: 4, col: 1, type: "CURVE", direction: "DOWNFROMRIGHT" },
        { row: 5, col: 1, type: "STRAIGHT", direction: "DOWN" },
        { row: 6, col: 1, type: "STRAIGHT", direction: "DOWN" },
        { row: 7, col: 1, type: "CURVE", direction: "RIGHTFROMUP" },
        { row: 7, col: 2, type: "STRAIGHT", direction: "RIGHT" },
        { row: 7, col: 3, type: "CURVE", direction: "DOWNFROMLEFT" },
        { row: 8, col: 3, type: "CURVE", direction: "RIGHTFROMUP" },
        { row: 8, col: 4, type: "STRAIGHT", direction: "RIGHT" },
        { row: 8, col: 5, type: "CURVE", direction: "UPFROMLEFT" },
        { row: 7, col: 5, type: "STRAIGHT", direction: "UP" },
        { row: 6, col: 5, type: "CURVE", direction: "RIGHTFROMDOWN" },
        { row: 6, col: 6, type: "STRAIGHT", direction: "RIGHT" }
    ]
};

// Check the track in the console
for (const step of tracksMatrix.trackPath) {
    console.log(
        `Row ${step.row}, Col ${step.col} -> ${step.direction}`
    );
}

function setup() {
    createCanvas(600, 800);
    // cellWidth = width / MESHCOLUMNS;
    // cellHeight = width / MESHROWS;
    // halfCell = cellWidth / 2;

    mesh = new TrackMesh(tracksMatrix);
    mesh.showMesh();
    mesh.layTrack();
    mesh.showCounts();

    // console.log(mesh.getTrack(5,3))

}