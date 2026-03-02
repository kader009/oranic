const Marquee = () => {
  const items = [
    'Skin Care',
    'Self Care',
    'Organic Life',
    'Natural Glow',
    'Eco Friendly',
  ];

  return (
    <div className="bg-primary text-white py-4 overflow-hidden whitespace-nowrap border-y border-white/10">
      <div className="flex animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center">
            {items.map((item, idx) => (
              <span
                key={idx}
                className="flex items-center mx-8 font-bold uppercase tracking-widest text-sm"
              >
                <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
