var btnAddItem = document.getElementById("btnAddItem");
var inputTitle = document.getElementById("item-title");
var inputDescription = document.getElementById("item-description");

function itemState() {
    var listActive = "list-active";
    var listDisabled = "list-disabled";
    
    if (this.parentElement.className === listActive) {
        this.parentElement.classList.remove(listActive);
        this.parentElement.classList.add(listDisabled);
        this.nextSibling.style.textDecoration = "line-through";
        this.nextSibling.nextSibling.style.textDecoration = "line-through";
    }
    else if (this.parentElement.className === listDisabled) {
        this.parentElement.classList.remove(listDisabled);
        this.parentElement.classList.add(listActive);
        this.nextSibling.style.textDecoration = "none";
        this.nextSibling.nextSibling.style.textDecoration = "none";
    };
};

function toggleDescription() {
    var descriptionOn = "description-on";
    var descriptionOff = "description-off";
    
    if (this.lastChild.className === descriptionOff) {
        this.lastChild.classList.remove("description-off");
        this.lastChild.classList.add("description-on");
    } else if (this.lastChild.className === descriptionOn) {
        this.lastChild.classList.remove("description-on");
        this.lastChild.classList.add("description-off");
    };
};

function addNewItem(list, inputTitleText, inputDescriptionText) {
    var newItem = document.createElement("li");
    var newCheckbox = document.createElement("input");
    var newTitle = document.createElement("span");
    var newDescription = document.createElement("p");
    var newDivList = document.getElementBy
    
    newItem.className = "list-active";
    newItem.ondblclick = toggleDescription;
    newItem.title = "Double click to view description";
    
    newCheckbox.type = "checkbox";
    newCheckbox.className = "style-checkbox";
    newCheckbox.onclick = itemState;
    
    newTitle.className = "title";
    newTitle.innerText = inputTitleText;
    
    newDescription.className = "description-off";
    newDescription.innerText = inputDescriptionText;
    
    newItem.appendChild(newCheckbox);
    newItem.appendChild(newTitle);
    newItem.appendChild(newDescription);
    list.appendChild(newItem);
};

inputTitle.select();

btnAddItem.onclick = function() {
    var inputTitleText = inputTitle.value;
    var inputDescriptionText = inputDescription.value;
    if (inputTitleText == "" || inputTitleText == " ") {
        return false;
    }
    addNewItem(document.getElementById("unordered-list"), inputTitleText, inputDescriptionText);
    inputTitle.select();
};