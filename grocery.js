//go
function goToGroceryList() {
window.location.href = "../grocery.html"
}

function goHome() {
    window.location.href = '../1mainpage.html'
}

function goToFridge() {    
    window.location.href = '../fridge.html'
}

const input = document.getElementById('autoSaveInput');

//add function
function add() {
    var userInput = document.getElementById('input').value;
    if (userInput) {
        var listItem = document.createElement('li');
        listItem.textContent = userInput;
        document.getElementById('output').appendChild(listItem);
        document.getElementById('input').value = '';
        
        listItem.addEventListener('mouseenter', () => {
            listItem.classList.add('hover-highlight'); 
        });
        listItem.addEventListener('mouseleave', () => {
            listItem.classList.remove('hover-highlight'); 
        });
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('highlighted');
            listItem.classList.remove('hover-highlight'); 
            listItem.remove();
            saveList();
        });
            saveList()
     }
}

function saveList(){
    var listItems = document.querySelectorAll('#output li');
        var itemsArray = [];
        listItems.forEach(item => {
            itemsArray.push({
                text: item.textContent,
                highlighted: item.classList.contains('highlighted')
            });
        });
        localStorage.setItem('listItems', JSON.stringify(itemsArray));
    }

function loadList() {
    var savedItems = localStorage.getItem('listItems');
    if (savedItems) {
        var itemsArray = JSON.parse(savedItems);
        itemsArray.forEach(itemData => {
            var listItem = document.createElement('li');
            listItem.textContent = itemData.text;
            if (itemData.highlighted) {
                listItem.classList.add('highlighted');
            }
            document.getElementById('output').appendChild(listItem);

            listItem.addEventListener('mouseenter', () => {
                listItem.classList.add('hover-highlight'); 
            });
            listItem.addEventListener('mouseleave', () => {
                listItem.classList.remove('hover-highlight'); 
            });
            
            // Toggle permanent highlight on click
            listItem.addEventListener('click', () => {
                listItem.classList.toggle('highlighted');
                listItem.classList.remove('hover-highlight');
                listItem.remove();
                saveList();
            });
                saveList();
        });
    }
}

// Load the list from local storage when the page loads
window.onload = loadList;

function reset(){
  
    localStorage.removeItem('listItems');

    var outputList = document.getElementById('output');
    while (outputList.firstChild) {
        outputList.removeChild(outputList.firstChild);
    }
}
