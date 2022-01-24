function dall() {
    document.getElementsByClassName('todolist')[0].childNodes[1].remove();
    //y = xmlDoc.getElementsByTagName("ul")[1];
    //xmlDoc.documentElement.removeChild(y);
    alert("OPeration done");
}

function del() {
    document.getElementsByClassName('todolist')[0].childNodes[1].childNodes[1].remove();
    alert("hello from 2");
    const parentList = document.querySelector('ul');
    const child = document.createElement('li');
    child.textContent = 'Go to payment';
    parentList.appendChild(child);
    alert("OPeration done");
}

function change_node() {
    document.getElementById('list3').innerHTML = "<a onclick='change_node()' href='#'>Changed node</a>";
}

function ass_node() {

    const parentList = document.querySelector('ul');
    const child = document.createElement('li');
    child.textContent = "Go to payment";
    parentList.appendChild(child);
    alert("OPeration done");

}