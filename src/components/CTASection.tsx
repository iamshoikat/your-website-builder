import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-2xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            আজই আপনার ই-কমার্স ব্যবসা শুরু করুন
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            কোনো টেকনিক্যাল দক্ষতার প্রয়োজন নেই। ফ্রি ট্রায়াল দিয়ে শুরু করুন এবং দেখুন কিভাবে সেলফেব আপনার ব্যবসা বদলে দেয়।
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="gap-2 font-semibold"
          >
            ফ্রি ট্রায়াল শুরু করুন <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
