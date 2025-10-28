import { MapPin, TrendingUp } from 'lucide-react';
import { bahasaDaerah } from '../data/mockData';

export default function PetaBahasa() {
  return (
    <section id="peta" className="py-20 bg-gradient-to-br from-amber-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Peta Bahasa</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Peta Bahasa Nusantara
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jelajahi kekayaan bahasa daerah Indonesia dan sebaran geografisnya di seluruh nusantara
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="relative h-96 bg-gradient-to-br from-blue-100 to-amber-100 flex items-center justify-center">
            <img
              src="https://vemaps.com/uploads/img/big/id-04.jpg"
              alt="Peta Indonesia"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center bg-white/90 backdrop-blur-sm p-8 rounded-2xl">
                <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Visualisasi Interaktif</h3>
                <p className="text-gray-600">Peta interaktif akan segera hadir</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bahasaDaerah.map((bahasa) => (
            <div
              key={bahasa.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4"
              style={{ borderColor: bahasa.warna }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Bahasa {bahasa.nama}
                  </h3>
                  <p className="text-gray-600 text-sm flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{bahasa.provinsi}</span>
                  </p>
                </div>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${bahasa.warna}20` }}
                >
                  <span className="text-2xl">🗣️</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Kosakata Tersedia</span>
                  <span className="font-bold text-gray-900">{bahasa.jumlahKata.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">Status</span>
                  <div className="flex items-center space-x-1 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">Aktif</span>
                  </div>
                </div>

                <button
                  className="w-full mt-4 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: bahasa.warna }}
                >
                  Jelajahi
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
