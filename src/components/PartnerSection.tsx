const mediaPartners = [
  {
    name: 'Kementerian',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop&q=80'
  },
  {
    name: 'Shopee',
    logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=80&fit=crop&q=80'
  },
  {
    name: 'GoTo',
    logo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=200&h=80&fit=crop&q=80'
  },
  {
    name: 'Komdigi',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop&q=80'
  },
  {
    name: 'Skill Academy',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop&q=80'
  },
  {
    name: 'Kementerian',
    logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=80&fit=crop&q=80'
  },
  {
    name: 'Shopee',
    logo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=200&h=80&fit=crop&q=80'
  },
  {
    name: 'GoTo',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop&q=80'
  },
];

function App() {
  const duplicatedPartners = [...mediaPartners, ...mediaPartners];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-20">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">
            Media Partner
          </h1>
          <div className="w-24 h-1 bg-teal-500 mx-auto" />
        </div>

        <div className="relative overflow-hidden py-8">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-scroll-slow hover:pause-animation">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center mx-8 sm:mx-12 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 sm:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
