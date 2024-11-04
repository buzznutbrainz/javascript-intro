secret.addEventListener('click',function(){
    alert("time to take a nap");


})
light_on.addEventListener('click',function(){
    console.log("let there be light");
    document.getElementById("lightbulb").src="lightbulb_on.webp";


})

light_off.addEventListener("click",function(){
    console.log("goodnight");
    document.getElementById("lightbulb").src="lightbulb_off.webp";

})

//When the user clicks the 'light_on' button, change the 'lightbulb' image to show the lightbulb on 