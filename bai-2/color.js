function getRandomColor() {
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    let maHexa = document.getElementsByClassName("ma-hexa");
    maHexa[0].innerHTML = color;
    let container = document.getElementsByClassName("container");
    container[0].style.backgroundColor = color;
}
