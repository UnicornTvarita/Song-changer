function setup(){
c1 = createCanvas(500,400)
c1.center()
b1 = createCapture(VIDEO)
b1.hide()
pn = ml5.poseNet(b1,modelLoaded)
pn.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("Your model is loaded✌🏻🦄")
}
song =""
song2 = ""
lwx = 0
lwy = 0
rwx = 0
rwy = 0
confidenceR = 0 
confidenceL =  0
song1status = ""
song2status = ""

function gotPoses(results){
    if(results.length > 0 ){
console.log(results)
lwx = results[0].pose.leftWrist.x
lwy = results[0].pose.leftWrist.y
rwx = results[0].pose.rightWrist.x
rwy = results[0].pose.rightWrist.y
confidenceR = results[0].pose.keypoints[10].score
confidenceL = results[0].pose.keypoints[9].score
    }
}
function draw(){
    image (b1,0,0,500,400)
    fill ("blue")
song1status = song.isPlaying()
song2status = song2.isPlaying()
if(confidenceL > 0.2){
    circle (lwx,lwy,30)
    song.stop()
if(song2status == false){
 song2.play()
 document.getElementById("songname").innerHTML = "Peter Pan is playing✌🏻✌🏻🎶🎶"
}
}
if(confidenceR > 0.2){
    circle (rwx,rwy,30)
    song2.stop()
    if(song1status == false){
        song.play()
        document.getElementById("songname").innerHTML = "Harry potter is playing ✌🏻🎶"
    }
}
}

function preload(){
song=loadSound("music.mp3")
song2 = loadSound("music2.mp3")
}
function play(){
    song.play()
}
