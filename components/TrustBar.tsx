export default function TrustBar() {
  const items = [
    "Established 2012",
    "50,000+ Happy Travelers",
    "4.9★ Rating",
    "200+ Global Partners",
    "Thamel, Kathmandu, Nepal",
  ];

  return (
    <div className="bg-primary text-white py-4 px-8">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {items.map((item, index) => (
          <div key={item} className="flex items-center">
            <span className="font-headline font-bold uppercase tracking-widest text-sm whitespace-nowrap">
              {item}
            </span>
            {index < items.length - 1 && (
              <span className="hidden md:block mx-6 opacity-40 text-white font-light">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
