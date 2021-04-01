var l = document.getElementsByClassName("horizontal-list");
var items = l[0].children;
var currPos = 0;
var targetPos = 0;

var scroll = function(currPos, targetPos){
    var scrollInterval = setInterval(function(){
        if(currPos >= targetPos){
            clearInterval(scrollInterval);
            return;
        }
        currPos += 50;
        window.scrollBy(0, 50);
    }, 20);
}    
    

for(let i = 0; i<items.length; i++){
    items[i].addEventListener('click', function(event){
        event.preventDefault();
        var clicked_item = this.getAttribute("data-name");
        if(clicked_item == "about"){
            targetPos = document.getElementById("about").getBoundingClientRect().top;
            scroll(currPos, targetPos);
        } else if(clicked_item == "skills"){
            targetPos = document.getElementById("skills").getBoundingClientRect().top;
            scroll(currPos, targetPos);
        } else if(clicked_item == "experience"){
            targetPos = document.getElementById("experience").getBoundingClientRect().top;
            scroll(currPos, targetPos);
        } else if(clicked_item == "education"){
            targetPos = document.getElementById("education").getBoundingClientRect().top;
            scroll(currPos, targetPos);
        } else if(clicked_item == "portfolio"){
            targetPos = document.getElementById("portfolio").getBoundingClientRect().top;
            scroll(currPos, targetPos);
        } else if(clicked_item == "contact"){
            targetPos = document.getElementById("contact").getBoundingClientRect().top;
            scroll(currPos, targetPos);
        }
    });
}


var skillSection = document.getElementById("technologies");
var progressBar = document.querySelectorAll(".skill-progress  div");

function intialiseWidth(bar){
    bar.style.width = 0 + "%";
}
function fillBars(bar){
    let maxWidth = bar.getAttribute("data-level");
    let currWidth = 0;
    let intervalIncrease = setInterval(function(){
        if(currWidth >= maxWidth){
            clearInterval(intervalIncrease);
            return;
        }
        currWidth++;
        bar.style.width = currWidth + "%";
    }, 3);
 }

function checkScroll(){
    for(let bar of progressBar){
        let barTop =  bar.getBoundingClientRect().top;
        let animationDone = bar.getAttribute("data-animation");
        if(barTop <= window.innerHeight && animationDone == "false"){
            fillBars(bar);
            bar.setAttribute("data-animation", "true");
        } else if(barTop > window.innerHeight){
            bar.setAttribute("data-animation", "false");
            intialiseWidth(bar);
        }
    }
}

window.addEventListener('scroll', checkScroll);
