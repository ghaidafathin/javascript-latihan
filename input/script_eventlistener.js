//Idealnya, HTML hanya menampilkan halaman, JavaScript memberi perilaku (behaviour)

// CHALLENGE 1
let tampilkan = document.getElementById("tampilkan");

tampilkan.addEventListener("click", function(){
    let inputNama = document.getElementById("inputNama");
    let nama = document.getElementById("nama");

    nama.innerHTML = "Hello, " + inputNama.value + "! Welcome :)";
});

// CHALLENGE 2
let tampilkanUmur = document.getElementById("tampilkanUmur");

tampilkanUmur.addEventListener("click", function(){
    let inputUmur = document.getElementById("inputUmur");
    let umur = document.getElementById("umur");

    let umurSekarang = Number(inputUmur.value);
    let umurTahunDepan = umurSekarang + 1;

    umur.innerHTML = "Umurmu sekarang " + umurSekarang + ". Umurmu tahun depan " + umurTahunDepan;
});

//CHALLENGE 3
let inputNamaUmur = document.getElementById("inputNamaUmur");

inputNamaUmur.addEventListener("click", function(){
    let nama = document.getElementById("inputNamaForm");
    let umur = document.getElementById("inputUmurForm");
    let hasilForm = document.getElementById("formSimple");

    let umurNumber = Number(umur.value);
    let status = "";

    if (umurNumber >= 18 ){
        status = "Kamu sudah dewasa";
    } else {
        status = "Kamu belum dewasa";
    };

    hasilForm.innerHTML = "Name, Last Name: " + nama.value + "<br>" + "Age: " + umurNumber + "<br>" + "Status: " + status;
});
