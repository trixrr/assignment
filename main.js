//Import the library serialport

//Set the name of the port Arduino is connected to
//To find this, run in Terminal:
//		ls /dev/tty.*

var serialport = require('serialport');
var portName = "/dev/tty.usbmodem1411";        
var mongoose = require('mongoose');

var temp = "";

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://user:password@ds115625.mlab.com:15625/uniproject')

var database = mongoose.connection;

database.once('open', function() {
    
    var CelsiusSchema = mongoose.Schema({
        temperature: String,
        date: { type: Date, default: Date.now }
    });
        
    var stockRoomTempModel = mongoose.model('StockRoomTemp', CelsiusSchema);

    //Create a new object to collect the information
    var sp = new serialport(portName, {
        baudRate: 9600,
        parser: serialport.parsers.readline("\r\n")
    });
    
  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min; 
}

    sp.on('data', function (input) {
        temp = input
    })

    // connect to the client
//sp.on('data', function (input) {
//    //the setInterval function process the content every 1000ms
////    setInterval(function () {
//        //get a random value, and assign it a new variable
//        var random = getRandomInt(0, 500);
//        //format the date and time to use for the value log
//        var date = new Date();
//        //print to the console the date and the random value
//        console.log(date + ": " + random);
//
//        //create a seconds variable to use for minute validation
//        var mins = new Date();
//
//        //if the seconds equal to 0, then store the values to the db
//        if (mins.getMinutes == 5) {
//            console.log("Write to database")
//
//            console.log(input);
//            var DataRecord = new stockRoomTempModel({
//                temperature: input + "°C"
//            });
//            DataRecord.save(function (err, DataRecord) {
//                    if (err) {
//                        return console.error(err);
//                    }
//            }, 100000);
//        }
////    });
//});
    
    setInterval(function () {
        
            console.log("=====got data=====")
            console.log("TEMP: " + temp)
            var DataRecord = new stockRoomTempModel({
                temperature: temp + "°C"
            });
            DataRecord.save(function (err, DataRecord) {
                    if (err) {
                        return console.error(err);
                    }
            }, 100000);
    }, 10000)
    


});

              
             