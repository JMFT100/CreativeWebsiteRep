console.log("Hello World")

let btns = document.querySelectorAll('button');

btns.forEach (btn => {
    btn.addEventListener('click', f);
})

function f(ev){
    let id = ev.currentTarget.id;
    let btn = document.getElementById(id);

    console.log(btn.innerHTML);


    //Obtaining the info from the buttons
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdPRidwoEWZM3LXNZ6l3WxeUQsjpgdcX_H1PJLDVIpwl82G5w/formResponse";
    const entryID = "entry.410839760"; 

    const data = new FormData();
    data.append(entryID, btn.innerHTML);

    fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        keepalive: true,
        body: data
    });

    if(btn.innerHTML == "Dinner Date"){
        window.location.href = "Dinner.html"; 
    }
    else{
        window.location.href = "page3.html";
    }
}
