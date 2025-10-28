export interface KataData {
  id: string;
  kata: string;
  bahasa: string;
  arti: string;
  contoh?: string;
  audio?: string;
}

export interface Bahasa {
  id: string;
  nama: string;
  provinsi: string;
  jumlahKata: number;
  warna: string;
}

export interface CeritaRakyat {
  id: string;
  judul: string;
  daerah: string;
  ringkasan: string;
  gambar: string;
}

export interface UserProgress {
  poin: number;
  badge: string[];
  kataSelesai: number;
  kelasSelesai: number;
}
