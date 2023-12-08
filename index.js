const count = document.querySelector('#counter');

const increment = () => {
    let value = parseInt(count.innerText);
    value++;
    count.innerText = value;
};

const decrement = () => {
    let value = parseInt(count.innerText);
    value--;
    count.innerText = value;
};