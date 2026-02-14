const form = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clear = document.getElementById("clear");
const filter = document.getElementById("filter");




function addItem(event) 
{
    event.preventDefault();
    let newItem = itemInput.value
    console.log(newItem);

    const li = document.createElement("li");
    const button = document.createElement("button");
    const icon = document.createElement("i");

    li.appendChild(document.createTextNode(newItem));
    
    button.classList = "remove-item btn-link text-red";
    icon.classList = "fa-solid fa-xmark";

    button.appendChild(icon);
    li.appendChild(button);

    itemList.appendChild(li);

    itemInput.value = "";
    
}

function removeAllItems() 
{
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

function removeItem(event) 
{
    
    if (event.target.parentElement.classList.contains("remove-item")) {
        event.target.parentElement.parentElement.remove();
    }
} 

function filterItems(event)
{
    let text = event.target.value.toLowerCase()
    let items= document.querySelectorAll("li");
    items.forEach((item) => {
        let itemName = item.firstChild.textContent.toLowerCase().trim();
        if (itemName.includes(text)) 
        {
            item.style.display = "block";
        } 
        else 
        {
            item.style.display = "none";
        }
    })    
}
form.addEventListener("submit", addItem);
clear.addEventListener("click", removeAllItems);
itemList.addEventListener("click", removeItem);
filter.addEventListener("input", filterItems);