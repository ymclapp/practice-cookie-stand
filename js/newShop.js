var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);


function addItem(e) {
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));                                                                                                                            
    // console.log(newItem);

    // var deleteBtn = document.createElement('button');
    // deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // deleteBtn.appendChild(document.createTextNode('X'));
    // li.appendChild(deleteBtn);
    itemList.appendChild(li);
};



