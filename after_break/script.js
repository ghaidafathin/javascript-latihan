/* ====== LATIHAN 1 ===== */
const tombolSubmit = document.getElementById("submit");
tombolSubmit.addEventListener("click", function(){
    const angkaUser = document.getElementById("angka");
    const hasil = document.getElementById("hasil");

    const angka = Number(angkaUser.value);

    hasil.innerHTML = `Angka sekarang adalah: ${angka} <br> Angka selanjutnya adalah: ${angka + 1}`;
});

/* ====== LATIHAN 2 ===== */
const cekNilai = document.getElementById("cekNilai");
cekNilai.addEventListener("click", function(){
    const nilaiUser = document.getElementById("nilai");
    const nilai = Number(nilaiUser.value);

    const hasilNilai = document.getElementById("hasilNilai");

    if (nilai >= 85){
        hasilNilai.innerHTML = `Nilai: ${nilai} <br> Grade: A`
    } else if (nilai >= 70){
        hasilNilai.innerHTML = `Nilai: ${nilai} <br> Grade: B`
    } else if (nilai >= 55){
        hasilNilai.innerHTML = `Nilai: ${nilai} <br> Grade: C`
    } else if (nilai < 55) {
        hasilNilai.innerHTML = `Nilai: ${nilai} <br> Grade: D`
    } 
});

/* ====== LATIHAN 3 ===== */
const tampilkan = document.getElementById("tampilkanAngka");
tampilkan.addEventListener("click", function(){
    const nilaiAngka = document.getElementById("lihatAngka");
    const angka = Number(nilaiAngka.value);
    const menampilkanAngka = document.getElementById("hasilAngka");

    menampilkanAngka.innerHTML = "";

    for (let i = 1; i <= angka; i++){
        menampilkanAngka.innerHTML += `${i} <br>`;
    }
});
