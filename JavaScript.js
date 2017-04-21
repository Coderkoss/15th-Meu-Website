
var backgrounds = ["images/background/Image0",
                           "images/background/Image01",
                           "images/background/Image02",
                           "images/background/Image03",
                           "images/background/Image04",
                           "images/background/Image05",
                           "images/background/Image06",
                           "images/background/Image07",
                           "images/background/Image08",
                           "images/background/Image09",
                           "images/background/Image10",
                           "images/background/Image11",
                           "images/background/Image12",
                           "images/background/Image13",
                           "images/background/Image14",
                           "images/background/Image15",
                           "images/background/Image16",
                           "images/background/Image17",
                           "images/background/Image18",
                           "images/background/Image19",
                           "images/background/Image20",
                           "images/background/Image21",
                           "images/background/Image22",
                           "images/background/Image23",
                           "images/background/Image24",
                           "images/background/Image25", ]
function randomBackgroundImage(){
    var rand = Math.floor((Math.random() * 25) + 1);

    var randToString = rand.toString();
    var fixFilePath = "url(" + backgrounds[rand] +".jpg)"; 
   

    // if(!fileExists(fixFilePath)){
    // 	fixFilePath = "url(" + backgrounds[rand] +".png)"; 
    // }
 
    
    var x = document.getElementsByClassName("fullScreen-bg-img");
    x[0].style.backgroundImage = fixFilePath;
}
// function fileExists(file_url){
// 	var http = new XMLHttpRequest();

// 	http.open('BODY',file_url,false);
// 	http.send();

// 	if(http.status == "404"){
// 		return false;
// 	}else{
// 		return true;
// 	}
// }
