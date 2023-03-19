Xnose = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function modelLoaded() {
    console.log("ModelLoaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        wristx = results[0].pose.leftWrist.x;
        wristy = results[0].pose.leftWrist.x;
        dif = wristx - wristy
    }
}
function draw(){
    background("#D3D3D3");
    textSize(dif);
    text("Text can be changed by changing position of wrist ");
}