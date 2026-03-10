/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Layout, 
  Rocket, 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  Phone, 
  Globe, 
  Monitor, 
  Search, 
  Clock, 
  Star,
  Menu,
  X,
  ChevronRight,
  ExternalLink,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MapPin
} from 'lucide-react';

// --- Constants ---
const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi p3sCreatives, I'm interested in getting a website built. Can we discuss?");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const SOCIAL_LINKS = [
  { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#' },
  { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#' },
  { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' },
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' },
];

// --- Shared Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#030712]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-1">
          <span className="text-white">p3s</span>
          <span className="gradient-text">Creatives</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-sm font-medium transition-colors ${location.pathname === link.href ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#030712] border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`text-lg font-medium ${location.pathname === link.href ? 'text-white' : 'text-slate-400'}`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <section className="pt-40 pb-20 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-600/10 to-transparent -z-10" />
    <div className="max-w-7xl mx-auto px-6 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-black mb-6"
      >
        {title.split(' ').map((word, i) => (
          <span key={i} className={i === title.split(' ').length - 1 ? 'gradient-text' : ''}>{word} </span>
        ))}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-slate-400 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    </div>
  </section>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              Premium Web Design Agency
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              We Build Websites That <br />
              <span className="gradient-text">Bring Customers</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
              Modern, fast, and conversion-focused websites for businesses. We turn your digital presence into a powerful growth engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all"
              >
                Get Your Website
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                to="/portfolio" 
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg flex items-center justify-center hover:bg-white/10 transition-all"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 flex items-center gap-8 text-slate-500"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">100+</span>
              <span className="text-xs uppercase tracking-wider">Projects Delivered</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">98%</span>
              <span className="text-xs uppercase tracking-wider">Client Satisfaction</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Shapes */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:block absolute top-1/3 right-[15%] w-64 h-64 glass rounded-3xl rotate-12 -z-0"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden lg:block absolute bottom-1/4 right-[5%] w-48 h-48 glass rounded-full -rotate-12 -z-0"
      />
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { title: "Modern UI/UX Design", icon: <Monitor className="w-6 h-6" />, desc: "Aesthetics meets functionality." },
    { title: "Fast Loading Websites", icon: <Zap className="w-6 h-6" />, desc: "Optimized for speed and SEO." },
    { title: "Mobile Optimized", icon: <Smartphone className="w-6 h-6" />, desc: "Perfect on every screen size." },
    { title: "SEO Friendly", icon: <Search className="w-6 h-6" />, desc: "Rank higher on Google search." },
    { title: "Quick Delivery", icon: <Clock className="w-6 h-6" />, desc: "Launch your site in record time." },
    { title: "24/7 Support", icon: <MessageSquare className="w-6 h-6" />, desc: "We are always here to help." }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why <span className="gradient-text">Choose Us</span>?</h2>
            <p className="text-slate-400 mb-10 text-lg">
              We don't just build websites; we build digital experiences that drive results. Our team combines creative design with technical excellence.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-500">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{f.title}</h4>
                    <p className="text-xs text-slate-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[100px]" />
            <div className="relative glass p-6 md:p-8 rounded-[2rem] border-white/10">
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <div className="text-center p-4 md:p-6 rounded-2xl bg-white/5">
                  <span className="text-3xl md:text-4xl font-black gradient-text block mb-2">150+</span>
                  <span className="text-[10px] md:text-sm text-slate-400 uppercase tracking-widest">Happy Clients</span>
                </div>
                <div className="text-center p-4 md:p-6 rounded-2xl bg-white/5">
                  <span className="text-3xl md:text-4xl font-black gradient-text block mb-2">5+</span>
                  <span className="text-[10px] md:text-sm text-slate-400 uppercase tracking-widest">Years Exp.</span>
                </div>
                <div className="text-center p-4 md:p-6 rounded-2xl bg-white/5">
                  <span className="text-3xl md:text-4xl font-black gradient-text block mb-2">100%</span>
                  <span className="text-[10px] md:text-sm text-slate-400 uppercase tracking-widest">Commitment</span>
                </div>
                <div className="text-center p-4 md:p-6 rounded-2xl bg-white/5">
                  <span className="text-3xl md:text-4xl font-black gradient-text block mb-2">24h</span>
                  <span className="text-[10px] md:text-sm text-slate-400 uppercase tracking-widest">Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "7,999",
      features: ["4 Page Website", "Mobile Responsive", "WhatsApp Integration", "1 Month Support"],
      color: "border-white/10",
      button: "bg-white/5 hover:bg-white/10 text-white"
    },
    {
      name: "Professional",
      price: "14,999",
      features: ["6 Page Website", "SEO Setup", "Google Maps", "Contact Form", "3 Months Support"],
      popular: true,
      color: "border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.2)]",
      button: "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
    },
    {
      name: "Premium",
      price: "29,999",
      features: ["10 Page Website", "Speed Optimization", "Blog Setup", "E-commerce Ready", "6 Months Support"],
      color: "border-white/10",
      button: "bg-white/5 hover:bg-white/10 text-white"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple <span className="gradient-text">Pricing</span></h2>
          <p className="text-slate-400">Choose the plan that fits your business needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`relative p-10 rounded-[2.5rem] bg-white/5 border ${plan.color} flex flex-col`}
            >
              {plan.popular && (
                <span className="absolute top-6 right-6 px-3 py-1 rounded-full bg-blue-500 text-[10px] font-black uppercase tracking-widest text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">₹{plan.price}</span>
                <span className="text-slate-500 text-sm">/ project</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in the ${plan.name} plan.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-2xl font-bold transition-all text-center ${plan.button}`}
              >
                Choose {plan.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Rahul Sharma", role: "CEO, TechFlow", text: "p3sCreatives transformed our outdated site into a lead-generating machine. Highly recommended!" },
    { name: "Priya Patel", role: "Founder, Bloom Studio", text: "The attention to detail and modern design aesthetic is exactly what we were looking for." },
    { name: "Ankit Verma", role: "Manager, IronPeak Gym", text: "Fast delivery and excellent support. Our members love the new mobile-friendly website." }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our <span className="gradient-text">Clients Say</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10 relative">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/10 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-1 mb-6">
              <span className="text-white">p3s</span>
              <span className="gradient-text">Creatives</span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-8">
              We build high-performance websites that help businesses grow. From design to deployment, we've got you covered.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500" />
                hello@p3screatives.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-500" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-purple-500 mt-1" />
                123, Creative Hub, <br />
                Okhla Phase III, <br />
                New Delhi, 110020
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} p3sCreatives. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Page Components ---

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Testimonials />
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Ready to transform your digital presence?</h2>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 rounded-full bg-white text-blue-600 font-black text-xl hover:scale-105 transition-transform shadow-2xl"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: "Business Website Design",
      description: "We create professional, high-converting websites tailored to your specific business needs. Our designs are focused on user experience and brand consistency.",
      icon: <Layout className="w-10 h-10" />,
      features: ["Custom UI/UX", "CMS Integration", "SEO Optimized", "Fast Performance"],
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "E-commerce Solutions",
      description: "Launch your online store with a robust, secure, and easy-to-manage platform. We handle everything from product catalogs to payment gateway integration.",
      icon: <Globe className="w-10 h-10" />,
      features: ["Product Management", "Secure Checkout", "Inventory Tracking", "Mobile Shopping"],
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      title: "Landing Page Design",
      description: "Need to drive conversions for a specific campaign? Our landing pages are engineered to capture leads and maximize your ROI.",
      icon: <Rocket className="w-10 h-10" />,
      features: ["A/B Testing Ready", "Lead Capture Forms", "Clear CTA Focus", "Fast Load Times"],
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and running smoothly with our comprehensive maintenance plans. We handle the tech so you can focus on your business.",
      icon: <Clock className="w-10 h-10" />,
      features: ["Regular Backups", "Security Updates", "Performance Tuning", "Priority Support"],
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    }
  ];

  return (
    <div className="bg-[#030712]">
      <PageHeader 
        title="Our Premium Services" 
        subtitle="We provide end-to-end digital solutions to help your business stand out in a crowded online world." 
      />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10`}
              >
                <div className="flex-1">
                  <div className={`w-20 h-20 rounded-3xl ${service.bg} ${service.color} flex items-center justify-center mb-8`}>
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-white font-medium">
                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center">
                  <Monitor className={`w-32 h-32 ${service.color} opacity-20`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const PortfolioPage = () => {
  const projects = [
    {
      title: "IronPeak Gym",
      category: "Fitness & Wellness",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
      desc: "A high-energy website for a premium fitness center with class scheduling and member portal."
    },
    {
      title: "Skyline Realty",
      category: "Real Estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
      desc: "Modern property listing platform with interactive maps and virtual tour integration."
    },
    {
      title: "Lumière Dining",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
      desc: "Elegant online presence for a fine-dining restaurant featuring online reservations and digital menus."
    },
    {
      title: "TechNova Solutions",
      category: "SaaS / Tech",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      desc: "Clean, professional landing page for a software company with focus on feature showcase."
    },
    {
      title: "Bloom Florals",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=1200",
      desc: "Vibrant online shop for a boutique florist with seamless checkout and delivery tracking."
    },
    {
      title: "Dr. Smith Dental",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
      desc: "Trust-focused medical website with appointment booking and patient resources."
    }
  ];

  return (
    <div className="bg-[#030712]">
      <PageHeader 
        title="Our Featured Portfolio" 
        subtitle="Explore our latest work and see how we've helped businesses like yours achieve digital excellence." 
      />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 border border-white/10">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a 
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-2 scale-90 group-hover:scale-100 transition-transform"
                    >
                      View Live Site <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="px-4">
                  <span className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const PricingPage = () => {
  return (
    <div className="bg-[#030712]">
      <PageHeader 
        title="Simple Transparent Pricing" 
        subtitle="No hidden fees. No surprises. Just high-quality web design at competitive prices." 
      />
      <Pricing />
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Need a Custom Solution?</h2>
          <p className="text-slate-400 mb-10 text-lg">
            If our standard plans don't fit your needs, we can create a custom package specifically for your business.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all"
          >
            Request a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="bg-[#030712]">
      <PageHeader 
        title="Get In Touch" 
        subtitle="Have a project in mind? We'd love to hear from you. Reach out via any of the channels below." 
      />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-slate-400 mb-4 text-sm">Our team will respond within 24 hours.</p>
                <a href="mailto:hello@p3screatives.com" className="text-white font-bold hover:text-blue-400 transition-colors">hello@p3screatives.com</a>
              </div>

              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-slate-400 mb-4 text-sm">Instant support for quick queries.</p>
                <span className="text-white font-bold">+91 98765 43210</span>
              </a>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">Our Office</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  123, Creative Hub, <br />
                  Okhla Phase III, <br />
                  New Delhi, 110020, India
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass p-10 md:p-12 rounded-[3rem] border-white/10">
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400 ml-1">Full Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">Service Interested In</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                      <option className="bg-[#030712]">Business Website</option>
                      <option className="bg-[#030712]">E-commerce Store</option>
                      <option className="bg-[#030712]">Landing Page</option>
                      <option className="bg-[#030712]">Website Redesign</option>
                      <option className="bg-[#030712]">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                    <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Tell us about your project goals..."></textarea>
                  </div>
                  <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Social Media Links */}
              <div className="mt-12 text-center">
                <h4 className="text-slate-400 font-bold mb-8 uppercase tracking-widest text-xs">Follow Us On Social Media</h4>
                <div className="flex justify-center gap-6">
                  {SOCIAL_LINKS.map((social) => (
                    <a 
                      key={social.name} 
                      href={social.href} 
                      className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:scale-110 transition-all"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="font-sans min-h-screen bg-[#030712] text-white">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform group"
          aria-label="Chat on WhatsApp"
        >
          <Phone className="w-8 h-8 text-white fill-white" />
          <span className="absolute right-full mr-4 px-4 py-2 rounded-lg bg-white text-black text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
            Chat with us!
          </span>
        </a>
      </div>
    </Router>
  );
}
