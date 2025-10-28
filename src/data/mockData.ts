import { Bahasa, KataData, CeritaRakyat, UserProgress } from '../types';

export const bahasaDaerah: Bahasa[] = [
  { id: '1', nama: 'Jawa', provinsi: 'Jawa Tengah', jumlahKata: 2450, warna: '#D4AF37' },
  { id: '2', nama: 'Sunda', provinsi: 'Jawa Barat', jumlahKata: 1890, warna: '#FFD700' },
  { id: '3', nama: 'Minang', provinsi: 'Sumatera Barat', jumlahKata: 1560, warna: '#FDB931' },
  { id: '4', nama: 'Bali', provinsi: 'Bali', jumlahKata: 1340, warna: '#DAA520' },
  { id: '5', nama: 'Batak', provinsi: 'Sumatera Utara', jumlahKata: 1120, warna: '#B8860B' },
  { id: '6', nama: 'Bugis', provinsi: 'Sulawesi Selatan', jumlahKata: 980, warna: '#CD7F32' },
];

export const kataKamus: KataData[] = [
  {
    id: '1',
    kata: 'Sugeng Enjing',
    bahasa: 'Jawa',
    arti: 'Selamat Pagi',
    contoh: 'Sugeng enjing, Pak Guru',
  },
  {
    id: '2',
    kata: 'Matur Nuwun',
    bahasa: 'Jawa',
    arti: 'Terima Kasih',
    contoh: 'Matur nuwun sampun diampuni',
  },
  {
    id: '3',
    kata: 'Wilujeng Enjing',
    bahasa: 'Sunda',
    arti: 'Selamat Pagi',
    contoh: 'Wilujeng enjing, kumaha damang?',
  },
  {
    id: '4',
    kata: 'Hatur Nuhun',
    bahasa: 'Sunda',
    arti: 'Terima Kasih',
    contoh: 'Hatur nuhun pisan',
  },
  {
    id: '5',
    kata: 'Salamaik Pagi',
    bahasa: 'Minang',
    arti: 'Selamat Pagi',
    contoh: 'Salamaik pagi, baa kaba?',
  },
  {
    id: '6',
    kata: 'Om Swastiastu',
    bahasa: 'Bali',
    arti: 'Salam (Selamat Sejahtera)',
    contoh: 'Om Swastiastu, rahajeng semeng',
  },
];

export const ceritaRakyat: CeritaRakyat[] = [
  {
    id: '1',
    judul: 'Rawa Pening',
    daerah: 'Jawa Tengah',
    ringkasan: 'Cerita tentang seorang anak sakti bernama Baru Klinthing yang dikalahkan oleh raksasa jahat, tetapi kemudian muncul kembali untuk menghukumnya dan membuat sebuah rawa terbentuk.',
    gambar: 'assets/rawa-pening.jpg',
  },
  {
    id: '2',
    judul: 'Sangkuriang',
    daerah: 'Jawa Barat',
    ringkasan: 'Legenda terbentuknya Gunung Tangkuban Perahu dari kisah cinta terlarang Sangkuriang...',
    gambar: 'assets/sangkuriang.jpg',
  },
  {
    id: '3',
    judul: 'Malin Kundang',
    daerah: 'Sumatera Barat',
    ringkasan: 'Kisah anak durhaka yang dikutuk menjadi batu karena menyangkal ibunya sendiri...',
    gambar: 'assets/malin-kundang.jpg',
  },
  {
    id: '4',
    judul: 'Calon Arang',
    daerah: 'Bali',
    ringkasan: 'Legenda janda sakti yang memiliki ilmu hitam dan menakutkan di Pulau Bali...',
    gambar: 'assets/calon-arang.webp',
  },
];

export const userProgress: UserProgress = {
  poin: 1250,
  badge: ['Pemula', 'Kolektor Kata', 'Pembaca Setia'],
  kataSelesai: 45,
  kelasSelesai: 3,
};
