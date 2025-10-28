import { Users, Plus, Mic, FileText } from 'lucide-react';
import { useState } from 'react';

export default function KontributorSection() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    bahasa: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const kontribusiJenis = [
    {
      icon: FileText,
      title: 'Tambah Kosakata',
      desc: 'Kontribusi kata dan frasa baru',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Mic,
      title: 'Rekam Audio',
      desc: 'Bantu pelafalan yang benar',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FileText,
      title: 'Tulis Cerita',
      desc: 'Bagikan cerita daerahmu',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (formData.nama && formData.email && formData.bahasa) {
      setShowAlert(true);
      setFormData({ nama: '', email: '', bahasa: '' });
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const handleKontribusi = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <section className="py-20 bg-white relative">
      {showAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl animate-[scaleIn_0.3s_ease-out]">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-[checkmark_0.5s_ease-out]">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Berhasil!</h3>
              <p className="text-gray-600 mb-6">
                Data berhasil dikirim terimakasih telah berkontribusi
              </p>
              <button
                onClick={() => setShowAlert(false)}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-[fadeInUp_0.6s_ease-out]">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-4 animate-[bounce_1s_ease-in-out_3]">
            <Users className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-semibold">Kontributor Lokal</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mari Berkontribusi Bersama
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jadilah bagian dari gerakan pelestarian bahasa daerah. Setiap kontribusimu sangat berarti untuk generasi mendatang
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {kontribusiJenis.map((jenis, index) => (
            <div
              key={index}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s backwards`
              }}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-8 text-center hover:shadow-xl transition-all transform hover:scale-105 hover:-translate-y-2"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${jenis.color} mb-4 transition-transform hover:rotate-12 hover:scale-110`}
              >
                <jenis.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{jenis.title}</h3>
              <p className="text-gray-600 mb-6">{jenis.desc}</p>
              <button 
                onClick={handleKontribusi}
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 active:scale-95"
              >
                Mulai Kontribusi
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-amber-600 to-amber-500 rounded-2xl p-8 md:p-12 text-white shadow-2xl animate-[fadeInUp_0.8s_ease-out]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Bergabung Sebagai Kontributor Aktif
              </h3>
              <p className="text-amber-50 mb-6">
                Dapatkan akses khusus, badge eksklusif, dan sertifikat kontributor untuk setiap kontribusi yang diverifikasi
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <span className="text-2xl">✓</span>
                  <span>Badge Kontributor Eksklusif</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-2xl">✓</span>
                  <span>Sertifikat Digital</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-2xl">✓</span>
                  <span>Poin Bonus & Hadiah</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <select 
                  value={formData.bahasa}
                  onChange={(e) => setFormData({ ...formData, bahasa: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="" className="text-gray-900">Pilih Bahasa Daerah</option>
                  <option value="jawa" className="text-gray-900">Bahasa Jawa</option>
                  <option value="sunda" className="text-gray-900">Bahasa Sunda</option>
                  <option value="minang" className="text-gray-900">Bahasa Minang</option>
                  <option value="bali" className="text-gray-900">Bahasa Bali</option>
                </select>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-white text-amber-600 py-3 rounded-lg font-bold hover:bg-amber-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span>Daftar Sekarang</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes checkmark {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}} />
    </section>
  );
}