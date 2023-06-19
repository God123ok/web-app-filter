function preload() {

}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

}

function gotPoses(results)
{
    if(results.Length > 0)
    (results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
    }
}