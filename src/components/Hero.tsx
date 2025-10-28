import { Globe2, Users, BookOpen, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const stats = [
    { icon: Globe2, label: "Bahasa Daerah", value: "700+" },
    { icon: Users, label: "Pengguna Aktif", value: "25K+" },
    { icon: BookOpen, label: "Kosakata", value: "50K+" },
    { icon: Award, label: "Badge Tersedia", value: "30+" },
  ];

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-amber-50 via-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              Digital Innovation: Indonesia Emas 2045
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Pelajari Bahasa Daerah,
              <span className="block bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                Lestarikan Budaya Bangsa
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-600 mb-8"
            >
              Portal pembelajaran bahasa daerah digital untuk melestarikan kekayaan budaya Indonesia.
              Belajar dengan cara yang interaktif, modern, dan menyenangkan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#kamus"
                className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                Mulai Belajar
              </a>
              <a
                href="#cerita"
                className="bg-white text-amber-600 border-2 border-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
              >
                Jelajahi Cerita
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-amber-200 to-blue-200 rounded-3xl shadow-2xl overflow-hidden">
              <img
                src="/assets/wayang.jpg"
                alt="Pembelajaran Bahasa"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">Terverifikasi</p>
                  <p className="text-sm text-gray-600">oleh Kemendikdasmen</p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15, duration: 0.6 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-100 to-blue-100 rounded-xl mb-4">
                <stat.icon className="w-7 h-7 text-amber-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
