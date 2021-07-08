song="";
song1="";
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist=0;
scoreRightWrist=0;
leftWristX = 0;
leftWristY = 0;
song_status="";
song1_status="";

function preload(){

	song=loadSound("music.mp3");
	song1=loadSound("music2.mp3");

}
function setup(){

	canvas=createCanvas(600,500);
	canvas.center();

	video= createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	  console.log(results);
	  
	  scoreRightWrist =  results[0].pose.keypoints[10].score;
	  scoreLeftWrist =  results[0].pose.keypoints[9].score;
	  console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);

	scoreRightWrist =  results[0].pose.keypoints[10].score;
	console.log(" scoreRightWrist = " + scoreRightWrist);

	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		
  }
}
function draw(){

image(video,0,0,600,500);


if(rightWristY >0 && rightWristY <= 400)
		{
			document.getElementById("speed").innerHTML = "Song name: Harry Potter";		
			song1.stop();
			song.play();
		}
		else if(leftWristY >0 && leftWristY <= 400)
		{
			document.getElementById("speed").innerHTML = "Song name: Peter Pan";		
			song.stop();
			song1.play();
		}
}
