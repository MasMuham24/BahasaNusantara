import { Search, BookMarked, SearchX } from 'lucide-react';
import { useState, useEffect } from 'react';

const kataKamus = [
  {
    id: 1,
    bahasa: 'Jawa',
    kata: 'Sugeng',
    arti: 'Selamat',
    contoh: 'Sugeng enjing (Selamat pagi)'
  },
  {
    id: 2,
    bahasa: 'Sunda',
    kata: 'Wilujeng',
    arti: 'Selamat',
    contoh: 'Wilujeng enjing (Selamat pagi)'
  },
  {
    id: 3,
    bahasa: 'Minang',
    kata: 'Salamaik',
    arti: 'Selamat',
    contoh: 'Salamaik pagek (Selamat pagi)'
  },
  {
    id: 4,
    bahasa: 'Bali',
    kata: 'Rahajeng',
    arti: 'Selamat',
    contoh: 'Rahajeng semeng (Selamat pagi)'
  },
  {
    id: 5,
    bahasa: 'Jawa',
    kata: 'Panjenengan',
    arti: 'Anda (halus)',
    contoh: 'Punapa kabar panjenengan? (Apa kabar Anda?)'
  },
  {
    id: 6,
    bahasa: 'Sunda',
    kata: 'Nuhun',
    arti: 'Terima kasih',
    contoh: 'Nuhun pisan (Terima kasih banyak)'
  }
];

export default function KamusSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBahasa, setSelectedBahasa] = useState('Semua');
  const [isLoading, setIsLoading] = useState(false);
  const [displayedKata, setDisplayedKata] = useState(kataKamus);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const filtered = kataKamus.filter((kata) => {
        const matchSearch = kata.kata.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           kata.arti.toLowerCase().includes(searchTerm.toLowerCase());
        const matchBahasa = selectedBahasa === 'Semua' || kata.bahasa === selectedBahasa;
        return matchSearch && matchBahasa;
      });
      setDisplayedKata(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedBahasa]);

  const bahasaList = ['Semua', 'Jawa', 'Sunda', 'Minang', 'Bali'];

  return (
    <section id="kamus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-[fadeInUp_0.6s_ease-out]">
          <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-4 animate-[bounce_1s_ease-in-out_3]">
            <BookMarked className="w-5 h-5 text-amber-600" />
            <span className="text-amber-700 font-semibold">Kamus Digital</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kamus Bahasa Daerah Nusantara
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan dan pelajari kosakata dari berbagai bahasa daerah Indonesia dengan terjemahan dan contoh penggunaan
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 animate-[fadeInUp_0.8s_ease-out]">
          <div className="relative mb-6 group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-all group-focus-within:text-amber-500 group-focus-within:scale-110" />
            <input
              type="text"
              placeholder="Cari kata dalam bahasa daerah atau bahasa Indonesia..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all transform hover:scale-[1.01] focus:scale-[1.01]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {bahasaList.map((bahasa, index) => (
              <button
                key={bahasa}
                onClick={() => setSelectedBahasa(bahasa)}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`
                }}
                className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 ${
                  selectedBahasa === bahasa
                    ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                }`}
              >
                {bahasa}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative w-16 h-16 mb-4">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-amber-200 rounded-full animate-ping"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-amber-500 rounded-full animate-spin border-t-transparent"></div>
            </div>
            <p className="text-gray-600 font-medium animate-pulse">Mencari kata...</p>
          </div>
        ) : displayedKata.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 animate-[fadeInUp_0.5s_ease-out]">
            <div className="bg-gray-100 rounded-full p-6 mb-4">
              <SearchX className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Kamus Bahasa Tidak Ditemukan</h3>
            <p className="text-gray-600 text-center max-w-md">
              Maaf, kata yang Anda cari tidak ditemukan dalam kamus. Coba gunakan kata kunci lain atau pilih bahasa yang berbeda.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedKata.map((kata, index) => (
              <div
                key={kata.id}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`
                }}
                className="bg-gradient-to-br from-white to-amber-50 border border-amber-100 rounded-xl p-6 hover:shadow-lg transition-all transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-2 animate-[fadeIn_0.5s_ease-out]">
                      {kata.bahasa}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{kata.kata}</h3>
                  </div>
                </div>

                <p className="text-gray-700 font-medium mb-3">{kata.arti}</p>

                {kata.contoh && (
                  <div className="bg-white rounded-lg p-3 border border-amber-100 transition-all hover:border-amber-200">
                    <p className="text-sm text-gray-600 italic">"{kata.contoh}"</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}} />
    </section>
  );
}