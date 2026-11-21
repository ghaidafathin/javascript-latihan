// //Tanpa Konsep Object
// // let kode = "MBL001";
// // let tipe = "Avanza";
// // let merk = "Toyota";
// // let tahun = 2023;
// // let status = "Tersedia";

// //Menggunakan Konsep Object
// let mobil = {
//     kode: "MLB001",
//     tipe: "Avanza",
//     merk: "Toyota",
//     tahun: "2023",
//     status: true
// };

// //Object adalah kumpulan informasi yang menggambarkan SATU benda atau SATU entitas.
// //Contoh: 1 Mahasiswa
// let mahasiswaSatu = {
//     nama: "Nama Lengkap Mahasiswa",
//     nim: 0011223344,
//     prodi: "Sistem Informasi",
//     semester: 4
// };
// //Contoh: 1 User
// let userOne = {
//     username: "userone",
//     role: "admin",
//     password: "********" //12345678
// };
// //Contoh: 1 Produk
// let produkSatu = {
//     kodeBarang: "PRD001",
//     namaBarang: "Keyboard",
//     merkBarang: "HP",
//     hargaBarang: 125000
// };
// // Sebelah kiri = Property, sebelah kanan = Value.

// //Menampilakan data
// console.log(mobil);
// console.log(mobil.tipe);

// console.log(mobil.status);

// mobil.status = false;
// console.log(mobil.status);

//Array Object: Memiliki banyak objek di dalam satu wadah
// let kumpulanMobil = [
//     {
//         kode: "MBL001",
//         nama: "Avanza",
//         merk: "Toyota"
//     },

//     {
//         kode: "MBL002",
//         nama: "Civic",
//         merk: "Honda"
//     },

//     {
//         kode: "MBL003",
//         nama: "Xpander",
//         merk: "Mitsubishi"
//     }
// ];

// //Mengambil data
// console.log(kumpulanMobil[0]);
// console.log(kumpulanMobil[1].nama);
// //Digabung dengan for
// for (let i = 0; i < kumpulanMobil.length; i++){
//     console.log(kumpulanMobil[i]);
// }

// for (let i = 0; i < kumpulanMobil.length; i++){
//     console.log(
//         kumpulanMobil[i].kode,
//         kumpulanMobil[i].nama,
//         kumpulanMobil[i].merk
//     );
// }

//LATIHAN SOAL
let kumpulanMobil = [
    {
        kode: "MBL001",
        nama: "Avanza",
        merk: "Toyota",
        tahun: 2022,
        status: "Tersedia"
    },

    {
        kode: "MBL002",
        nama: "Civic",
        merk: "Honda",
        tahun: 2023,
        status: "Disewa"
    },

    {
        kode: "MBL003",
        nama: "Xpander",
        merk: "Mitsubishi",
        tahun: 2021,
        status: "Tersedia"
    },

    {
        kode: "MBL004",
        nama: "Brio",
        merk: "Honda",
        tahun: 2024,
        status: "Servis"
    }
];

//SOAL 1: Menampilkan nama mobil 1
console.log(kumpulanMobil[0].nama);
//SOAL 2: Menampilkan merk mobil 3
console.log(kumpulanMobil[2].merk);
//SOAL 3: Menampilkan status mobil 2
console.log(kumpulanMobil[1].status);
//SOAL 4: Tampilkan semua nama mobil
for (let i = 0; i < kumpulanMobil.length; i++){
    console.log(
        kumpulanMobil[i].nama
    );
}
//SOAL 5: Tampilkan semua merk mobil
for (let j = 0; j < kumpulanMobil.length; j++){
    console.log(
        kumpulanMobil[j].merk
    );
}
//SOAL 6: Tampilkan Kode Mobil - Nama mobil
for (let k = 0; k < kumpulanMobil.length; k++){
    console.log(
        kumpulanMobil[k].kode + " -",
        kumpulanMobil[k].nama
    );
}
//SOAL 7: Tampilkan hanya mobil dengan status "Tersedia"
for (let s = 0; s < kumpulanMobil.length; s++){
    if (kumpulanMobil[s].status === "Tersedia"){
        console.log(
            kumpulanMobil[s].nama
        );
    }
}
//SOAL 8: Tampilkan hanya merk mobil Honda
for (let h = 0; h < kumpulanMobil.length; h++){
    if (kumpulanMobil[h].merk === "Honda"){
        console.log(
            kumpulanMobil[h].nama
        );
    }
}
//SOAL 9: Tampilkan hanya mobil yang lebih dari 2022
for (let t = 0; t < kumpulanMobil.length; t++){
    if (kumpulanMobil[t].tahun > 2022){
        console.log(
            kumpulanMobil[t].nama
        );
    }
}
//SOAL 10: Membuat function untuk menampilkan semua mobil
function tampilSemuaMobil(){
    for (let v = 0; v < kumpulanMobil.length; v++){
        console.log(
            kumpulanMobil[v].nama
        )
    }
}

tampilSemuaMobil();
//SOAL 11: Membuat function untuk menampilkan mobil merk Honda
function mobilHonda (){
    for (let mh = 0; mh < kumpulanMobil.length; mh++){
        if (kumpulanMobil[mh].merk === "Honda"){
            console.log(kumpulanMobil[mh].nama);
        }
    }
}

mobilHonda();
//SOAL 12: Membuat function menghitung total mobil
function hitungTotalMobil (){
    return kumpulanMobil.length;
}

let total = hitungTotalMobil();
console.log(total);