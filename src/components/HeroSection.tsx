import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardImg from "@/assets/dashboard-preview.jpg";

const HeroSection = () => {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-accent-foreground">
                #১ ই-কমার্স অটোমেশন প্ল্যাটফর্ম
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-4">
              আপনার অনলাইন ব্যবসার{" "}
              <span className="text-gradient">কমপ্লিট সলিউশন</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              সেলফেব শুধু একটি ওয়েবসাইট বিল্ডার নয়, এটি আপনার ব্যবসার পূর্ণাঙ্গ অপারেটিং সিস্টেম। ইনভেন্টরি, লজিস্টিক্স, ফেসবুক অ্যাডস ট্র্যাকিং — সব এক জায়গায়।
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <Button size="lg" className="gap-2">
                আজই শুরু করুন <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Play size={18} /> ডেমো দেখুন
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-primary" />
                ক্রেডিট কার্ড লাগবে না
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-primary" />
                সহজ সেটআপ
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden card-elevated">
              <img
                src={dashboardImg}
                alt="Selfeb Dashboard Preview"
                className="w-full h-auto"
              />
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-card rounded-xl p-3 card-elevated border border-border"
            >
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Order Status</p>
                  <p className="text-sm font-semibold text-foreground">Delivered</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
