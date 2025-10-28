import { BookOpen, Volume2, Heart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { ceritaRakyat } from '../data/mockData';

export default function CeritaSection() {
  const [liked, setLiked] = useState<Record<string | number, boolean>>({});
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

  return (
    <section id="cerita" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-semibold">Cerita Rakyat</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cerita Rakyat Digital Nusantara
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kenali kearifan lokal melalui cerita rakyat dari berbagai daerah dalam bentuk teks dan audio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ceritaRakyat.map((cerita, index) => (
            <div
              key={cerita.id}
              className={`bg-gradient-to-br from-white to-green-50 border border-green-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDuration: "800ms",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cerita.gambar}
                  alt={cerita.judul}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {cerita.daerah}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{cerita.judul}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {cerita.ringkasan}
                </p>

                <div className="flex items-center gap-3">
                  <button className="flex-1 bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-lg font-semibold hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                    <BookOpen className="w-5 h-5" />
                    <span>Baca Cerita</span>
                  </button>
                  <button className="p-3 bg-green-100 hover:bg-green-200 rounded-lg transition-all duration-300 hover:scale-110">
                    <Volume2 className="w-5 h-5 text-green-600" />
                  </button>
                  <button
                    onClick={() => setLiked(prev => ({ ...prev, [cerita.id]: !prev[cerita.id] }))}
                    className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${liked[cerita.id] ? 'bg-red-200 hover:bg-red-300' : 'bg-red-100 hover:bg-red-200'}`}
                  >
                    <Heart className={`w-5 h-5 transition-all duration-300 ${liked[cerita.id] ? 'text-red-700 fill-red-700 animate-pulse' : 'text-red-600'}`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            transitionDelay: "600ms",
          }}
        >
          <button className="bg-white border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105">
            Lihat Semua Cerita
          </button>
        </div>
      </div>
    </section>
  );
}