const pi = 3.14159;
let radius;
let hasil;

document.getElementById("tombol1").onclick = function(){

    radius = document.getElementById("radius").value;

    radius = Number(radius);

    hasil = pi * (radius * radius);

    document.getElementById("h1").innerHTML = "Luasnya adalah = " + hasil;
}

document.getElementById("tombol2").onclick = function(){

    radius = document.getElementById("radius22").value;

    radius = Number(radius);

    hasil = 2 * pi * radius;

    document.getElementById("h2").innerHTML = "Kelilingnya adalah = " + hasil;
}
