//SELECTED ELEMENTS INSIDE VARIABLES
const button = document.querySelector("#addButton");
const input = document.querySelector("#addItemField");
const ul = document.querySelector("#shoppingList");
let li;
let removeButton;

// Counts input length
function inputLength() {
    return input.value.length;
}

// Create list Item
function createListItem() {
    li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value + " "));
    ul.appendChild(li);
    input.value = "";

    // add random color to new list item
    li.style.backgroundColor = getRandColor(0.2);

    // add .done class to element with click
    li.addEventListener("click", doneListItem);

    // add remove button at the end of the line
    li.appendChild(createRemoveButton());

    // remove the list item with click
    removeButton.addEventListener("click", removeItem);
}

// .done named class creator with toggle
function doneListItem() {
    this.classList.toggle("done");

    // first click - white background
    // second click - random color background
    if (this.className === "done") {
        this.style.backgroundColor = "white";
    } else {
        this.style.backgroundColor = getRandColor(0.2);
    }
}

// Remove button creator
function createRemoveButton() {
    removeButton = document.createElement("button");
    removeButton.appendChild(document.createTextNode("-"));
    return removeButton;
}

// Add new List item with click
function addWithClick() {
    if (inputLength() !== 0) {
        createListItem();
    }
}

// Add new List item with enter
function addWithEnter(event) {
    if (event.keyCode === 13 && inputLength() !== 0) {
        createListItem();
    }
}

// Remove chosen item
function removeItem() {
    this.parentNode.remove();
}

// Random rgba color creator
function getRandColor(opacity) { //insert number between 0-1 to adjust opacity
    let rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
    let rgba = "rgba(" + rgb.join(",") + "," + opacity + ")";
    return rgba;
}


button.addEventListener("click", addWithClick);
input.addEventListener("keydown", addWithEnter);