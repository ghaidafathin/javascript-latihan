// ===== LATIHAN 1 ===== //
let submitAngka = document.getElementById("submitAngka");

submitAngka.addEventListener("click", function(){
    let angka_1 = document.getElementById("inputAngka");
    let hasil_1 = document.getElementById("hasilAngka");

    let cekAngka = Number(angka_1.value);

    if (cekAngka % 2 === 0){
        hasil_1.innerHTML = cekAngka + " Adalah angka genap";
    } else {
        hasil_1.innerHTML = cekAngka + " Adalah angka ganjil";
    }
});

// ===== LATIHAN 2 ===== //
let submitNilai = document.getElementById("submitNilai");

submitNilai.addEventListener("click", function(){
    let nilai_2 = document.getElementById("inputNilai");
    let hasil_2 = document.getElementById("hasilNilai");

    let cekNilai = Number(nilai_2.value);

    if (cekNilai >= 85){
        hasil_2.innerHTML = 
        "Nilai: " + cekNilai + "<br>" + "Grade: A";
    } else if (cekNilai >= 70){
        hasil_2.innerHTML = 
        "Nilai: " + cekNilai + "<br>" + "Grade: B";
    } else if (cekNilai >= 55){
        hasil_2.innerHTML = 
        "Nilai: " + cekNilai + "<br>" + "Grade: C";
    } else {
        hasil_2.innerHTML = 
        "Nilai: " + cekNilai + "<br>" + "Grade: D";
    }
});

// ===== LATIHAN 3 ===== //
let submitDeretAngka = document.getElementById("submitDeretAngka");

submitDeretAngka.addEventListener("click", function(){
    let angka_3 = document.getElementById("inputDeretAngka");
    let hasil_3 = document.getElementById("hasilDeretAngka");

    let deretAngka = Number(angka_3.value);
    hasil_3.innerHTML = " ";

    for (let i = 1; i <= deretAngka; i++){
        hasil_3.innerHTML += i + " ";
    }
});

// ===== LATIHAN 4 ===== //
let submitAngkaPerkalian = document.getElementById("submitAngkaPerkalian");

submitAngkaPerkalian.addEventListener("click", function(){
    let angka_4 = document.getElementById("inputAngkaPerkalian");
    let hasil_4 = document.getElementById("hasilAngkaPerkalian");

    let angkaPerkalian = Number(angka_4.value);
    hasil_4.innerHTML = " ";

    for (let i = 0; i <= 10; i++){
        hasil_4.innerHTML += angkaPerkalian + " x " + i + " = " + (angkaPerkalian * i) + "<br>";
    }
});

// ===== LATIHAN 5 ===== //
let submitLogin = document.getElementById("submitLogin");

submitLogin.addEventListener("click", function(){
    let inputUsername = document.getElementById("inputUsername");
    let inputPassword = document.getElementById("inputPassword");
    let hasilLogin = document.getElementById("hasilLogin");

    let username = inputUsername.value;
    let password = inputPassword.value;
    hasilLogin.innerHTML = " ";

    if (username === "user.name" && password === "username00123"){
        hasilLogin.innerHTML = "Welcome to our training page!";
    } else {
        hasilLogin.innerHTML = "Password / Username salah. Silahkan login ulang.";
    }
});

// | let                          | const             | var                  |
// | ---------------------------- | ----------------- | -------------------- |
// | Bisa diubah                  | Tidak bisa diubah | Bisa diubah          |
// | Block Scope                  | Block Scope       | Function Scope       |
// | Dipakai di JavaScript modern | Sangat disarankan | Hampir tidak dipakai |
