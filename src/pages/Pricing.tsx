import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Phone,
  Check,
  Sparkles,
  Wrench,
  Wind,
  Thermometer,
  Shield,
  Star,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    name: "AC Deep Cleaning Service",
    price: "₹599",
    description: "Complete internal and external cleaning",
    features: [
      "Filter cleaning & sanitization",
      "Coil cleaning",
      "Drain cleaning",
      "Performance check",
    ],
    popular: true,
  },
  {
    icon: Wrench,
    name: "AC Repair Service",
    price: "₹299",
    priceNote: "onwards",
    description: "Diagnosis and repair of AC issues",
    features: [
      "Problem diagnosis",
      "Component repair",
      "Spare parts extra",
      "Service warranty",
    ],
  },
  {
    icon: Thermometer,
    name: "AC Gas Refilling",
    price: "₹1,499",
    priceNote: "onwards",
    description: "Quality refrigerant refilling",
    features: [
      "Leak detection",
      "Gas top-up or full refill",
      "Pressure testing",
      "Cooling verification",
    ],
  },
  {
    icon: Wind,
    name: "AC Installation",
    price: "₹999",
    priceNote: "onwards",
    description: "Professional installation service",
    features: [
      "Site inspection",
      "Standard installation",
      "Copper piping extra",
      "Testing & demo",
    ],
  },
  {
    icon: Shield,
    name: "Annual Maintenance Contract",
    price: "₹2,499",
    priceNote: "/year",
    description: "Year-round AC care and support",
    features: [
      "2 free services per year",
      "Priority support",
      "10% off on repairs",
      "Gas top-up discount",
    ],
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

const Pricing = () => {
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
              Pricing
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Transparent & Affordable Pricing
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              No hidden charges. Get quality AC services at competitive prices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative bg-background rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg ${service.popular
                  ? "border-primary shadow-card ring-2 ring-primary/20"
                  : "border-border shadow-soft"
                  }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {service.name}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>

                <div className="mb-6">
                  <span className="font-heading text-3xl font-bold text-foreground">
                    {service.price}
                  </span>
                  {service.priceNote && (
                    <span className="text-muted-foreground text-sm ml-1">
                      {service.priceNote}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="block">
                  <Button
                    variant={service.popular ? "hero" : "outline"}
                    className="w-full"
                  >
                    Book Now
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-muted-foreground text-sm mt-12"
          >
            * Prices are indicative and may vary based on AC type, brand, and complexity of work. <br />
            Contact us for an accurate quote.
          </motion.p>
        </div>
      </section>

      {/* Why Our Pricing */}
      <section className="py-16 gradient-frost">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              Why Choose Our Pricing?
            </h2>

            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  title: "No Hidden Charges",
                  description: "What we quote is what you pay. Complete transparency.",
                },
                {
                  title: "Quality Guaranteed",
                  description: "We use genuine parts and provide service warranty.",
                },
                {
                  title: "Best Value",
                  description: "Competitive pricing without compromising on quality.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <h4 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
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
              Need a Custom Quote?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Contact us for a free inspection and personalized quote for your AC needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+917651878084">
                <Button variant="hero" size="lg">
                  <Phone className="w-5 h-5" />
                  Call for Quote
                </Button>
              </a>
              {/* <Link to="/contact">
                <Button variant="heroOutline" size="lg">
                  Get Free Inspection
                </Button>
              </Link> */}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
