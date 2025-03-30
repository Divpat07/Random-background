function updateBG(){
            const r = document.getElementById('red').value;
            const g = document.getElementById('green').value;
            const b = document.getElementById('blue').value;
            document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
function random(){
    document.getElementById('red').value = Math.floor(Math.random() * 256);
    document.getElementById('green').value = Math.floor(Math.random() * 256);
    document.getElementById('blue').value = Math.floor(Math.random() * 256);
    updateBG();
}
bgColor();