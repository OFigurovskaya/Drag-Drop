let item = document.querySelector('.item');
let elements = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('none'), 0);
}

function dragend(event) {
    event.target.className = 'item';
}

for (let elem of elements) {
    elem.addEventListener('dragover', dragover);
    elem.addEventListener('dragenter', dragenter);
    elem.addEventListener('dragleave', dragleave);
    elem.addEventListener('drop', dragdrop);
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add('hovered');
}

function dragleave(event) {
    event.target.classList.remove('hovered');
}

function dragdrop(event) {
    event.target.append(item);
    event.target.classList.remove('hovered');
}