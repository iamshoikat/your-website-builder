const brands = [
  "YarinsBD", "Hasan Sunnah", "WoW Look", "FJ Collection", "Babar Dokan",
  "DiniArt", "Phone Plus", "Dew Butterfly",
];

const TrustedBrands = () => {
  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8">
          Trusted by 1000+ fast growing brands
        </p>
        <div className="overflow-hidden">
          <div className="flex gap-12 animate-slide-logos" style={{ width: "200%" }}>
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 text-xl font-bold text-muted-foreground/40 whitespace-nowrap"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
