function addItem() {

    let currentText = document.getElementById('newItemText').value;
    let currentValue = document.getElementById('newItemValue').value;
    let node=document.createElement('option');
    let nodeText= document.createTextNode(currentText + currentValue);
    node.appendChild(nodeText);
    document.getElementById('menu').appendChild(node);

    currentText = document.getElementById('newItemText').value = '';
    currentValue = document.getElementById('newItemValue').value = '';
}