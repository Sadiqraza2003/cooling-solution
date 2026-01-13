import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote, Phone } from "lucide-react";

const testimonials = [
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
    review: "Got my office AC installed by Cooling Solution. Excellent work and very professional team. The installation was clean and they explained everything properly.",
    service: "AC Installation",
  },
  {
    name: "Sunita Devi",
    location: "Bhelupur, Varanasi",
    rating: 5,
    review: "Called them for AC deep cleaning before summer. The service was thorough and my AC is cooling much better now. Very reasonable prices too!",
    service: "Deep Cleaning",
  },
  {
    name: "Amit Verma",
    location: "Ram Nagar, Varanasi",
    rating: 5,
    review: "I've been using their annual maintenance service for 2 years now. Never had any AC problems since. Syed ji and his team are very reliable and trustworthy.",
    service: "Annual Maintenance",
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

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 gradient-frost">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Loved by Our Customers
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Don't just take our word for it. See what our satisfied customers have to say about our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
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

      {/* Stats Section */}
      <section className="py-16 gradient-frost">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "1000+", label: "Happy Customers" },
              { value: "4.9", label: "Average Rating" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "5+", label: "Years of Service" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Experience Our Service?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Join hundreds of satisfied customers in Varanasi. Book your service today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919876543210">
                <Button variant="hero" size="lg">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="heroOutline" size="lg">
                  Book Service
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
