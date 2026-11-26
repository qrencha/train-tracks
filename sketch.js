let MESHROWS;
let MESHCOLUMNS;
let renderTrackMesh = false;
let tracksMatrix;

function createMesh() {
    MESHROWS = parseInt(document.getElementById('rows').value);
    MESHCOLUMNS = parseInt(document.getElementById('cols').value);
    startEdge = document.getElementById('startEdge').value;
    console.log('MESHROWS', MESHROWS, 'MESHCOLUMNS', MESHCOLUMNS, 'startEdge', startEdge)

    // let cellWidth, cellHeight, halfCell;
    tracksMatrix = {
        rows: MESHROWS,
        cols: MESHCOLUMNS,
        start: { row: 5, col: 5 },
        end: { row: 5, col: 2 },
        rowCounts: [2, 3, 4, 4, 3],
        colCounts: [5, 3, 3, 2, 3],
        trackPath: [
            { row: 5, col: 5, type: "STRAIGHT", direction: "UP" },
            { row: 4, col: 5, type: "STRAIGHT", direction: "UP" },
            { row: 3, col: 5, type: "CURVE", direction: "LEFTFROMDOWN" },
            { row: 3, col: 4, type: "CURVE", direction: "DOWNFROMRIGHT" },
            { row: 4, col: 4, type: "CURVE", direction: "LEFTFROMUP" },
            { row: 4, col: 3, type: "CURVE", direction: "UPFROMRIGHT" },
            { row: 3, col: 3, type: "STRAIGHT", direction: "UP" },
            { row: 2, col: 3, type: "CURVE", direction: "LEFTFROMDOWN" },
            { row: 2, col: 2, type: "CURVE", direction: "UPFROMRIGHT" },
            { row: 1, col: 2, type: "CURVE", direction: "LEFTFROMDOWN" },
            { row: 1, col: 1, type: "CURVE", direction: "DOWNFROMRIGHT" },
            { row: 2, col: 1, type: "STRAIGHT", direction: "DOWN" },
            { row: 3, col: 1, type: "STRAIGHT", direction: "DOWN" },
            { row: 4, col: 1, type: "STRAIGHT", direction: "DOWN" },
            { row: 5, col: 1, type: "CURVE", direction: "RIGHTFROMUP" },
            { row: 5, col: 2, type: "CURVE", direction: "DOWNFROMLEFT" }
        ]
    }

    renderTrackMesh = true;

    // Check the track in the console
    for (const step of tracksMatrix.trackPath) {
        console.log(
            `Row ${step.row}, Col ${step.col} -> ${step.direction}`
        );
    }
};



function setup() {
    createCanvas(600, 600);
}

function draw() {

    if (renderTrackMesh) {
        console.log('Rendering Track Mesh')

        mesh = new TrackMesh(tracksMatrix);
        mesh.showMesh();
        mesh.layTrack();
        mesh.showCounts();

        noLoop();
    }
}