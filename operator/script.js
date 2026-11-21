let numberOne = "10";
let numberTwo = 5;

console.log(numberOne + numberTwo);
// Dihasilkan "105" karena kalau salah satu operand adalah String, operator + lebih memilih menggabungkan teks daripada menghitung number

console.log(numberOne - numberTwo);
// Dihasilkan '5' karena kalau salah satu operand adalah String, operator yang bukan + akan otomatis mengubah "10" menjadi number, 10
//operator + memiliki perilaku khusus

// ========== OPERATOR ARITMATIKA ========== //
//1. Penjumlahan
let penjumlahan = 10 + 5;
console.log(penjumlahan);
//2. Pengurangan
let pengurangan = 10 - 5;
console.log(pengurangan);
//3. Perkalian
let perkalian = 10 * 5;
console.log(perkalian);
//4. Pembagian
let pembagian = 10 / 5;
console.log(pembagian);
//5. Modulus (Sisa bagi)
let modulus = 10 % 5;
console.log(modulus);
//6. Pangkat
let pangkat = 10 ** 5;
console.log(pangkat);

// ========== OPERATOR PENUGASAN ========== //
//1. = (Memasukkan nilai ke variabel)
let nilai = 100;
console.log(nilai);
//2. -= (Ambil isi variabel, kurangi dengan nilai di sebelah kanan, lalu simpan kembali hasilnya.)
let nilaiDua = 20000;
console.log(nilaiDua);
nilaiDua -= 2000;
console.log(nilaiDua);
//3. += (Ambil nilai variabel saat ini, tambahkan dengan nilai di sebelah kanan, lalu simpan kembali ke variabel tersebut.)
let nilaiTiga = 20000
console.log(nilaiTiga);
nilaiTiga += 2000;
console.log(nilaiTiga);
//4. *= (Ambil isi variabel, kalikan dengan nilai di sebelah kanan, lalu simpan kembali.)
let nilaiEmpat = 10;
console.log(nilaiEmpat);
nilaiEmpat *= 5;
console.log(nilaiEmpat);
//5. /= (Ambil isi variabel, bagi dengan nilai di sebelah kanan, lalu simpan kembali.)
let nilaiLima = 10;
console.log(nilaiLima);
nilaiLima /= 5;
console.log(nilaiLima);
//6. %= (Ambil isi variabel, cari sisa hasil baginya dengan nilai di sebelah kanan, lalu simpan kembali.)
let nilaiTujuh = 125000;
console.log(nilaiTujuh);
nilaiTujuh %= 20000;
console.log(nilaiTujuh);

// ========== OPERATOR PEMBANDING ========== //
//1. > (Lebih besar)
//2. < (Lebih kecil)
//3. >= (Lebih besar sama dengan)
//4. <= (Lebih kecil sama dengan)
//5. == (JavaScript boleh mengubah tipe data jika diperlukan)
//6. === (Nilainya sama dan tipe datanya juga harus sama)

// ========== TYPE COERCION ========== //
// Konversi tipe data secara otomatis oleh JavaScript.
console.log(true + true);
console.log(false + false);
console.log(true + false);
console.log(10 - true);
console.log(10 - false);
console.log(10 * true);
console.log(10 / false);