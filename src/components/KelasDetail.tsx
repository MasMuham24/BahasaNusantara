import { useParams, useNavigate } from "react-router-dom";
import { Clock, Users } from "lucide-react";

export default function KelasDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const kelasMap: any = {
    1: {
      judul: "Bahasa Jawa untuk Pemula",
      deskripsi:
        "Pelajari dasar-dasar Bahasa Jawa seperti sapaan, kalimat sederhana, dan percakapan sehari-hari.",
      instruktur: "Budi Santoso",
      durasi: "4 minggu",
      siswa: 2450,
      gambar: "/assets/jawa.jpg",
    },
    2: {
      judul: "Percakapan Bahasa Sunda",
      deskripsi:
        "Belajar percakapan sehari-hari Bahasa Sunda dengan pendekatan budaya.",
      instruktur: "Siti Nurhaliza",
      durasi: "3 minggu",
      siswa: 1890,
      gambar: "/assets/sunda.jpg",
    },
    3: {
      judul: "Bahasa Minang Sehari-hari",
      deskripsi:
        "Belajar Bahasa Minang dasar untuk memahami percakapan umum.",
      instruktur: "Andi Wijaya",
      durasi: "3 minggu",
      siswa: 1560,
      gambar: "/assets/minang.jpeg",
    },
  };

  const kelas = kelasMap[id as keyof typeof kelasMap];

  if (!kelas)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Kelas tidak ditemukan.
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-amber-50 p-8 pt-24"> 
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-700 hover:underline"
        >
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 hover:scale-105"
        >
          Kembali ke Beranda
        </button>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={kelas.gambar}
          alt={kelas.judul}
          className="w-full h-64 object-cover"
        />

        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {kelas.judul}
          </h1>
          <p className="text-gray-700 mb-6">{kelas.deskripsi}</p>

          <div className="flex gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" /> {kelas.durasi}
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" /> {kelas.siswa.toLocaleString()} siswa
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Instruktur: {kelas.instruktur}
          </p>
        </div>
      </div>
    </div>
  );
}