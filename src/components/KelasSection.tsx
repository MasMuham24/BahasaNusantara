import { Play, Clock, Star, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function KelasSection() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const kelasData = [
    {
      id: 1,
      judul: "Bahasa Jawa untuk Pemula",
      level: "Pemula",
      durasi: "4 minggu",
      siswa: 2450,
      rating: 4.8,
      modul: 12,
      gambar: "/assets/jawa.jpg",
      warna: "from-amber-500 to-orange-200",
    },
    {
      id: 2,
      judul: "Percakapan Bahasa Sunda",
      level: "Menengah",
      durasi: "3 minggu",
      siswa: 1890,
      rating: 4.9,
      modul: 10,
      gambar: "/assets/sunda.jpg",
      warna: "from-blue-500 to-cyan-200",
    },
    {
      id: 3,
      judul: "Bahasa Minang Sehari-hari",
      level: "Pemula",
      durasi: "3 minggu",
      siswa: 1560,
      rating: 4.7,
      modul: 9,
      gambar: "/assets/minang.jpeg",
      warna: "from-green-500 to-emerald-200",
    },
  ];

  return (
    <section
      id="kelas"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-blue-50 to-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <Play className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Kelas Interaktif</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Belajar dengan Modul Terstruktur
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ikuti kelas interaktif dengan materi lengkap, kuis, dan latihan untuk meningkatkan kemampuan bahasa daerahmu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kelasData.map((kelas, index) => (
            <div
              key={kelas.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDuration: "800ms",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={kelas.gambar}
                  alt={kelas.judul}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${kelas.warna} opacity-70`}></div>
                <span className="absolute top-4 right-4 bg-white text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                  {kelas.level}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {kelas.judul}
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{kelas.durasi}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{kelas.siswa.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span className="font-bold text-gray-900">{kelas.rating}</span>
                  </div>
                  <span className="text-sm text-gray-600">{kelas.modul} Modul</span>
                </div>

                <button
                  onClick={() => navigate(`/kelas/${kelas.id}`)}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white py-3 rounded-lg font-semibold hover:shadow-md transition-all"
                >
                  Mulai Belajar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}