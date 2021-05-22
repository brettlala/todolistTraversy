const input = document.getElementById('todo-input');
const form = document.getElementById('todo');
const unoList = document.querySelector('ul');
let list = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputText = document.createElement('li');
    inputText.innerText = input.value;
    unoList.appendChild(inputText);
    input.value = '';
    storeTodo(inputText.innerText);
    
    })

function storeTodo(inputText) {
    list.push(inputText);
    console.log(list);
}    


unoList.addEventListener('click', (e) => {
        e.target.classList.toggle('completed');
    })


unoList.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    e.target.remove();
})
    

