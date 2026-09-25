let x = 1;

function changeSize(){
    x = x + 0.15; 
    document.getElementById("Yes").style.scale = x;
    

    if (document.getElementById("Changer").innerHTML == "It'll be a fun date!"){
        document.getElementById("Changer").innerHTML = "Why nooootttt";
        document.getElementById("image").src = "images/please-eyes.jpg"
    }
    else if(document.getElementById("Changer").innerHTML == "Why nooootttt"){
        document.getElementById("Changer").innerHTML = "I swear it'll be incredibleeeeee";
        document.getElementById("image").src = "images/happy-cat.jpg"
    }
    else if(document.getElementById("Changer").innerHTML == "I swear it'll be incredibleeeeee"){
        document.getElementById("Changer").innerHTML = "Cmoooonnnn just give it a goooooo";
        document.getElementById("image").src = "images/begging-cat.jpg"
    }
    else if(document.getElementById("Changer").innerHTML == "Cmoooonnnn just give it a goooooo"){
        document.getElementById("Changer").innerHTML = "Why do you keep pressing no...";
        document.getElementById("image").src = "images/sad-cat.jpg"
    }
    else{
        document.getElementById("Changer").innerHTML = "Damn... just please say yes... :'(";
        document.getElementById("image").src = "images/saddest-cat.gif"

    }

}