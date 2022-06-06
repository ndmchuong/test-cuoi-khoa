function soChinhPhuong() {
    let a = Number(prompt("nhap so a:"));
    let b = Number(prompt("nhap so b:"));
    let result = [];
    let text = String(result);
    let ketQua;
    for (let i = a; i < b; i++) {
        ketQua = Math.pow(i, 2);
        if (ketQua >= a && ketQua <= b) {
            result.push(ketQua);
        }
    }
    let textResult = document.getElementsByClassName("result");
    textResult.innerHTML = text;
    console.log(result);
}