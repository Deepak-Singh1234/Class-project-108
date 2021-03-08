prediction1="";
prediction2="";

Webcam.set({
width : 350,
height : 350,
image_format : 'jpg',
jpg_quality : 100

});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function deepak(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src = "'+data_uri+'" >';
    });
}

console.log('ml5.version' , ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZBOKUuuMI/model.json' , modelLoaded);

function modelLoaded(){
console.log("Deepak's internet speed is never good at any plae in the world , even honk kong !");

}

function deepak1() {
    dbs = document.getElementById('captured_image');
    classifier.classify(dbs, gotResult);
}

function speak(){
var synth =  window.speechSynthesis;
speakdata1 = "the first prediction is " + prediction1;
speakdata2 = "the first prediction is " + prediction2;
var utterThis = new SpeechSynthesisUtterance(speakdata1 + speakdata2);
synth.speak(utterThis);

}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
  else {
console.log(results);
document.getElementById("result_emotion_name").innerHTML = results[0].label;
document.getElementById("result_emotion_name2").innerHTML = results[1].label;
prediction1 = results[0].label;
prediction2 = results[1].label;
speak();
if(results[0].label == "happy")
{
    document.getElementById("update_emoji").innerHTML = "&#128516;";
}
if(results[0].label == "sad")
{
    document.getElementById("update_emoji").innerHTML = "&#128534;";
}
if(results[0].label == "angry")
{
    document.getElementById("update_emoji").innerHTML = "&#128545;";
}

if(results[1].label == "happy")
{
    document.getElementById("update_emoji2").innerHTML = "&#128516;";
}
if(results[1].label == "sad")
{
    document.getElementById("update_emoji2").innerHTML = "&#128534;";
}
if(results[1].label == "angry")
{
    document.getElementById("update_emoji2").innerHTML = "&#128545;";
}
     }
         }
