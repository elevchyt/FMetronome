// Starting state of the metronome (not playing)
var active = false;

// Tempo (BPM)
var bpm = document.getElementById("bpm").value;

// LOAD AUDIO

// Sound Samples
var audioFile1 = "metronome.mp3";
var audioFile2 = "shaker.mp3";
var audioFile3 = "rim.mp3";
var audioFile4 = "stick.mp3";
var currentAudioFile = audioFile1;

// Load Audio Files
var audio1 = new Audio(currentAudioFile);
var audio2 = new Audio(currentAudioFile);
var audio3 = new Audio(currentAudioFile);
var audio4 = new Audio(currentAudioFile);
var audio5 = new Audio(currentAudioFile);
var audio6 = new Audio(currentAudioFile);
var audio7 = new Audio(currentAudioFile);
var audio8 = new Audio(currentAudioFile);



// Function executed upon Play/Stop
function metronomePress()
{   
    bpm = document.getElementById("bpm").value;
    console.log("Current BPM: " + bpm);
    
    // Play/Stop
    if (active == false && bpm > 20)
    {
        active = true;
        document.getElementById("metronomeButton").innerHTML="STOP";
    } else 
    {
        active = false;
        clearInterval(loop); // used to stop interval (loop)
        document.getElementById("metronomeButton").innerHTML="PLAY";
    }
    
    // Loop beat with equal intervals based on chosen BPM (beats-per-minute) (60000: ms in a minute)
    if (active == true)
    {
        // Chooses which audio to play for each beat to avoid problems with audio overlap! (Initialize values)
        currentAudio1 = true;
        currentAudio2 = false;
        currentAudio3 = false;
        currentAudio4 = false;
        currentAudio5 = false;
        currentAudio6 = false;
        currentAudio7 = false;
        currentAudio8 = false;
        loop = setInterval(function(){loopBeat()}, (60000 / bpm));
    }
}


// Function that loops when the metronome is active (playing)    
function loopBeat()
{   
    // Choose sound sample based on dropdown selection
    if (document.getElementById("soundsDropdown").value == "Metronome")
    {
        currentAudioFile = audioFile1;
    } else if (document.getElementById("soundsDropdown").value == "Shaker")
    {
        currentAudioFile = audioFile2;
    } else if (document.getElementById("soundsDropdown").value == "Rim")
    {
        currentAudioFile = audioFile3;
    } else if (document.getElementById("soundsDropdown").value == "Stick")
    {
        currentAudioFile = audioFile4;
    }
    
    // Load Audio Files
    audio1 = new Audio(currentAudioFile);
    audio2 = new Audio(currentAudioFile);
    audio3 = new Audio(currentAudioFile);
    audio4 = new Audio(currentAudioFile);
    audio5 = new Audio(currentAudioFile);
    audio6 = new Audio(currentAudioFile);
    audio7 = new Audio(currentAudioFile);
    audio8 = new Audio(currentAudioFile);
    
    // Serialize audio to avoid overlapping issues
    if (currentAudio1 == true)
    {
        audio1.play(); 
        currentAudio1 = false;
        currentAudio2 = true;
        currentAudio3 = false;
        currentAudio4 = false;
        currentAudio5 = false;
        currentAudio6 = false;
        currentAudio7 = false;
        currentAudio8 = false;
        console.log("audio1");
    } else if (currentAudio2 == true)
    {
        audio2.play(); 
        currentAudio1 = false;
        currentAudio2 = false;
        currentAudio3 = true;
        currentAudio4 = false;
        currentAudio5 = false;
        currentAudio6 = false;
        currentAudio7 = false;
        currentAudio8 = false;
        console.log("audio2");
    } else if (currentAudio3 == true)
    {
        audio3.play(); 
        currentAudio1 = false;
        currentAudio2 = false;
        currentAudio3 = false;
        currentAudio4 = true;
        currentAudio5 = false;
        currentAudio6 = false;
        currentAudio7 = false;
        currentAudio8 = false;
        console.log("audio3");
    } else if (currentAudio4 == true)
    {
        audio4.play();  
        currentAudio1 = false;
        currentAudio2 = false;
        currentAudio3 = false;
        currentAudio4 = false;
        currentAudio5 = true;
        currentAudio6 = false;
        currentAudio7 = false;
        currentAudio8 = false;
        console.log("audio4");
    } else if (currentAudio5 == true)
    {
        audio5.play();  
        currentAudio1 = false;
        currentAudio2 = false;
        currentAudio3 = false;
        currentAudio4 = false;
        currentAudio5 = false;
        currentAudio6 = true;
        currentAudio7 = false;
        currentAudio8 = false;
        console.log("audio5");
    } else if (currentAudio6 == true)
    {
        audio6.play();  
        currentAudio1 = false;
        currentAudio2 = false;
        currentAudio3 = false;
        currentAudio4 = false;
        currentAudio5 = false;
        currentAudio6 = false;
        currentAudio7 = true;
        currentAudio8 = false;
        console.log("audio6");
    } else if (currentAudio7 == true)
    {
        audio7.play();  
        currentAudio1 = false;
        currentAudio2 = false;
        currentAudio3 = false;
        currentAudio4 = false;
        currentAudio5 = false;
        currentAudio6 = false;
        currentAudio7 = false;
        currentAudio8 = true;
        console.log("audio7");
    } else if (currentAudio8 == true)
    {
        audio8.play();  
        currentAudio1 = true;
        currentAudio2 = false;
        currentAudio3 = false;
        currentAudio4 = false;
        currentAudio5 = false;
        currentAudio6 = false;
        currentAudio7 = false;
        currentAudio8 = false;
        console.log("audio8");
    }
}