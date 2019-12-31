var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){


document.querySelectorAll(".drum")[i].addEventListener("click",function (){
var but=this.innerHTML;
switchcase(but);
anni(but);

});
}
document.addEventListener("keypress",function(){
  switchcase(event.key);
anni(event.key);});
function switchcase(but){
  switch (but) {
      case "w":
         var audio=new Audio("sounds/tom-1.mp3");
         audio.play();
         break;
      case "a":
         var audio=new Audio("sounds/tom-2.mp3");
         audio.play();
         break;

       case "s":
          var audio=new Audio("sounds/tom-3.mp3");
          audio.play();
          break;

        case "d":
          var audio=new Audio("sounds/tom-4.mp3");
          audio.play();
          break;

        case "j":
          var audio=new Audio("sounds/crash.mp3");
          audio.play();
          break;

          case "k":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;

          case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;


           default: console.log("sorry");

}
}
function anni(event){
  var   evethappen=document.querySelector("."+event);
evethappen.classList.add("pressed");
setTimeout(function(){
evethappen.classList.remove("pressed");
},100);


}
