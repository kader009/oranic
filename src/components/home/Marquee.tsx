import Image from 'next/image';

const Marquee = () => {
  const items = ['Skin Care'];

  return (
    <div className="bg-primary text-white py-4 overflow-hidden whitespace-nowrap border-y border-white/10 h-[101px]">
      <div className="flex animate-marquee gap-12 w-max">
        {[...Array(14)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-12">
            {items.map((item, idx) => (
              <span
                key={idx}
                className="flex items-center gap-12 font-medium uppercase tracking-widest text-[40px]"
              >
                <div className="relative w-[61px] h-[61px] shrink-0">
                  <Image
                    src="/assets/images/marque.svg"
                    alt="Marquee Icon"
                    fill
                    className="object-contain"
                  />
                </div>
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
