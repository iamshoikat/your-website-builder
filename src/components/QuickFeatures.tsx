import { motion } from "framer-motion";
import { ClipboardList, ShieldCheck, GripVertical, BarChart3, ShoppingBag, Smartphone } from "lucide-react";

const items = [
  { icon: ClipboardList, title: "অর্ডার ম্যানেজমেন্ট", desc: "সহজ অর্ডার প্রসেসিং" },
  { icon: ShieldCheck, title: "ফেক ডিটেকশন", desc: "ভুয়া বায়ার ব্লক" },
  { icon: GripVertical, title: "ড্র্যাগ & ড্রপ", desc: "ভিজুয়াল পেজ এডিটর" },
  { icon: BarChart3, title: "অ্যাডভান্সড রিপোর্ট", desc: "ব্যবসার গ্রোথ অ্যানালিসিস" },
  { icon: ShoppingBag, title: "অ্যাবানডনড কার্ড", desc: "হারানো সেল রিকভারি" },
  { icon: Smartphone, title: "মোবাইল রেসপন্সিভ", desc: "সব ডিভাইসে পারফেক্ট" },
];

const QuickFeatures = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            একই প্ল্যাটফর্মে সব সমাধান
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            ১০টা ভিন্ন ভিন্ন টুল ব্যবহার করার দিন শেষ। সেলফেব সব এক ড্যাশবোর্ডে নিয়ে এসেছে।
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <item.icon size={28} className="text-primary mb-3" />
              <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFeatures;
