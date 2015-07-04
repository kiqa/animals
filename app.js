function animals(){
    var animals= ["images/kelly.JPG", "images/ian3.JPG", "images/aleya44.jpg", "images/Qantu2.JPG"];
    var i = Math.floor(Math.random()*animals.length);
    var payaso = document.getElementById("nariz");
    payaso.setAttribute("src",animals[i]);
}
function fruit(){
	alert("hi");
}
