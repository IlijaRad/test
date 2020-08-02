function changeSVG(item){
    if (item.getAttribute("data") == "plus.svg") item.setAttribute("data", "close.svg")
    else item.setAttribute("data", "plus.svg");
}

function createButton(){
    let button = document.createElement('object');
    button.setAttribute("type","image/svg+xml");
    button.setAttribute("data","plus.svg");
    button.setAttribute("class","logo");
    return button;
}

let items = document.querySelectorAll("a");
items.forEach((item) => {
    let b = createButton();
    item.append(b)
    item.addEventListener('click', function (event) {
        let icon = event.target.firstChild;
        event.target.parentElement.classList.toggle('expanded');
        changeSVG(icon);
    }, false)
})
