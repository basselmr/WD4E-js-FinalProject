/*Name this external file gallery.js*/
document.addEventListener("DOMContentLoaded", function() {
    var parent = document.querySelectorAll('.images-container img');

    
    for (var i = 0; i < parent.length; i++) {
    console.log(parent[i])
    parent[i].setAttribute("tabindex", (i+1).toString());
    }
  });
function upDate(previewPic){
    const c=document.querySelector("#image")
    c.innerHTML = previewPic.alt
    c.style.backgroundImage = `url(${previewPic.src})`;
    }
function unDo(){
    const c=document.querySelector("#image")
    c.innerHTML = "Hover over an image below to display here.";
    c.style.backgroundImage = "";
    }