function animals(ward){
    var animals= ["images/kelly.JPG", "images/ian3.JPG", "images/aleya44.jpg", "images/Qantu2.JPG"];
    var i = Math.floor(Math.random()*animals.length);
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",animals[i]);
}
