import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export const testimonials = [
    {
        name: "Rajesh Kumar",
        location: "Lanka, Varanasi",
        rating: 5,
        review: "Very fast service and professional work. The technician arrived within an hour and fixed my AC perfectly. Highly recommended for anyone in Varanasi!",
        service: "AC Repair",
    },
    {
        name: "Priya Singh",
        location: "Sigra, Varanasi",
        rating: 5,
        review: "Best AC repair service in Varanasi. Affordable and reliable. They were honest about what needed to be fixed and didn't try to overcharge. Will definitely use again.",
        service: "Gas Refilling",
    },
    {
        name: "Mohammad Ali",
        location: "Godowlia, Varanasi",
        rating: 5,
        review: "Got my office AC installed by Varanasi Cooling Solution. Excellent work and very professional team. The installation was clean and they explained everything properly.",
        service: "AC Installation",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-card">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        Testimonials
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
                        What Our Customers Say
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-background rounded-2xl p-6 shadow-card border border-border relative group hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote className="w-12 h-12 text-primary" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-accent text-accent"
                                    />
                                ))}
                            </div>

                            {/* Review */}
                            <p className="text-foreground leading-relaxed mb-6 relative z-10">
                                "{testimonial.review}"
                            </p>

                            {/* Customer Info */}
                            <div className="flex items-center justify-between pt-4 border-t border-border">
                                <div>
                                    <h4 className="font-semibold text-foreground">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                        {testimonial.location}
                                    </p>
                                </div>
                                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                                    {testimonial.service}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
