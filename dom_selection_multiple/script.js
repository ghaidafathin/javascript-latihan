// | Fungsi                     | Mengambil                                      |
// | -------------------------- | ---------------------------------------------- |
// | `getElementById()`         | Satu element berdasarkan `id`                  |
// | `getElementsByClassName()` | Semua element dengan class tertentu            |
// | `querySelector()`          | Element pertama yang cocok dengan selector CSS |
// | `querySelectorAll()`       | Semua element yang cocok dengan selector CSS   |

// ===== TESTING 1 ===== //
const tombolWarna = document.getElementById("ubah");
const warna = document.getElementsByClassName("warna");

tombolWarna.addEventListener("click", function(){

    for (let i = 0; i < warna.length; i++){
        warna[i].style.color = "blue";
    }
});

// ===== TESTING 2 ===== //
const tombolNomor = document.getElementById("nomor");
const item = document.getElementsByClassName("item");

tombolNomor.addEventListener("click", function(){
    
    for (let i = 0; i < item.length; i++){
        const namaItem = item[i].innerHTML;
        item[i].innerHTML = `${i + 1}. ${namaItem}`;
    }
});

// ===== TESTING 3 ====== //
const highlight = document.getElementById("highlight");
const buah = document.getElementsByClassName("buah");

highlight.addEventListener("click", function(){

    for (let i = 0; i < buah.length; i++){
        if (i % 2 == 0){
            buah[i].style.color = "red";
        } else if (i % 2 == 1){
            buah[i].style.color = "green";
        }
    }
})

// ====== TESTING 4 ===== //
const tombolNilai = document.getElementById("cekNilai");
const daftarNilai = document.getElementsByClassName("nilai");

tombolNilai.addEventListener("click", function(){

    for (let i = 0; i < daftarNilai.length; i++){
        const nilai = Number(daftarNilai[i].innerHTML);
        
        if (nilai[i] >= 75){
            nilai[i].style.color = "green";
        } else if (nilai[i] < 75){
            nilai[i].style.color = "red";
        }
    }
});