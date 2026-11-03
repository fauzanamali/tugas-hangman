// nomer satu
 

interface Buku {
    judul: string;
    penulis: string;
    tahunTerbit: number;
}
type KategoriBuku = 'Fiksi' | 'Non-Fiksi' | 'Edukasi';


interface BukuLengkap extends Buku { kategori: KategoriBuku; }

const bukuFavorit: BukuLengkap = {
    judul: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    tahunTerbit: 2005,
    kategori: "Fiksi"
};

console.log(bukuFavorit);

// nomer 2

interface Kendaraan {
    merk: string;
    roda: number;
}

interface Mobil extends Kendaraan {
    pintu: number;
    isElektrik: boolean;
}


const mobilSaya: Mobil = {
    merk: "Tesla Model 3",
    roda: 4,
    pintu: 4,
    isElektrik: true
};

console.log(mobilSaya);