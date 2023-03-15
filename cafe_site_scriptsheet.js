var fullImgBox = document.getElementById("fullImgBox")
var fullImg = document.getElementById("fullImg")

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
} 

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
