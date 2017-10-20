var data;
var temp;

function preload(){
    var url = 'https://api.mlab.com/api/1/databases/uniproject/collections/stockroomtemps?f={%22notes%22:%200}&apiKey=Nc0K-dplmq6a8atJ9hZxLKRsY8C19JTL';
   data = loadJSON(url);
}

function setup(){
   createCanvas(640,640);
    len = Object.keys(data).length;
    
    // draw the axis markings on the X axis
    for (i = 0; i<12; i++) {
        fill(0);
        //ellipse(50*i, 590, 5, 5);
    }
    
    // draw the markings on the Y axis
    for (i = 0; i<24; i++) {
        //ellipse(50, 25*i, 5, 5)
    }
    
  
    text("T", 15,250);
    text("E", 15,265);
    text("M", 15,280);
    text("P", 15,295);
    
    
    text("HOURS", 300, 600);
    // draw the gridlines
    //x line
    line(50, 550, 550, 550)
    line(50, 550, 50, 50)
    
    //i = 2
    // transalted to start point 
    translate(50, 0);
    for (var j=0; j<11; j++){
        temp = Math.round(parseInt(data[j].temperature.slice(1, 5)))
        console.log(j+" " +temp);
        // Figure out the Y coordinate by minusing the
        // converted temp number away from 550
        //yCoord = 550 - (Math.round(temp*50))
        
        var mapTemp = map(temp, 0, 40, 500, 0);
        //console.log(yCoord);
        fill(0);
        ellipse(j*50, mapTemp, 10, 10);  
    }
}


/*
function draw(){
    // Strip out the first digit of the degrees,
    // as well as the o and C
    temp = Math.round(parseInt(data[i].temperature.slice(1, 5)))
    console.log(temp)
    
    // Figure out the Y coordinate by minusing the
    // converted temp number away from 550
    yCoord = 550 - (Math.round(temp*50))
    console.log(yCoord)
    
    // Draw the points
    fill(0)
    //ellipse(25*i,yCoord,10,10);
    
    i++;
    
    // Stop doing this when all the points are drawn
    if (i == len) {
        noLoop()
    }
    
}
*/