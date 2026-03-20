import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed Blog Posts
  const blogPosts = await Promise.all([
    prisma.blogPost.upsert({
      where: { slug: "membangun-budaya-sekolah-inklusif" },
      update: {},
      create: {
        title: "Membangun Budaya Sekolah yang Inklusif dan Berprestasi",
        slug: "membangun-budaya-sekolah-inklusif",
        excerpt: "Refleksi tentang bagaimana menciptakan lingkungan sekolah yang menerima keberagaman dan mendorong setiap siswa untuk berkembang sesuai potensinya.",
        content: `Setiap sekolah memiliki karakteristik unik yang membedakannya dari sekolah lain. Di SMAN 10 Depok, kami berkomitmen untuk membangun budaya sekolah yang tidak hanya mengutamakan prestasi akademik, tetapi juga menciptakan lingkungan yang inklusif dan mendukung bagi setiap siswa.

Kunci utama dalam membangun budaya ini adalah dengan memberikan ruang bagi setiap individu untuk berkembang. Tidak semua siswa memiliki kecerdasan akademik yang sama, namun setiap siswa memiliki potensi yang berbeda yang perlu diasah dan dikembangkan.

Melalui program-program seperti bimbingan konseling, ekstrakurikuler yang beragam, dan kegiatan pengembangan karakter, kami berusaha memastikan bahwa setiap siswa merasa diterima dan dihargai di komunitas sekolah kita.`,
        category: "Kepemimpinan",
        imageUrl: "/images/program-science-lab.png",
        published: true,
        featured: true,
        publishedAt: new Date("2024-12-15"),
      },
    }),
    prisma.blogPost.upsert({
      where: { slug: "revolusi-pembelajaran-era-digital" },
      update: {},
      create: {
        title: "Revolusi Pembelajaran di Era Digital",
        slug: "revolusi-pembelajaran-era-digital",
        excerpt: "Bagaimana teknologi dapat menjadi katalis perubahan positif dalam dunia pendidikan, tanpa menghilangkan nilai-nilai kemanusiaan.",
        content: `Di era digital seperti sekarang, dunia pendidikan menghadapi tantangan dan peluang yang sangat besar. Teknologi informasi telah mengubah cara kita mengajar dan cara siswa belajar.

Namun, di balik semua kemajuan teknologi ini, kita tidak boleh melupakan nilai-nilai kemanusiaan yang menjadi inti dari pendidikan. Interaksi antara guru dan siswa, pembentukan karakter, dan pengembangan soft skills tetap menjadi aspek yang tidak bisa digantikan oleh teknologi.

Di SMAN 10 Depok, kami berusaha untuk mengintegrasikan teknologi dalam pembelajaran tanpa kehilangan sentuhan manusiawi yang membuat pendidikan menjadi bermakna.`,
        category: "Pendidikan",
        imageUrl: "/images/gallery-students-library.png",
        published: true,
        featured: false,
        publishedAt: new Date("2024-12-10"),
      },
    }),
    prisma.blogPost.upsert({
      where: { slug: "merdeka-belajar-peluang-tantangan" },
      update: {},
      create: {
        title: "Merdeka Belajar: Peluang dan Tantangan",
        slug: "merdeka-belajar-peluang-tantangan",
        excerpt: "Analisis mendalam tentang implementasi Kurikulum Merdeka dan dampaknya terhadap ekosistem pendidikan di Indonesia.",
        content: `Kurikulum Merdeka yang dicanangkan oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi membawa angin segar bagi dunia pendidikan Indonesia. Konsep pembelajaran yang lebih fleksibel dan berpusat pada siswa ini memberikan keleluasaan bagi sekolah untuk mengembangkan kurikulum yang sesuai dengan kebutuhan dan karakteristik siswanya.

Sebagai kepala sekolah, saya melihat ini sebagai peluang besar untuk menciptakan pembelajaran yang lebih bermakna dan kontekstual. Namun, tentu ada tantangan dalam implementasinya, terutama terkait kesiapan infrastruktur dan kompetensi guru.

Dengan persiapan yang matang dan kolaborasi antara semua pemangku kepentingan, saya yakin kita dapat memaksimalkan peluang dari Kurikulum Merdeka ini.`,
        category: "Kebijakan",
        imageUrl: "/images/hero-school-life.png",
        published: true,
        featured: false,
        publishedAt: new Date("2024-12-05"),
      },
    }),
    prisma.blogPost.upsert({
      where: { slug: "sepanjang-jalan-pendidikan" },
      update: {},
      create: {
        title: "Sepanjang Jalan Pendidikan: Catatan Seorang Guru",
        slug: "sepanjang-jalan-pendidikan",
        excerpt: "Perjalanan 25 tahun mengabdi di dunia pendidikan telah mengajarkan saya bahwa setiap anak memiliki cerita dan potensi yang unik.",
        content: `Sudah lebih dari 25 tahun saya mengabdikan diri di dunia pendidikan. Perjalanan ini telah membawa saya melalui berbagai pengalaman berharga, dari menjadi guru muda yang penuh semangat hingga kini dipercaya memimpin sebuah sekolah unggulan.

Sepanjang perjalanan ini, ada satu pelajaran yang terus saya pegang: setiap anak adalah unik. Tidak ada dua siswa yang persis sama dalam cara belajar, minat, maupun potensinya. Tugas kita sebagai pendidik adalah membantu setiap siswa menemukan dan mengembangkan potensi terbaik mereka.

Kepada para guru muda, saya ingin menyampaikan bahwa mendidik adalah pekerjaan hati. Kesabaran, ketulusan, dan cinta kepada anak didik adalah bekal utama dalam perjalanan ini.`,
        category: "Refleksi",
        imageUrl: "/images/principal-portrait.png",
        published: true,
        featured: false,
        publishedAt: new Date("2024-11-28"),
      },
    }),
  ]);

  console.log(`Created ${blogPosts.length} blog posts`);

  // Seed Programs
  const programs = await Promise.all([
    prisma.program.upsert({
      where: { slug: "program-literasi-sekolah" },
      update: {},
      create: {
        title: "Program Literasi Sekolah",
        slug: "program-literasi-sekolah",
        description: "Program peningkatan minat baca dan kemampuan literasi siswa melalui perpustakaan modern dan kegiatan membaca rutin.",
        content: "Program literasi sekolah ini dirancang untuk meningkatkan minat baca dan kemampuan literasi siswa melalui berbagai kegiatan seperti pojok baca, jam membaca bersama, dan lomba literasi.",
        category: "Akademik",
        imageUrl: "/images/gallery-students-library.png",
        featured: true,
        order: 1,
      },
    }),
    prisma.program.upsert({
      where: { slug: "laboratorium-sains-terpadu" },
      update: {},
      create: {
        title: "Laboratorium Sains Terpadu",
        slug: "laboratorium-sains-terpadu",
        description: "Fasilitas laboratorium modern untuk mendukung pembelajaran sains, teknologi, dan penelitian siswa.",
        content: "Laboratorium sains terpadu kami dilengkapi dengan peralatan modern untuk mendukung pembelajaran dan penelitian siswa di bidang sains dan teknologi.",
        category: "Fasilitas",
        imageUrl: "/images/program-science-lab.png",
        featured: true,
        order: 2,
      },
    }),
    prisma.program.upsert({
      where: { slug: "ekstrakurikuler-seni-budaya" },
      update: {},
      create: {
        title: "Ekstrakurikuler Seni & Budaya",
        slug: "ekstrakurikuler-seni-budaya",
        description: "Pengembangan bakat seni dan pelestarian budaya melalui berbagai kegiatan ekstrakurikuler.",
        content: "Program ekstrakurikuler seni dan budaya bertujuan untuk mengembangkan bakat siswa sekaligus melestarikan kekayaan budaya Indonesia.",
        category: "Ekstrakurikuler",
        imageUrl: "/images/program-extracurricular.png",
        featured: true,
        order: 3,
      },
    }),
    prisma.program.upsert({
      where: { slug: "penghargaan-prestasi-siswa" },
      update: {},
      create: {
        title: "Penghargaan Prestasi Siswa",
        slug: "penghargaan-prestasi-siswa",
        description: "Program apresiasi dan pengembangan siswa berprestasi dalam berbagai bidang akademik dan non-akademik.",
        content: "Program penghargaan prestasi siswa dirancang untuk mengapresiasi dan mendorong siswa dalam meraih prestasi di berbagai bidang.",
        category: "Prestasi",
        imageUrl: "/images/gallery-achievement.png",
        featured: true,
        order: 4,
      },
    }),
  ]);

  console.log(`Created ${programs.length} programs`);

  // Seed Gallery Images
  const galleryImages = await Promise.all([
    prisma.galleryImage.upsert({
      where: { id: "gallery-1" },
      update: {},
      create: {
        id: "gallery-1",
        title: "Interaksi di Kelas",
        description: "Kegiatan pembelajaran interaktif di kelas dengan bimbingan guru.",
        imageUrl: "/images/hero-school-life.png",
        category: "Kegiatan Belajar",
        featured: true,
        order: 1,
      },
    }),
    prisma.galleryImage.upsert({
      where: { id: "gallery-2" },
      update: {},
      create: {
        id: "gallery-2",
        title: "Upacara Bendera",
        description: "Kegiatan upacara bendera rutin setiap Senin di halaman sekolah.",
        imageUrl: "/images/gallery-ceremony.png",
        category: "Kegiatan Sekolah",
        featured: true,
        order: 2,
      },
    }),
    prisma.galleryImage.upsert({
      where: { id: "gallery-3" },
      update: {},
      create: {
        id: "gallery-3",
        title: "Belajar di Perpustakaan",
        description: "Siswa belajar mandiri dan berkelompok di perpustakaan sekolah.",
        imageUrl: "/images/gallery-students-library.png",
        category: "Kegiatan Belajar",
        featured: true,
        order: 3,
      },
    }),
    prisma.galleryImage.upsert({
      where: { id: "gallery-4" },
      update: {},
      create: {
        id: "gallery-4",
        title: "Penghargaan Prestasi",
        description: "Penyerahan penghargaan kepada siswa berprestasi.",
        imageUrl: "/images/gallery-achievement.png",
        category: "Prestasi",
        featured: true,
        order: 4,
      },
    }),
    prisma.galleryImage.upsert({
      where: { id: "gallery-5" },
      update: {},
      create: {
        id: "gallery-5",
        title: "Praktikum Laboratorium",
        description: "Kegiatan praktikum di laboratorium sains sekolah.",
        imageUrl: "/images/program-science-lab.png",
        category: "Fasilitas",
        featured: false,
        order: 5,
      },
    }),
    prisma.galleryImage.upsert({
      where: { id: "gallery-6" },
      update: {},
      create: {
        id: "gallery-6",
        title: "Kegiatan Ekstrakurikuler",
        description: "Siswa berpartisipasi dalam kegiatan ekstrakurikuler seni tradisional.",
        imageUrl: "/images/program-extracurricular.png",
        category: "Ekstrakurikuler",
        featured: false,
        order: 6,
      },
    }),
  ]);

  console.log(`Created ${galleryImages.length} gallery images`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
