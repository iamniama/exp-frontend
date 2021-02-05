window.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector("h1").textContent = document.querySelector("h1").textContent + "!!!!"
})

document.querySelector("#hdr"),addEventListener("click", (evt)=>{
    if (evt.target.id == "hdr") {
        document.querySelector("#test-text").innerHTML = document.querySelector("#test-text").innerHTML + "<br />New Text arrives!"
    }else if (evt.target.id =="prophet") {
        document.querySelector("#test-text").innerHTML = `Welcome to ${document.querySelector("h1").textContent}`
    }
})