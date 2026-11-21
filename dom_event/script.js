// let judul = document.getElementById("judul");

// console.log(judul);

// judul.innerHTML = "Ini belajar DOM";
// judul.innerHTML = "Halo, User!";

//DOM itu seperti remote control untuk HTML.
//HTML tetap ada, DOM hanya mengubah isinya.
//DOM hanya 'alat', yang memutuskan tetap logika program (if, event, atau data dari server).
//===================================================================================================//

/* Event: User klik button, user mengetik di input, user menggerakkan mouse, user menekan keyboard, 
halaman selesai dimuat, dll */
// | Event         | Terjadi saat...       | Contoh         |
// | ------------- | --------------------- | -------------- |
// | `onclick`     | User mengklik         | Tombol Login   |
// | `ondblclick`  | Double klik           | Zoom gambar    |
// | `onmouseover` | Mouse diarahkan       | Tooltip muncul |
// | `onmouseout`  | Mouse keluar          | Tooltip hilang |
// | `oninput`     | Isi input berubah     | Live search    |
// | `onchange`    | Nilai selesai berubah | Pilih kota     |
// | `onsubmit`    | Form dikirim          | Login/Register |
// | `onkeydown`   | Keyboard ditekan      | Shortcut       |


//ONCLICK EVENT
function ubahJudul(){
    let judul = document.getElementById("judul");

    judul.innerHTML = "Selamat belajar DOM :) ";
} //named function, cocok buat latihan / projek kecil, dan konsepnya lebih mudah dipahami.

btn.addEventListener("click", function(){
    let judul = document.getElementById("judul");

    judul.innerHTML = "Selamat belajar DOM :)";
}) //anonymous function, lebih fleksibel.

//CHALLENGE 1
/* Button 1 */
function tombolPertama (){
    let welcome = document.getElementById("welcome");

    welcome.innerHTML = "Halo, User!";
}
/* Button 2 */
function tombolKedua(){
    let welcome = document.getElementById("welcome");

    welcome.innerHTML = "Selamat belajar JavaScript :)";
}

//CHALLENGE 2
/* On */
function lampuOn (){
    let lampu = document.getElementById("lampu");

    lampu.innerHTML = "Status lampu: On";
}
/* Off */
function lampuOff (){
    let lampu = document.getElementById("lampu");

    lampu.innerHTML = "Status lampu: Off";
}

//CHALLENGE 3
function loginUser (){
    let login = document.getElementById("login");

    login.innerHTML = "Welcome to the homepage, Ghaida! Thank you for logging in :)";
}