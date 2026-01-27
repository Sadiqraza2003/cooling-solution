import { Link } from "react-router-dom";
import { Snowflake, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground dark:bg-background dark:text-foreground dark:border-t dark:border-border transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Snowflake className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl">
                Varanasi Cooling Solution
              </span>
            </div>
            <p className="text-primary-foreground/70 dark:text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for AC repair, installation, and maintenance services in Varanasi. Fast, reliable, and affordable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "Pricing", path: "/pricing" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 dark:text-muted-foreground hover:text-primary-foreground dark:hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {[
                "AC Repair",
                "AC Installation",
                "Gas Refilling",
                "Deep Cleaning",
                "Annual Maintenance",
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 dark:text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/70 dark:text-muted-foreground">Call Us</p>
                  <div className="flex flex-col">
                    <a href="tel:+917651878084" className="text-sm font-medium hover:text-primary transition-colors">
                      +91 76518 78084
                    </a>
                    <a href="tel:+918726931837" className="text-sm font-medium hover:text-primary transition-colors">
                      +91 87269 31837
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/70 dark:text-muted-foreground">Email Us</p>
                  <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`} className="text-sm font-medium hover:text-primary transition-colors">
                    {import.meta.env.VITE_CONTACT_EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-primary-foreground/70 dark:text-muted-foreground">Location</p>
                  <p className="text-sm font-medium">Ram Nagar, Varanasi, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 dark:border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 dark:text-muted-foreground text-sm">
              © {new Date().getFullYear()} Varanasi Cooling Solution. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 dark:text-muted-foreground text-sm">
              Owner: Syed Naqi Haidar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
