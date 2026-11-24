const MESHROWS = 3;
const MESHCOLUMNS = 3;
let matrixWidth, matrixHeight, cellWidth, cellHeight, halfCell;
const tracksMatrix = {
    rows:3,
    cols:3,
    start: {row:3, col:3},
    end: {row:3, col:1},
    rowCounts: [2,3,2],
    colCounts: [3,2,2],
    trackPath:[
        {row:3,col:3,type:"STRAIGHT",direction:"UP"},
        {row:2,col:3,type:"CURVE",direction:"LEFTFROMDOWN"},
        {row:2,col:2,type:"CURVE",direction:"UPFROMRIGHT"},
        {row:1,col:2,type:"CURVE",direction:"LEFTFROMDOWN"},
        {row:1,col:1,type:"CURVE",direction:"DOWNFROMRIGHT"},
        {row:2,col:1,type:"STRAIGHT",direction:"DOWN"},
        {row:3,col:1,type:"STRAIGHT",direction:"DOWN"}
    ]
};

// Check the track in the console
for (const step of tracksMatrix.trackPath) {
    console.log(
        `Row ${step.row}, Col ${step.col} -> ${step.direction}`
    );
}

function setup() {
    createCanvas(600, 600);
    // rectMode(CENTER)
    cellWidth = width/MESHCOLUMNS;
    cellHeight = width/MESHROWS;
    halfCell = cellWidth/2;

    mesh = new TrackMesh(tracksMatrix);
    mesh.showMesh();
    mesh.layTrack();
    mesh.showCounts();

    // console.log(mesh.getTrack(5,3))

}