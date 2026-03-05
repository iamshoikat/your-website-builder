import { motion } from "framer-motion";
import { Puzzle, Server, Zap, ShieldAlert, ShoppingCart, Layout } from "lucide-react";

const features = [
  {
    icon: Puzzle,
    title: "স্মার্ট প্লাগিন সিস্টেম",
    desc: "প্রয়োজন অনুযায়ী প্লাগিন ইন্সটল করে ফিচার বাড়ান।",
  },
  {
    icon: Server,
    title: "সার্ভার-সাইড ট্র্যাকিং",
    desc: "iOS 14+ আপডেট এর পরেও ১০০% নির্ভুল ডেটা ট্র্যাকিং।",
  },
  {
    icon: Zap,
    title: "সুপার ফাস্ট টেকনোলজি",
    desc: "NextJS ও NodeJS দিয়ে তৈরি, ওয়ার্ডপ্রেসের চেয়ে ১০ গুণ ফাস্ট।",
  },
  {
    icon: ShieldAlert,
    title: "ফেক অর্ডার ডিটেকশন",
    desc: "অটোমেটেড সিস্টেম যা ভুয়া অর্ডার এবং কাস্টমার সনাক্ত করে।",
  },
  {
    icon: ShoppingCart,
    title: "ইনকমপ্লিট অর্ডার",
    desc: "যারা অর্ডার করতে গিয়েও করেনি, তাদের ট্র্যাক করে সেল রিকভার করুন।",
  },
  {
    icon: Layout,
    title: "প্রফেশনাল শপ টেমপ্লেট",
    desc: "রেডিমেড প্রিমিয়াম ডিজাইন যা কনভার্সন বাড়াতে সাহায্য করে।",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            কেন সেলফেব সেরা?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            ই-কমার্স ব্যবসার জন্য অত্যাধুনিক সব ফিচার
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border card-elevated hover:card-elevated-hover transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <f.icon size={24} className="text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
