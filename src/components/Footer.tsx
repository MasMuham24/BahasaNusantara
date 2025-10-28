import { BookOpen, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">BahasaNusantara.id</h3>
                <p className="text-xs text-amber-400">Indonesia Emas 2045</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Portal pembelajaran bahasa daerah digital untuk melestarikan kekayaan budaya Indonesia
              melalui teknologi dan inovasi pendidikan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#166FE5] rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#1DA1F2] rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#C13584] rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#CC0000] rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Fitur</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#kamus" className="hover:text-amber-400 transition-colors">Kamus Digital</a></li>
              <li><a href="#kelas" className="hover:text-amber-400 transition-colors">Kelas Interaktif</a></li>
              <li><a href="#cerita" className="hover:text-amber-400 transition-colors">Cerita Rakyat</a></li>
              <li><a href="#peta" className="hover:text-amber-400 transition-colors">Peta Bahasa</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Tentang</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Tim</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Mitra</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Kontak</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-gray-400 text-sm">
              © 2045 BahasaKita.id - Digital Innovation: Indonesia Emas
            </div>
            <div className="flex items-center justify-start md:justify-end space-x-2 text-gray-400 text-sm">
              <Mail className="w-4 h-4" />
              <span>info@bahasakita.id</span>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 italic">
              "Pelajari Bahasa Daerah, Lestarikan Budaya Bangsa"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
