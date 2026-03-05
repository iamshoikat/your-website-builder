const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70 py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">S</span>
              </div>
              <span className="text-lg font-bold text-background">Selfeb</span>
            </div>
            <p className="text-sm">আপনার ই-কমার্স ব্যবসার কমপ্লিট অটোমেশন প্ল্যাটফর্ম।</p>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-3">প্রোডাক্ট</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Templates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-3">সাপোর্ট</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-background transition-colors">ডকুমেন্টেশন</a></li>
              <li><a href="#" className="hover:text-background transition-colors">ব্লগ</a></li>
              <li><a href="#" className="hover:text-background transition-colors">কন্টাক্ট</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-3">লিগ্যাল</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm">
          © 2026 Selfeb. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
