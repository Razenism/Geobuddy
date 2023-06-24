let panjang;
let lebar;

let hasil;

document.getElementById("tombol").onclick = function(){
    panjang = document.getElementById("panjang").value;
    lebar = document.getElementById("lebar").value;

    panjang = Number(panjang);
    lebar = Number(lebar);

    hasil = panjang * lebar;

    document.getElementById("h1").innerHTML = "Luasnya adalah " + hasil;
}

document.getElementById("tombol22").onclick = function(){
    panjang = document.getElementById("panjang22").value;
    lebar = document.getElementById("lebar22").value;

    panjang = Number(panjang);
    lebar = Number(lebar);

    hasil = 2 * (panjang + lebar);

    document.getElementById("h2").innerHTML = "Kelilingnya adalah " + hasil;
}


