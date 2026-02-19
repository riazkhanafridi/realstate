import { memo } from "react";
import { motion } from "framer-motion";

const stats = [
    { value: "500+", label: "Properties Sold" },
    { value: "1,200+", label: "Happy Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Design Projects" },
];

const StatsSection = memo(function StatsSection() {
    return (
        <section className="bg-primary py-14">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <span className="text-4xl md:text-5xl font-black text-secondary">
                                {stat.value}
                            </span>
                            <span className="text-sm md:text-base font-medium text-white/80 uppercase tracking-wide">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default StatsSection;
