// ========== TESTING 1 ========= //
const tombol = document.getElementById("ubahWarna");

tombol.addEventListener("click", function(){
    const judul = document.getElementById("judul");

    judul.style.color = "blue";
});

// ========== CHALLENGE 1 ========= //
const tombolBiru = document.getElementById("tombolBiru");
const tombolMerah = document.getElementById("tombolMerah");
const judulSatu = document.getElementById("judulChallenge1");

tombolBiru.addEventListener("click", function (){
    judulSatu.style.color = "blue";
})
tombolMerah.addEventListener("click", function(){
    judulSatu.style.color = "red";
});

// ========== CHALLENGE 2 ========= //
const perbesar = document.getElementById("perbesar");
const perkecil = document.getElementById("perkecil");
const judulDua = document.getElementById("judulChallenge1");

perbesar.addEventListener("click", function(){
    judulDua.style.fontSize = "40px";
})
perkecil.addEventListener("click", function(){
    judulDua.style.fontSize = "20px";
});

// ========== CHALLENGE 3 ========= //
const tampilkan = document.getElementById("show");
const sembunyikan = document.getElementById("hidden");
const gambar = document.getElementById("gambar");
const ukuranGambar = document.getElementById("gambar");
ukuranGambar.style.height = "200px";
ukuranGambar.style.width = "220px";

tampilkan.addEventListener("click", function(){
    gambar.hidden = false;
})
sembunyikan.addEventListener("click", function(){
    gambar.hidden = true;
});

// ========== CHALLENGE 4 ========= //
const submit = document.getElementById("submitNama");
const inputNama = document.getElementById("inputNama");
const judul = document.getElementById("username");

submit.addEventListener("click", function(){
    
    const nama = inputNama.value.trim();

    if (nama === ""){
        judul.innerHTML = "Nama belum di input.";
        judul.style.color = "red";
    } else {
        judul.innerHTML = `Hello, ${nama}. Welcome to our training page.`;
        judul.style.color = "green";
        judul.style.fontSize = "30px";
    }

});