let skinSelectorLeft = document.querySelectorAll(".skin-left");
let eyeSelectorLeft = document.querySelectorAll(".eye-left");
let mouthSelectorLeft = document.querySelectorAll(".mouth-left");
let skinCard = document.getElementById("skin-card");
let eyeCard = document.getElementById("eye-card");
let mouthCard = document.getElementById("mouth-card");
let skinRightPtr = document.getElementById("right-pointer-skin");
let eyeLeftPtr = document.querySelector("div#eye-card .left-pointer");
let eyeRightPtr = document.getElementById("right-pointer-eye");
let mouthLeftPtr = document.querySelector("div#mouth-card .left-pointer");
let skin = document.getElementById("skin");
let eye = document.getElementById("eyes");
let mouth = document.getElementById("mouth");
let skinSources = ["images/skin/yellow.png","images/skin/red.png","images/skin/green.png"];
let eyeSources = ["images/eyes/closed.png","images/eyes/laughing.png","images/eyes/long.png","images/eyes/normal.png","images/eyes/rolling.png","images/eyes/winking.png"];
let mouthSources = ["images/mouth/open.png","images/mouth/sad.png","images/mouth/smiling.png","images/mouth/straight.png","images/mouth/teeth.png"]
for(let i=0;i<skinSelectorLeft.length;i++)
{
    skinSelectorLeft[i].addEventListener("click",function(){
        skin.style.display = "block";
        skin.src = skinSources[i];
        skinCard.style.display="none";
        eyeCard.style.display="block";
    });
}
for(let i=0;i<eyeSelectorLeft.length;i++)
{
    eyeSelectorLeft[i].addEventListener("click",function(){
        eye.style.display = "block";
        eye.src = eyeSources[i];
        eyeCard.style.display="none";
        mouthCard.style.display="block";
    });
}
for(let i=0;i<mouthSelectorLeft.length;i++)
{
    mouthSelectorLeft[i].addEventListener("click",function(){
        mouth.style.display = "block";
        mouth.src = mouthSources[i];
        mouthCard.style.display="none";
        skinCard.style.display="block";
    });
}
skinRightPtr.addEventListener("click",function(){
    skinCard.style.display="none";
    eyeCard.style.display="block";
});
eyeLeftPtr.addEventListener("click",function(){
    skinCard.style.display="block";
    eyeCard.style.display="none";
});
eyeRightPtr.addEventListener("click",function(){
    eyeCard.style.display="none";
    mouthCard.style.display="block";
});
mouthLeftPtr.addEventListener("click",function(){
    mouthCard.style.display="none";
    eyeCard.style.display="block";
});
