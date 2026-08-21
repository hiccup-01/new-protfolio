import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Certificates from './Certificates';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Download, 
  Code, 
  Database, 
  Brain, 
  Layers,
  Cpu,
  Award,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="w-5 h-5 text-emerald-500" />,
      skills: ['Python', 'Java']
    },
    {
      title: 'Web Technologies',
      icon: <Layers className="w-5 h-5 text-teal-500" />,
      skills: ['HTML', 'CSS']
    },
    {
      title: 'Databases & Tools',
      icon: <Database className="w-5 h-5 text-violet-500" />,
      skills: ['MySQL', 'GitHub', 'VS Code']
    },
    {
      title: 'Core Concepts',
      icon: <Cpu className="w-5 h-5 text-emerald-500" />,
      skills: ['Data Structures & Algorithms (DSA)', 'Object-Oriented Programming (OOP)']
    },
    {
      title: 'AI / ML / Computer Vision',
      icon: <Brain className="w-5 h-5 text-teal-500" />,
      skills: ['Artificial Intelligence (AI)', 'Machine Learning (ML)', 'Computer Vision', 'YOLOv3', 'SORT (Object Tracking)']
    }
  ];

  return (
    <div className="min-h-screen bg-[#050607] text-white font-sans selection:bg-emerald-500/30 selection:text-white">
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#home" className="font-heading text-2xl font-bold tracking-tighter text-white">
            BK<span className="text-emerald-500">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-[#a1a8a6] hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a 
              href="/resume/B_Bharath_Kumar_Resume.pdf" 
              download="B_Bharath_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-surface-light border border-white/10 hover:border-emerald-500/50 hover:text-emerald-500 transition-all duration-300"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-[#a1a8a6] hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden glass-nav border-b border-white/10 px-6 py-6 mt-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#a1a8a6] hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/resume/B_Bharath_Kumar_Resume.pdf" 
              download="B_Bharath_Kumar_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-emerald-500 text-black font-semibold mt-2"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-emerald-500/20 text-xs font-medium text-emerald-500 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Opportunities
            </div>

            <p className="text-lg font-medium text-[#a1a8a6] mb-1">Hi, I'm</p>
            
            <h1 className="font-heading text-[clamp(3.2rem,7vw,7.5rem)] font-extrabold tracking-tight leading-[0.95] mb-4">
              BHARATH KUMAR
            </h1>

            <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight text-[#a1a8a6] mb-6">
              AI & ML <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-violet-500 to-teal-500">ENGINEERING STUDENT</span>
            </h2>

            <p className="text-base md:text-lg text-[#a1a8a6] max-w-xl leading-relaxed mb-8">
              Computer Science (AI & ML) student passionate about computer vision, real-time detection systems, and building practical, data-driven applications with Python and Java.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a 
                href="#projects" 
                className="px-6 py-3.5 rounded-full font-medium text-sm bg-gradient-to-r from-emerald-500 via-violet-500 to-teal-500 text-white shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3.5 rounded-full font-medium text-sm glass-card hover:bg-surface-light border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex items-center gap-6 text-[#a1a8a6]">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:bharath94.boggur@gmail.com" className="hover:text-emerald-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl glass-card p-8 flex flex-col justify-between overflow-hidden border border-white/10 group shadow-2xl">
              
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-violet-500 rounded-3xl opacity-20 blur group-hover:opacity-40 transition duration-1000" />
              
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-[#a1a8a6]">ai_vision_pipeline.py</span>
              </div>

              <div className="relative z-10 my-auto text-center py-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center text-2xl font-bold font-heading text-white shadow-inner">
                  BK
                </div>
                <p className="font-heading font-semibold text-lg text-white tracking-wide">AI & ML STUDENT</p>
                <p className="text-xs text-emerald-500 font-mono tracking-wider mt-1">COMPUTER VISION • YOLOv3</p>
              </div>

              <div className="relative z-10 flex flex-wrap justify-center gap-2 pt-4 border-t border-white/10">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface-light border border-white/10 text-white/80 animate-float">Python</span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface-light border border-white/10 text-white/80 animate-float [animation-delay:1s]">Java</span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface-light border border-white/10 text-white/80 animate-float [animation-delay:2s]">MySQL</span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface-light border border-white/10 text-white/80 animate-float [animation-delay:3s]">OpenCV / YOLOv3</span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface-light border border-white/10 text-white/80 animate-float [animation-delay:4s]">DSA</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono tracking-widest text-emerald-500 uppercase">01 / ABOUT ME</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2 mb-12">
            Learning AI,<br />Building Real Systems.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7 space-y-6 text-[#a1a8a6] text-base md:text-lg leading-relaxed">
              <p>
                I am a Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning, with a Diploma background in CSE. I work with Python, Java, and MySQL, and I'm especially interested in real-time computer vision — building systems that can detect and track objects in live video.
              </p>
              <p>
                I'm currently sharpening my skills through hands-on projects and an industrial internship focused on practical ML workflows, data preprocessing, and model training.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                <span className="font-heading text-4xl font-bold text-white block mb-1">01</span>
                <span className="text-xs font-medium text-[#a1a8a6]">Featured AI Project</span>
              </div>
              <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                <span className="font-heading text-4xl font-bold text-white block mb-1">01</span>
                <span className="text-xs font-medium text-[#a1a8a6]">Industrial Internship</span>
              </div>
              <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                <span className="font-heading text-4xl font-bold text-white block mb-1">08+</span>
                <span className="text-xs font-medium text-[#a1a8a6]">Core Technologies</span>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono tracking-widest text-emerald-500 uppercase">02 / TECHNICAL SKILLS</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2 mb-12">
            My Technical Toolkit.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-surface border border-white/10 group-hover:border-emerald-500/30 transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-surface-light border border-white/5 text-[#a1a8a6] group-hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCE & EDUCATION SECTION */}
      <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono tracking-widest text-emerald-500 uppercase">03 / EXPERIENCE & EDUCATION</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2 mb-16">
            Learning By Building.
          </h2>

          <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-12">
            
            <div className="relative">
              <span className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 ring-8 ring-[#050607]" />
              
              <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 max-w-3xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-emerald-500">Nov 2025 — Apr 2026</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-medium">Internship</span>
                </div>
                
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white">Industrial Intern</h3>
                <p className="text-sm text-[#a1a8a6] mb-4">Bheema Institute of Technology and Science (in association with 360DigiTMG), Adoni</p>

                <ul className="space-y-2 text-sm text-[#a1a8a6] list-disc list-inside">
                  <li>Completed an intensive 6-month hands-on industrial internship focused on practical machine learning workflows and software execution.</li>
                  <li>Gained hands-on experience in data preprocessing, software deployment environments, and model training methodologies.</li>
               
                </ul>
              </div>
            </div>

            <div className="relative">
              <span className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-violet-500 ring-8 ring-[#050607]" />

              <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 max-w-3xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-violet-400">Present (2nd Year)</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 font-medium">B.Tech</span>
                </div>

                <h3 className="font-heading text-xl md:text-2xl font-bold text-white">Bachelor of Technology (B.Tech) — CSE (AI & ML)</h3>
                <p className="text-sm text-[#a1a8a6]">Bheema Institute of Technology and Science, Adoni</p>
              </div>
            </div>

            <div className="relative">
              <span className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 ring-8 ring-[#050607]" />

              <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 max-w-3xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-teal-400">2023 — 2026</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 font-medium">Diploma</span>
                </div>

                <h3 className="font-heading text-xl md:text-2xl font-bold text-white">Diploma in Computer Science & Engineering (CSE)</h3>
                <p className="text-sm text-[#a1a8a6] mb-2">Bheema Institute of Technology and Science, Adoni</p>
                <p className="text-xs font-mono text-emerald-500">Aggregate: 71%</p>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono tracking-widest text-emerald-500 uppercase">04 / PROJECTS</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2 mb-12">
            Things I've Built.
          </h2>

          <div className="grid grid-cols-1 gap-8">
            <div className="glass-card rounded-3xl border border-white/10 overflow-hidden hover:border-emerald-500/30 transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                <div className="lg:col-span-5 bg-surface p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden min-h-[260px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-violet-500/10 opacity-50 group-hover:scale-105 transition-transform duration-500" />
                  
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-surface-light border border-white/10 flex items-center justify-center text-emerald-500 shadow-xl">
                      <Brain size={32} />
                    </div>
                    <span className="text-xs font-mono text-emerald-500">COMPUTER VISION PIPELINE</span>
                  </div>
                </div>

                <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-emerald-500">PROJECT 01</span>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mt-1 mb-2">
                      Social Distancing Detection in Real Time with AI
                    </h3>
                    <p className="text-xs font-medium text-violet-400 mb-4">Computer Vision / AI Application</p>

                    <p className="text-sm text-[#a1a8a6] leading-relaxed mb-6">
                      A real-time computer vision pipeline that monitors social distancing parameters using live video feeds. Built using the YOLOv3 deep learning framework for object detection and SORT for target tracking.
                    </p>

                    <ul className="space-y-2 text-xs text-[#a1a8a6] mb-6 list-disc list-inside">
                      <li>YOLOv3 deep learning model for high-accuracy human detection across video frames</li>
                      <li>SORT framework integration for continuous tracking of individuals across successive frames</li>
                      <li>Real-time video feed processing and spatial distance computation</li>
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {['Python', 'YOLOv3', 'SORT', 'Computer Vision'].map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-full text-xs font-mono bg-surface-light border border-white/10 text-white/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium glass-card hover:bg-surface-light border border-white/10 transition-all"
                    >
                      <Github size={14} /> GitHub ↗
                    </a>
                    <a 
                      href="#projects" 
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-all"
                    >
                      View Project ↗
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* TRAINING SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono tracking-widest text-emerald-500 uppercase">05 / TRAINING</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2 mb-12">
            Always Learning.
          </h2>

          <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 max-w-2xl flex items-start gap-4">
            <div className="p-3 rounded-xl bg-surface border border-white/10 text-emerald-500 shrink-0">
              <Award size={24} />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-500">Oct 2025</span>
              <h3 className="font-heading text-xl font-bold text-white mt-0.5">Machine Learning Workshop</h3>
              <p className="text-sm text-[#a1a8a6] mt-2">
                Hands-on technical workshop on foundational ML algorithms and practical model implementations.
              </p>
            </div>
          </div>

          <Certificates />
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono tracking-widest text-emerald-500 uppercase">CONTACT</span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2 mb-6">
                  Let's Build Something Great Together.
                </h2>
                <p className="text-base text-[#a1a8a6] leading-relaxed mb-8">
                  I'm currently focused on growing as an AI & ML engineer and open to entry-level software or AI development roles.
                </p>

                <div className="space-y-4 text-sm text-[#a1a8a6] mb-8">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>bharath94.boggur@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                    <span>+91 6305414247</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-violet-500 shrink-0" />
                    <span>Holagunda, Andhra Pradesh</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[#a1a8a6]">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 rounded-full glass-card hover:text-emerald-500 transition-colors">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 rounded-full glass-card hover:text-emerald-500 transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleFormSubmit} className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 space-y-6">
                
                <div>
                  <label className="block text-xs font-medium text-[#a1a8a6] uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name" 
                    className="w-full px-4 py-3.5 rounded-xl bg-surface border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#a1a8a6] uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com" 
                    className="w-full px-4 py-3.5 rounded-xl bg-surface border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#a1a8a6] uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..." 
                    className="w-full px-4 py-3.5 rounded-xl bg-surface border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-emerald-500 transition-colors text-sm resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'loading'}
                  className="w-full py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-500 via-violet-500 to-teal-500 text-white shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <div className="flex items-center gap-2 text-xs text-emerald-500 bg-emerald-500/10 p-3.5 rounded-xl border border-emerald-500/20">
                    <CheckCircle2 size={16} />
                    <span>Message sent — I'll get back to you soon.</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="flex items-center gap-2 text-xs text-red-400 bg-red-500/10 p-3.5 rounded-xl border border-red-500/20">
                    <AlertCircle size={16} />
                    <span>Something went wrong. Please check your details and try again.</span>
                  </div>
                )}

              </form>
            </div>

          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 text-center text-xs text-[#a1a8a6]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 B. Bharath Kumar. Built with React.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:bharath94.boggur@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
