let sisi;
let hasil; 

document.getElementById("tombol1").onclick = function(){

    sisi = document.getElementById("sisi1").value;

    sisi = Number(sisi);

    hasil = sisi*sisi;

    document.getElementById("h1").innerHTML = "Luasnya adalah " + hasil;
}

document.getElementById("tombol2").onclick = function(){

    sisi = document.getElementById("sisiA2").value;

    sisi = Number(sisi);

    hasil = 4*sisi;

    document.getElementById("h2").innerHTML = "Kelilingnya adalah " + hasil;
}