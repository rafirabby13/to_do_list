const inputBox = document.getElementById('input-box');

const listContainer = document.getElementById('list-container');

function addTask() {

    if (inputBox.value == '') {

       alert('Please enter a task');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = 'X';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData()
    
    
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName == 'SPAN') {
        const confirmation = confirm('Are you sure you want to delete this task?');
        if (confirmation){

            e.target.parentElement.remove();
            saveData()
        }
        else {
            return;
        }
    }

    if (e.target.tagName == 'LI') {
        e.target.classList.toggle("checked")
        saveData()
    }

})


function saveData() {
    localStorage.setItem('listContainer', listContainer.innerHTML);
    
}

function showList() {
    listContainer.innerHTML = localStorage.getItem('listContainer');
    
}
showList() 