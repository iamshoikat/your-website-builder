import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  originalYearlyPrice: number;
  features: { text: string; available: boolean }[];
  recommended?: boolean;
}

const plans: Plan[] = [
  {
    name: "Startup",
    description: "ছোট ও নতুন ব্যবসার জন্য উপযুক্ত",
    monthlyPrice: 1000,
    yearlyPrice: 6000,
    originalYearlyPrice: 12000,
    features: [
      { text: "সুপার ফাস্ট ওয়েবসাইট NodeJS & NextJS", available: true },
      { text: "মাসিক অর্ডার লিমিট: 500", available: true },
      { text: "সাপোর্ট ইউজার: 1 জন", available: true },
      { text: "আনলিমিটেড হোস্টিং", available: true },
      { text: "ফেক অর্ডার ট্র্যাকিং", available: true },
      { text: "অটোমেটিক কুরিয়ার বুকিং", available: true },
      { text: "সার্ভার সাইড ট্র্যাকিং: আছে", available: true },
      { text: "API অ্যাক্সেস: নেই", available: false },
      { text: "Extra GTM Server: নেই", available: false },
      { text: "WordPress + Shopify ইন্টিগ্রেশন: নেই", available: false },
    ],
  },
  {
    name: "Regular",
    description: "মাঝারি ও গ্রোথ-ফোকাসড ব্যবসার জন্য",
    monthlyPrice: 1700,
    yearlyPrice: 10000,
    originalYearlyPrice: 20000,
    recommended: true,
    features: [
      { text: "সুপার ফাস্ট ওয়েবসাইট NodeJS & NextJS", available: true },
      { text: "মাসিক অর্ডার লিমিট: 1000", available: true },
      { text: "সাপোর্ট ইউজার: 3 জন", available: true },
      { text: "আনলিমিটেড হোস্টিং", available: true },
      { text: "ফেক অর্ডার ট্র্যাকিং", available: true },
      { text: "অটোমেটিক কুরিয়ার বুকিং", available: true },
      { text: "সার্ভার সাইড ট্র্যাকিং: আছে", available: true },
      { text: "API অ্যাক্সেস: নেই", available: false },
      { text: "Extra GTM Server: আছে", available: true },
      { text: "WordPress + Shopify ইন্টিগ্রেশন: আছে", available: true },
    ],
  },
  {
    name: "Advance",
    description: "বড় ও প্রতিষ্ঠিত ব্যবসার জন্য",
    monthlyPrice: 5000,
    yearlyPrice: 30000,
    originalYearlyPrice: 60000,
    features: [
      { text: "সুপার ফাস্ট ওয়েবসাইট NodeJS & NextJS", available: true },
      { text: "মাসিক অর্ডার লিমিট: Unlimited", available: true },
      { text: "সাপোর্ট ইউজার: 10 জন", available: true },
      { text: "আনলিমিটেড হোস্টিং", available: true },
      { text: "ফেক অর্ডার ট্র্যাকিং", available: true },
      { text: "অটোমেটিক কুরিয়ার বুকিং", available: true },
      { text: "সার্ভার সাইড ট্র্যাকিং: আছে", available: true },
      { text: "API অ্যাক্সেস: আছে", available: true },
      { text: "হোলসেল বিজনেস ফিচার: আছে", available: true },
      { text: "Extra GTM Server: আছে", available: true },
      { text: "WordPress + Shopify ইন্টিগ্রেশন: আছে", available: true },
    ],
  },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            আপনার ব্যবসার জন্য সঠিক প্রাইসিং,
            <br />
            একদম পরিষ্কার ও নির্ভরযোগ্য
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            আপনার ব্যবসার ধরণ অনুযায়ী সেরা প্যাকেজটি বেছে নিন।
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              !isYearly
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            মাসিক
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              isYearly
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            বাৎসরিক (50% ছাড়)
          </button>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl border bg-card p-8 flex flex-col ${
                plan.recommended
                  ? "border-primary shadow-lg shadow-primary/10 ring-1 ring-primary/20"
                  : "border-border"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                    <Zap size={14} /> Recommended
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </div>

              <div className="mb-6">
                {isYearly && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-muted-foreground line-through text-sm">
                      ৳{plan.originalYearlyPrice.toLocaleString()}
                    </span>
                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded">
                      50% OFF
                    </span>
                  </div>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    ৳{isYearly ? plan.yearlyPrice.toLocaleString() : plan.monthlyPrice.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    /{isYearly ? "বছর" : "মাস"}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${
                        feature.available ? "text-primary" : "text-muted-foreground/40"
                      }`}
                    />
                    <span className={feature.available ? "text-foreground" : "text-muted-foreground/60"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.recommended ? "default" : "outline"}
                size="lg"
              >
                সাবস্ক্রাইব করুন
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
