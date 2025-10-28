import { Award, Trophy, Target, Zap } from 'lucide-react';
import { userProgress } from '../data/mockData';

export default function GamifikasiSection() {
  const achievements = [
    {
      icon: Trophy,
      title: 'Pemula',
      desc: 'Selesaikan 10 kata pertama',
      unlocked: true,
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: Award,
      title: 'Kolektor Kata',
      desc: 'Pelajari 50 kata baru',
      unlocked: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Pembaca Setia',
      desc: 'Baca 5 cerita rakyat',
      unlocked: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Bintang Bahasa',
      desc: 'Dapatkan skor sempurna di 3 kuis',
      unlocked: false,
      color: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-amber-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
            <Trophy className="w-5 h-5 text-amber-600" />
            <span className="text-amber-700 font-semibold">Gamifikasi</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Raih Prestasi & Badge
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kumpulkan poin dan badge dengan menyelesaikan berbagai tantangan pembelajaran
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1 bg-gradient-to-br from-amber-600 to-amber-500 rounded-2xl p-8 text-white shadow-xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Trophy className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold mb-2 opacity-90">Total Poin Anda</h3>
              <p className="text-5xl font-bold mb-6">{userProgress.poin.toLocaleString()}</p>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Kata Selesai</span>
                  <span className="font-bold">{userProgress.kataSelesai}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Kelas Selesai</span>
                  <span className="font-bold">{userProgress.kelasSelesai}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Badge Terkumpul</span>
                  <span className="font-bold">{userProgress.badge.length}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all ${
                  achievement.unlocked
                    ? 'border-amber-200 hover:shadow-xl'
                    : 'border-gray-200 opacity-60'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${achievement.color}`}
                  >
                    <achievement.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-bold text-gray-900">{achievement.title}</h3>
                      {achievement.unlocked && (
                        <span className="text-green-600">✓</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{achievement.desc}</p>
                    {achievement.unlocked && (
                      <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                        Terbuka
                      </span>
                    )}
                    {!achievement.unlocked && (
                      <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-semibold">
                        Terkunci
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Naik Level & Dapatkan Hadiah
          </h3>
          <p className="text-gray-600 mb-6">
            Semakin aktif belajar, semakin banyak badge dan hadiah menarik yang bisa kamu dapatkan!
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">Level 5</span>
              <span className="text-sm font-semibold text-gray-700">Level 6</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-600 to-amber-500 h-full rounded-full transition-all duration-500"
                style={{ width: '65%' }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">250 poin lagi untuk level berikutnya</p>
          </div>
        </div>
      </div>
    </section>
  );
}
