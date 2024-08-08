

const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color
};

let intevalId;

const startChangingColor = () => {
    if(!intevalId) {
        intevalId = setInterval(cangeBgColor, 1000);
    }

    function cangeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = () => {
    clearInterval(intevalId)
    intevalId = null;
}

document.getElementById('start').addEventListener('click', startChangingColor)
document.getElementById('stop').addEventListener('click', stopChangingColor)