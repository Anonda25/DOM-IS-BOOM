const table = document.getElementById('tables');

document.getElementById('task-btn').addEventListener('click', function () {
    const inputValue = document.getElementById('input-value').value;
    // const table = document.getElementById('tables');

    const li = document.createElement('li');
    li.innerText = inputValue;

    table.appendChild(li);

    document.getElementById('input-value').value = '';


});

const inputValue = document.getElementById('input-value').addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        const inputValue = document.getElementById('input-value').value;

        const li = document.createElement('li');
        li.innerText = inputValue;
        table.appendChild(li)
        document.getElementById('input-value').value = '';
    }
   
    
})




document.getElementById('clear-btn').addEventListener('click', function(){

    const removingLi = document.getElementById('content-container');
    removingLi.nextSibling.remove();
})


