let todoList = document.getElementById('todo-list');
let newItem = document.getElementById('new-item');

function addItem() {
	if (newItem.value != '') {
		let li = document.createElement('li');
		li.innerHTML = newItem.value;
		li.addEventListener('click', removeItem);
		todoList.appendChild(li);
		newItem.value = '';
	}
}

function removeItem() {
	this.parentNode.removeChild(this);
}