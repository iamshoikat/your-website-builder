import { motion } from "framer-motion";
import { Phone, MessageCircle, MessagesSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const aiFeatures = [
  {
    icon: Phone,
    title: "AI Calling (অর্ডার কনফার্মেশন)",
    desc: "কাস্টমারকে অটোমেটিক কল দিয়ে অর্ডার কনফার্ম করে। কনফার্ম হলে অর্ডার স্ট্যাটাস অটো আপডেট।",
    points: ["ভয়েস স্ক্রিপ্ট কাস্টমাইজ", "কনফার্ম/ক্যানসেল/রিশিডিউল রেজাল্ট ক্যাপচার", "কল রিপোর্ট ও অ্যানালিটিক্স"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Message Automation",
    desc: "অর্ডার কনফার্মেশন, কুরিয়ার আপডেট, ডেলিভারি স্ট্যাটাস অটো সেন্ড।",
    points: ["টেমপ্লেট + ভ্যারিয়েবল সাপোর্ট", "সিডিউল ফলোআপ", "কনভার্সেশন হিস্ট্রি"],
  },
  {
    icon: MessagesSquare,
    title: "Messenger Auto Automation",
    desc: "ফেসবুক পেজ ইনবক্সে কাস্টমার মেসেজ এলেই অটো রিপ্লাই।",
    points: ["FAQ + প্রোডাক্ট ভিত্তিক রিপ্লাই", "লিড কুইজ সিস্টেম", "এজেন্ট হ্যান্ডঅফ সাপোর্ট"],
  },
];

const AISection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-sm font-medium text-primary">AI অটোমেশন</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
            অর্ডার কনফার্মেশন থেকে কাস্টমার সাপোর্ট — সবকিছু অটো
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI কলিং, WhatsApp এবং Messenger অটোমেশন দিয়ে আপনার টিমের কাজ কমবে, কনভার্সন বাড়বে।
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {aiFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl p-6 border border-border card-elevated"
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary bg-accent px-3 py-1 rounded-full mb-4">
                <f.icon size={14} /> AI
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{f.desc}</p>
              <ul className="space-y-2">
                {f.points.map((p, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" className="gap-2">
            AI অটোমেশন সেটআপ করুন <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AISection;
