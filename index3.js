let alas;
let tinggi;
let hasil;

let sisiA;
let sisiB;
let sisiC;


document.getElementById("tombol1").onclick = function(){
    alas = document.getElementById("alas").value;
    tinggi = document.getElementById("tinggi").value;

    alas = Number(alas);
    tinggi = Number(tinggi);

    hasil = 1/2 * (alas * tinggi);

    document.getElementById("h1").innerHTML = "Luasnya adalah " + hasil;

}

document.getElementById("tombol2").onclick = function(){
    sisiA = document.getElementById("sisiA").value;
    sisiB = document.getElementById("sisiB").value;
    sisiC = document.getElementById("sisiC").value;

    sisiA = Number(sisiA);
    sisiB = Number(sisiB);
    sisiC = Number(sisiC);

    hasil = sisiA + sisiB + sisiC;

    document.getElementById("h2").innerHTML = "Kelilingnya adalah " + hasil;
}

