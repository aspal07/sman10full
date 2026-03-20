"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, GraduationCap, BookOpen, Users, Trophy, 
  Mail, Phone, MapPin, Calendar, ArrowRight, Quote,
  ChevronDown, ExternalLink, Send, Instagram, Youtube,
  Clock, Target, Heart, Lightbulb, ArrowUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#tentang", label: "Tentang" },
    { href: "#pemikiran", label: "Pemikiran" },
    { href: "#program", label: "Program" },
    { href: "#galeri", label: "Galeri" },
    { href: "#kontak", label: "Kontak" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              scrolled ? "bg-[var(--navy)]" : "bg-white/20 backdrop-blur-sm"
            }`}>
              <GraduationCap className={`w-6 h-6 ${scrolled ? "text-white" : "text-white"}`} />
            </div>
            <div className={`hidden sm:block ${scrolled ? "text-[var(--navy)]" : "text-white"}`}>
              <p className="font-serif-display font-bold text-lg leading-tight">Asep Panji Lesmana</p>
              <p className="text-xs opacity-80">Kepala Sekolah SMAN 10 Depok</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[var(--gold)] ${
                  scrolled ? "text-[var(--navy)]" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? "text-[var(--navy)]" : "text-white"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container-wide py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 rounded-lg text-[var(--navy)] hover:bg-[var(--cream-dark)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-school-life.png"
          alt="Kehidupan sekolah SMAN 10 Depok"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/70 via-[var(--navy)]/50 to-[var(--navy)]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="mb-6 bg-white/10 border-white/30 text-white">
            <GraduationCap className="w-4 h-4 mr-2" />
            SMAN 10 Depok
          </Badge>
          
          <h1 className="font-serif-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Asep Panji Lesmana
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Kepala Sekolah SMAN 10 Depok
          </p>
          
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px flex-1 bg-[var(--gold)]/50" />
              <Quote className="w-8 h-8 text-[var(--gold)]" />
              <div className="h-px flex-1 bg-[var(--gold)]/50" />
            </div>
            <blockquote className="font-serif-display text-xl md:text-2xl italic text-[var(--cream)] leading-relaxed">
              &ldquo;Pendidikan bukan sekadar menanamkan ilmu, tetapi menanamkan harapan dan membangun karakter generasi penerus bangsa.&rdquo;
            </blockquote>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold)]/90 px-8">
              Mengenal Lebih Dekat
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
              Lihat Program
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-white/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const achievements = [
    { number: "25+", label: "Tahun Pengalaman" },
    { number: "5,000+", label: "Alumni Berprestasi" },
    { number: "50+", label: "Penghargaan" },
    { number: "100%", label: "Dedikasi" },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Visi Pendidikan",
      description: "Membangun generasi yang cerdas, berkarakter, dan berdaya saing global dengan tetap berakar pada nilai-nilai budaya Indonesia."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Kepemimpinan",
      description: "Memimpin dengan hati, mendengarkan dengan empati, dan bertindak dengan integritas untuk kemajuan bersama."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovasi",
      description: "Terus berinovasi dalam metode pembelajaran untuk menciptakan lingkungan pendidikan yang inspiratif dan efektif."
    }
  ];

  return (
    <section id="tentang" className="section-padding bg-[var(--cream)]">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-[var(--navy)] rounded-2xl transform rotate-3" />
              <Image
                src="/images/principal-portrait.png"
                alt="Asep Panji Lesmana, Kepala Sekolah SMAN 10 Depok"
                fill
                className="object-cover rounded-2xl relative z-10"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 lg:right-0 bg-white rounded-xl shadow-xl p-6 z-20 max-w-xs"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-[var(--gold)]" />
                <span className="text-sm font-medium text-[var(--navy)]">Kepala Sekolah</span>
              </div>
              <p className="text-xs text-[var(--warm-grey)]">SMAN 10 Depok sejak 2018</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-[var(--navy)]/10 text-[var(--navy)]">Profil</Badge>
            <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-6">
              Tentang Saya
            </h2>
            
            <div className="space-y-4 text-[var(--warm-grey)] leading-relaxed">
              <p>
                Perkenalkan, saya <strong className="text-[var(--navy)]">Asep Panji Lesmana</strong>, 
                seorang pendidik yang telah mengabdikan lebih dari dua dekade untuk kemajuan pendidikan 
                di Indonesia. Saat ini, saya dipercaya memimpin SMAN 10 Depok, salah satu sekolah 
                menengah atas unggulan di Jawa Barat.
              </p>
              <p>
                Bagi saya, pendidikan bukan sekadar transfer ilmu pengetahuan. Lebih dari itu, 
                pendidikan adalah tentang membentuk karakter, membangun mimpi, dan menyiapkan 
                generasi penerus bangsa yang tidak hanya cerdas secara akademis, tetapi juga 
                memiliki integritas dan kepedulian sosial yang tinggi.
              </p>
              <p>
                Setiap hari, saya berusaha untuk menjadi pemimpin yang dekat dengan siswa, 
                guru, dan seluruh warga sekolah. Karena saya percaya, kepemimpinan yang efektif 
                dimulai dari kemampuan untuk mendengar dan memahami kebutuhan setiap individu 
                dalam komunitas sekolah.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="text-center p-4 rounded-xl bg-white/50"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--gold)]/20 flex items-center justify-center mx-auto mb-3 text-[var(--navy)]">
                    {value.icon}
                  </div>
                  <h4 className="font-semibold text-[var(--navy)] text-sm mb-1">{value.title}</h4>
                  <p className="text-xs text-[var(--warm-grey)]">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {achievements.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-sm"
            >
              <p className="font-serif-display text-3xl md:text-4xl font-bold text-[var(--navy)] mb-1">
                {stat.number}
              </p>
              <p className="text-sm text-[var(--warm-grey)]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Blog Section
function BlogSection() {
  const articles = [
    {
      id: 1,
      category: "Kepemimpinan",
      title: "Membangun Budaya Sekolah yang Inklusif dan Berprestasi",
      excerpt: "Refleksi tentang bagaimana menciptakan lingkungan sekolah yang menerima keberagaman dan mendorong setiap siswa untuk berkembang sesuai potensinya.",
      date: "15 Desember 2024",
      readTime: "8 menit",
      featured: true
    },
    {
      id: 2,
      category: "Pendidikan",
      title: "Revolusi Pembelajaran di Era Digital",
      excerpt: "Bagaimana teknologi dapat menjadi katalis perubahan positif dalam dunia pendidikan, tanpa menghilangkan nilai-nilai kemanusiaan.",
      date: "10 Desember 2024",
      readTime: "6 menit",
      featured: false
    },
    {
      id: 3,
      category: "Kebijakan",
      title: "Merdeka Belajar: Peluang dan Tantangan",
      excerpt: "Analisis mendalam tentang implementasi Kurikulum Merdeka dan dampaknya terhadap ekosistem pendidikan di Indonesia.",
      date: "5 Desember 2024",
      readTime: "10 menit",
      featured: false
    },
    {
      id: 4,
      category: "Refleksi",
      title: "Sepanjang Jalan Pendidikan: Catatan Seorang Guru",
      excerpt: "Perjalanan 25 tahun mengabdi di dunia pendidikan telah mengajarkan saya bahwa setiap anak memiliki cerita dan potensi yang unik.",
      date: "28 November 2024",
      readTime: "7 menit",
      featured: false
    }
  ];

  const featuredArticle = articles.find(a => a.featured);
  const otherArticles = articles.filter(a => !a.featured);

  return (
    <section id="pemikiran" className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-[var(--forest)]/10 text-[var(--forest)]">Blog & Pemikiran</Badge>
          <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-4">
            Pemikiran & Refleksi
          </h2>
          <p className="text-[var(--warm-grey)] max-w-2xl mx-auto">
            Tulisan tentang pendidikan, kepemimpinan, dan perjalanan dalam membangun generasi yang lebih baik.
          </p>
        </motion.div>

        {/* Featured Article */}
        {featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="/images/program-science-lab.png"
                    alt={featuredArticle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-[var(--navy)]">{featuredArticle.category}</Badge>
                </div>
                <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="font-serif-display text-2xl md:text-3xl font-bold text-[var(--navy)] mb-4 group-hover:text-[var(--forest)] transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-[var(--warm-grey)] mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-[var(--warm-grey)]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Other Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{article.category}</Badge>
                  <CardTitle className="text-lg group-hover:text-[var(--forest)] transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                  <div className="flex items-center gap-4 mt-4 text-xs text-[var(--warm-grey)]">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button variant="outline" className="border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white">
            Lihat Semua Artikel
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Programs Section
function ProgramsSection() {
  const programs = [
    {
      title: "Program Literasi Sekolah",
      description: "Program peningkatan minat baca dan kemampuan literasi siswa melalui perpustakaan modern dan kegiatan membaca rutin.",
      image: "/images/gallery-students-library.png",
      category: "Akademik",
      status: "Berlangsung"
    },
    {
      title: "Laboratorium Sains Terpadu",
      description: "Fasilitas laboratorium modern untuk mendukung pembelajaran sains, teknologi, dan penelitian siswa.",
      image: "/images/program-science-lab.png",
      category: "Fasilitas",
      status: "Aktif"
    },
    {
      title: "Ekstrakurikuler Seni & Budaya",
      description: "Pengembangan bakat seni dan pelestarian budaya melalui berbagai kegiatan ekstrakurikuler.",
      image: "/images/program-extracurricular.png",
      category: "Ekstrakurikuler",
      status: "Berlangsung"
    },
    {
      title: "Penghargaan Prestasi Siswa",
      description: "Program apresiasi dan pengembangan siswa berprestasi dalam berbagai bidang akademik dan non-akademik.",
      image: "/images/gallery-achievement.png",
      category: "Prestasi",
      status: "Tahunan"
    }
  ];

  return (
    <section id="program" className="section-padding bg-[var(--cream)]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-[var(--gold)]/20 text-[var(--navy)]">Program & Kegiatan</Badge>
          <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-4">
            Program Unggulan
          </h2>
          <p className="text-[var(--warm-grey)] max-w-2xl mx-auto">
            Berbagai program dan kegiatan yang dirancang untuk mengembangkan potensi siswa secara holistik.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all group cursor-pointer h-full">
                <div className="relative h-48">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-[var(--navy)]">{program.category}</Badge>
                    <Badge variant="outline" className="bg-white/90 text-[var(--navy)]">{program.status}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif-display text-xl font-bold text-[var(--navy)] mb-2 group-hover:text-[var(--forest)] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-[var(--warm-grey)] text-sm">{program.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* School Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-[var(--navy)] rounded-2xl text-white"
        >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-serif-display text-4xl font-bold text-[var(--gold)]">1,200+</p>
              <p className="text-sm opacity-80 mt-1">Siswa Aktif</p>
            </div>
            <div>
              <p className="font-serif-display text-4xl font-bold text-[var(--gold)]">85+</p>
              <p className="text-sm opacity-80 mt-1">Tenaga Pendidik</p>
            </div>
            <div>
              <p className="font-serif-display text-4xl font-bold text-[var(--gold)]">15+</p>
              <p className="text-sm opacity-80 mt-1">Ekstrakurikuler</p>
            </div>
            <div>
              <p className="font-serif-display text-4xl font-bold text-[var(--gold)]">A</p>
              <p className="text-sm opacity-80 mt-1">Akreditasi</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Gallery Section
function GallerySection() {
  const images = [
    {
      src: "/images/hero-school-life.png",
      title: "Interaksi di Kelas",
      category: "Kegiatan Belajar"
    },
    {
      src: "/images/gallery-ceremony.png",
      title: "Upacara Bendera",
      category: "Kegiatan Sekolah"
    },
    {
      src: "/images/gallery-students-library.png",
      title: "Belajar di Perpustakaan",
      category: "Kegiatan Belajar"
    },
    {
      src: "/images/gallery-achievement.png",
      title: "Penghargaan Prestasi",
      category: "Prestasi"
    },
    {
      src: "/images/program-science-lab.png",
      title: "Praktikum Laboratorium",
      category: "Fasilitas"
    },
    {
      src: "/images/program-extracurricular.png",
      title: "Kegiatan Ekstrakurikuler",
      category: "Ekstrakurikuler"
    }
  ];

  return (
    <section id="galeri" className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-[var(--forest)]/10 text-[var(--forest)]">Galeri</Badge>
          <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-4">
            Dokumentasi Kegiatan
          </h2>
          <p className="text-[var(--warm-grey)] max-w-2xl mx-auto">
            Momen-momen berharga dalam perjalanan pendidikan di SMAN 10 Depok.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <Badge variant="outline" className="bg-white/20 border-white/30 text-white mb-2">
                  {image.category}
                </Badge>
                <p className="text-white font-medium">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="kontak" className="section-padding bg-[var(--cream)]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-[var(--navy)]/10 text-[var(--navy)]">Kontak</Badge>
          <h2 className="font-serif-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--navy)] mb-4">
            Mari Berkolaborasi
          </h2>
          <p className="text-[var(--warm-grey)] max-w-2xl mx-auto">
            Saya terbuka untuk diskusi, kolaborasi, dan pertukaran pemikiran seputar pendidikan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-serif-display text-xl font-bold text-[var(--navy)] mb-4">
                  Informasi Kontak
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--navy)]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[var(--navy)]" />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--navy)]">Alamat</p>
                      <p className="text-sm text-[var(--warm-grey)]">
                        Jl. Raya Nusantara No. 10, Depok, Jawa Barat 16431
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--navy)]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[var(--navy)]" />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--navy)]">Telepon</p>
                      <p className="text-sm text-[var(--warm-grey)]">(021) 7720-1234</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--navy)]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[var(--navy)]" />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--navy)]">Email</p>
                      <p className="text-sm text-[var(--warm-grey)]">asep.panji@sman10depok.sch.id</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div>
              <h4 className="font-medium text-[var(--navy)] mb-4">Ikuti Media Sosial</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Youtube className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-serif-display text-xl font-bold text-[var(--navy)] mb-6">
                  Kirim Pesan
                </h3>
                
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-[var(--forest)]/10 rounded-lg text-[var(--forest)] text-sm"
                  >
                    Terima kasih! Pesan Anda telah terkirim. Saya akan segera merespons.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--navy)] mb-1">
                        Nama Lengkap
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Masukkan nama Anda"
                        required
                        className="border-[var(--border)]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--navy)] mb-1">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@contoh.com"
                        required
                        className="border-[var(--border)]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--navy)] mb-1">
                      Subjek
                    </label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Topik pesan Anda"
                      required
                      className="border-[var(--border)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--navy)] mb-1">
                      Pesan
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tulis pesan Anda di sini..."
                      rows={5}
                      required
                      className="border-[var(--border)] resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[var(--navy)] hover:bg-[var(--navy)]/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Mengirim..."
                    ) : (
                      <>
                        Kirim Pesan
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white py-12">
      <div className="container-wide">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[var(--navy)]" />
              </div>
              <div>
                <p className="font-serif-display font-bold text-lg">Asep Panji Lesmana</p>
                <p className="text-sm opacity-70">Kepala Sekolah SMAN 10 Depok</p>
              </div>
            </div>
            <p className="text-sm opacity-70 max-w-md">
              Mendidik dengan hati, memimpin dengan integritas, dan terus berinovasi untuk 
              masa depan pendidikan Indonesia yang lebih baik.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link href="#tentang" className="hover:text-[var(--gold)] transition-colors">Tentang</Link></li>
              <li><Link href="#pemikiran" className="hover:text-[var(--gold)] transition-colors">Pemikiran</Link></li>
              <li><Link href="#program" className="hover:text-[var(--gold)] transition-colors">Program</Link></li>
              <li><Link href="#galeri" className="hover:text-[var(--gold)] transition-colors">Galeri</Link></li>
              <li><Link href="#kontak" className="hover:text-[var(--gold)] transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Depok, Jawa Barat
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                asep.panji@sman10depok.sch.id
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (021) 7720-1234
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <p>© {new Date().getFullYear()} Asep Panji Lesmana. Semua hak dilindungi.</p>
          <p className="flex items-center gap-2">
            Dibuat dengan <Heart className="w-4 h-4 text-[var(--gold)]" /> untuk pendidikan Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}

// Back to Top Button
function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[var(--navy)] text-white shadow-lg hover:bg-[var(--navy-light)] transition-colors flex items-center justify-center"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <ProgramsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
