import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import {
  Phone,
  Calendar,
  Wrench,
  Wind,
  Thermometer,
  Shield,
  Clock,
  BadgeCheck,
  Users,
  Zap,
  Home as HomeIcon,
  Building2,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "AC Repair",
    description: "Expert diagnosis and repair for all AC brands and models",
  },
  {
    icon: Wind,
    title: "AC Installation",
    description: "Professional installation with proper setup and testing",
  },
  {
    icon: Thermometer,
    title: "Gas Refilling",
    description: "Quality refrigerant refilling for optimal cooling",
  },
  {
    icon: Shield,
    title: "Deep Cleaning",
    description: "Thorough cleaning for better air quality and efficiency",
  },
  {
    icon: Calendar,
    title: "Annual Maintenance",
    description: "Regular maintenance to extend AC lifespan",
  },
  {
    icon: Building2,
    title: "Commercial Solutions",
    description: "Complete cooling solutions for offices and businesses",
  },
];

const whyChooseUs = [
  {
    icon: BadgeCheck,
    title: "Experienced Technicians",
    description: "Skilled professionals with years of experience",
  },
  {
    icon: Zap,
    title: "Quick Service",
    description: "Same-day service available across Varanasi",
  },
  {
    icon: Clock,
    title: "Affordable Pricing",
    description: "Competitive rates with no hidden charges",
  },
  {
    icon: Users,
    title: "Trusted by Customers",
    description: "Hundreds of satisfied customers in Varanasi",
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

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero min-h-[90vh] flex items-center">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
                <HomeIcon className="w-4 h-4" />
                Serving All Over Varanasi
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Reliable AC Repair & Installation Services in{" "}
              <span className="text-accent">Varanasi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            >
              Fast, Affordable & Professional Cooling Solutions for Home and Office. Get your AC running smoothly with our expert technicians.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="tel:+919876543210">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                  <Calendar className="w-5 h-5" />
                  Book Service
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-wrap justify-center gap-8 text-white/70"
            >
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-accent" />
                <span className="text-sm">Certified Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-sm">Same Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm">Service Warranty</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 gradient-frost">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Complete AC Solutions
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From installation to maintenance, we provide comprehensive cooling services for residential and commercial spaces.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Trusted Cooling Experts in Varanasi
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With years of experience and a commitment to excellence, Cooling Solution has become the go-to choice for AC services in Varanasi. We combine technical expertise with outstanding customer service.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-primary-foreground">
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  Need AC Service?
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Get a free inspection and quote for your AC repair or installation needs. Our team is ready to help!
                </p>
                <div className="space-y-4">
                  <a href="tel:+919876543210" className="block">
                    <Button variant="hero" size="lg" className="w-full">
                      <Phone className="w-5 h-5" />
                      Call: +91 7651878084
                    </Button>
                  </a>
                  <Link to="/contact" className="block">
                    <Button variant="heroOutline" size="lg" className="w-full">
                      Get Free Inspection
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
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
              Ready to Experience the Best AC Service?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Contact us today and let our experts take care of all your cooling needs.
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
                  Book Online
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
