import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Phone,
  Award,
  Users,
  Target,
  Heart,
  CheckCircle2,
  Clock,
  Shield,
} from "lucide-react";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "2000+", label: "Happy Customers" },
  { value: "50+", label: "Daily Services" },
  { value: "100%", label: "Satisfaction" },
];

const values = [
  {
    icon: Award,
    title: "Quality Service",
    description: "We never compromise on the quality of our work",
  },
  {
    icon: Clock,
    title: "Punctuality",
    description: "We respect your time and arrive when promised",
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "Honest pricing with no hidden charges",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "Your satisfaction is our top priority",
  },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              About Varanasi Cooling Solution
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Your trusted partner for all AC and cooling needs in Varanasi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Dedicated to Keeping Varanasi Cool
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Varanasi Cooling Solution is a trusted AC service provider in Varanasi, founded by <strong className="text-foreground">Syed Naqi Haidar</strong>. With a passion for delivering excellent service and years of experience in the cooling industry, we have become the preferred choice for homes and businesses across the city.
                </p>
                <p>
                  We specialize in AC repair, installation, maintenance, and complete Varanasi Cooling Solutions for residential and commercial customers. Our mission is to provide fast, reliable, and affordable cooling services across Varanasi.
                </p>
                <p>
                  What sets us apart is our commitment to customer satisfaction. We believe in doing the job right the first time, using quality parts, and ensuring our customers are completely satisfied with our work.
                </p>
              </div>

              <div className="mt-8">
                <Link to="/contact">
                  <Button variant="default" size="lg">
                    <Phone className="w-5 h-5" />
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-secondary rounded-2xl p-6 text-center"
                >
                  <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 gradient-frost">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide fast, reliable, and affordable cooling services that exceed customer expectations. We aim to be the most trusted AC service provider in Varanasi by delivering exceptional quality and building lasting relationships with our customers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading Varansi Cooling Solutions provider in Varanasi and beyond, known for our expertise, reliability, and commitment to customer satisfaction. We envision a future where every home and office in our service area enjoys optimal comfort.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8">
              Why Customers Trust Us
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                "Experienced & certified technicians",
                "Genuine spare parts and quality service",
                "Transparent pricing with no hidden costs",
                "Quick response and same-day service",
                "Service warranty on all repairs",
                "Available across all areas of Varanasi",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  <Phone className="w-5 h-5" />
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
