// ====== TESTING ===== //
function tampilkanNama (){
    let user = document.getElementById("namaUser"); //buat variabel untuk input dari user
    let judul = document.getElementById("judul"); //buat variabel untuk judul

    judul.innerHTML = user.value; //mengganti nilai judul dengan value dari input user
}

//CHALLENGE 1
function submit1(){
    let inputNama = document.getElementById("inputNama");
    let masukkanNama = document.getElementById("masukkanNama");

    masukkanNama.innerHTML = "Halo, " + inputNama.value + "! " + "Welcome to our training page.";
}

//CHALLENGE 2
function submit2(){
    let inputUmur = document.getElementById("inputUmur"); 
    let masukkanUmur = document.getElementById("masukkanUmur");

    masukkanUmur.innerHTML = "Umurmu adalah " + inputUmur.value + " Tahun";
}

//CHALLENGE 3
function submit3(){
    let inputNamaBaru = document.getElementById("inputNamaBaru");
    let inputUmurBaru = document.getElementById("inputUmurBaru");

    let hasilBaru = document.getElementById("hasilBaru");

    hasilBaru.innerHTML = "Welcome, " + inputNamaBaru.value + "! Umurmu " + inputUmurBaru.value + " Tahun";
}