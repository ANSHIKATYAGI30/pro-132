img = "";
status = "";
function preload() {
    img = loadImage("ac_img.jpg");
}

function setup() {
    canvas = createCanvas(380 , 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380 , 380);
    video.hide();
objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting objects";
objectDetector.detect(video , gotResult);
}

function modelLoaded() {
    console.log("Model Loaded!");
}

function gotResult(error , results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
    }
    
