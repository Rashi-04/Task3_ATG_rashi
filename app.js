let btn = document.querySelector(".btn");

btn.onclick = function(){

    loadImg = document.createElement("img");
    loadImg.src = "load.png";

    var space = document.createTextNode(" ");
    btn.insertBefore(space, btn.firstChild);
    btn.insertBefore(loadImg, btn.firstChild);
    setTimeout(() => {
        this.disabled = true;
        loadImg.remove();
        space.remove();
        
    }, 2000);
    
};