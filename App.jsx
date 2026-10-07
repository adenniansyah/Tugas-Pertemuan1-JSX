import { useState } from 'react'

function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header className="p-3 text-bg-dark sticky-top">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="#"
              onClick={() => setPage('home')}
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                viewBox="0 0 16 16"
                fill="currentColor"
                role="img"
                aria-label="Buku"
              >
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>
              <span className="fs-4 fw-bold">Penjualan Buku</span>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a
                  href="#"
                  onClick={() => setPage('home')}
                  className={`nav-link px-2 ${page === 'home' ? 'text-white' : 'text-white-50'}`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setPage('team')}
                  className={`nav-link px-2 ${page === 'team' ? 'text-white' : 'text-white-50'}`}
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setPage('contact')}
                  className={`nav-link px-2 ${page === 'contact' ? 'text-white' : 'text-white-50'}`}
                >
                  Contact
                </a>
              </li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Register
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== KONTEN HALAMAN ===== */}
      {page === 'home' && <HomePage />}
      {page === 'team' && <TeamPage />}
      {page === 'contact' && <ContactPage />}

      {/* ===== FOOTER ===== */}
      <footer className="py-3 text-bg-dark">
        <div className="container">
          <ul className="nav justify-content-center border-bottom border-secondary pb-3 mb-3">
            <li className="nav-item">
              <a href="#" onClick={() => setPage('home')} className="nav-link px-2 text-white-50">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" onClick={() => setPage('team')} className="nav-link px-2 text-white-50">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#" onClick={() => setPage('contact')} className="nav-link px-2 text-white-50">
                Contact
              </a>
            </li>
          </ul>
          <p className="text-center text-white-50 mb-0">© 2026 TK ADINDA</p>
        </div>
      </footer>
    </>
  )
}

// ===== HALAMAN HOME =====
function HomePage() {
  const books = [
    { title: "The Psychology of Money", desc: "Pelajaran abadi mengenai kekayaan, ketamakan, dan kebahagiaan.", price: "Rp 95.000" },
    { title: "Atomic Habits", desc: "Perubahan kecil yang memberikan hasil luar biasa.", price: "Rp 105.000" },
    { title: "Rich Dad Poor Dad", desc: "Apa yang diajarkan orang kaya kepada anak-anak mereka tentang uang.", price: "Rp 85.000" },
    { title: "The Alchemist", desc: "Sebuah kisah magis tentang mengikuti impian Anda.", price: "Rp 75.000" },
    { title: "Sapiens", desc: "Sejarah singkat umat manusia dari zaman batu hingga era digital.", price: "Rp 120.000" },
    { title: "Laskar Pelangi", desc: "Kisah inspiratif tentang perjuangan dan mimpi anak Belitung.", price: "Rp 80.000" },
  ];

  return (
    <>
      {/* HERO */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg bg-light">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              The Psychology of Money
            </h1>
            <p className="lead text-muted">
              Pelajaran Mengenai Uang dan Kehidupan. Berbeda dari buku keuangan pada umumnya yang penuh rumus, buku ini berfokus pada perilaku manusia terhadap uang. Sukses finansial lebih ditentukan oleh cara kita berpikir daripada seberapa pintar kita secara teknis.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                Beli Sekarang
              </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Detail Buku
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3 w-100"
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800"
              alt="Buku Psychology of Money"
            />
          </div>
        </div>
      </div>

      {/* BEST SELLER */}
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller Bulan Ini</h1>
            <p className="lead text-body-secondary">
              Koleksi buku terbaik yang paling banyak dibaca dan direkomendasikan oleh komunitas kami.
            </p>
          </div>
        </div>
      </section>

      {/* ALBUM / BOOK LIST */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map((book, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm h-100">
                  <img
                    src={`https://picsum.photos/seed/${index + 10}/400/225`}
                    className="card-img-top"
                    alt={book.title}
                    style={{ height: '225px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text flex-grow-1">{book.desc}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <small className="text-muted fw-bold">{book.price}</small>
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-primary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

// ===== HALAMAN TEAM =====
function TeamPage() {
  const teamMembers = [
    {
      name: "Dinda Jufita Hamida",
      role: "Founder & CEO",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      desc: "Pecinta buku sejati yang memiliki visi memajukan literasi di Indonesia.",
    },
    {
      name: "Arjuanda Denniansyah",
      role: "Head of Marketing",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      desc: "Ahli strategi digital yang selalu mencari cara baru untuk menjangkau pembaca.",
    },
    {
      name: "Nur Jihan ",
      role: "Lead Editor",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      desc: "Memastikan setiap buku yang terbit memiliki kualitas tulisan terbaik.",
    },
    {
      name: "Anwar Sanusy",
      role: "Tech Lead",
      img: "https://randomuser.me/api/portraits/men/86.jpg",
      desc: "Pengembang aplikasi web yang membuat pengalaman belanja buku jadi mudah.",
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Tim Kami</h1>
        <p className="lead text-muted">Orang-orang hebat di balik layar Penjualan Buku</p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {teamMembers.map((member, index) => (
          <div className="col" key={index}>
            <div className="card h-100 text-center shadow-sm border-0">
              <div className="card-body">
                <img
                  src={member.img}
                  className="rounded-circle mb-3"
                  width="120"
                  height="120"
                  alt={member.name}
                />
                <h5 className="card-title fw-bold">{member.name}</h5>
                <p className="text-primary small fw-bold text-uppercase">{member.role}</p>
                <p className="card-text text-muted">{member.desc}</p>
              </div>
              <div className="card-footer bg-white border-0 pb-3">
                <a href="#" className="text-decoration-none me-2">🐦</a>
                <a href="#" className="text-decoration-none me-2">💼</a>
                <a href="#" className="text-decoration-none"></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ===== HALAMAN CONTACT =====
function ContactPage() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Hubungi Kami</h1>
        <p className="lead text-muted">Punya pertanyaan atau saran? Kami senang mendengar dari Anda.</p>
      </div>
      <div className="row g-5">
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 p-4 h-100">
            <h3 className="mb-4">Kirim Pesan</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nama Lengkap</label>
                <input type="text" className="form-control" id="name" placeholder="Masukkan nama Anda" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Alamat Email</label>
                <input type="email" className="form-control" id="email" placeholder="nama@email.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Pesan</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Tulis pesan Anda di sini..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 py-2">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 p-4 h-100 bg-light">
            <h3 className="mb-4">Informasi Kontak</h3>
            <ul className="list-unstyled">
              <li className="mb-4 d-flex">
                <span className="fs-4 me-3"></span>
                <div>
                  <h6 className="fw-bold mb-1">Alamat Kantor</h6>
                  <p className="text-muted mb-0">Jl. Literasi No. 123, Jakarta Selatan, Indonesia 12345</p>
                </div>
              </li>
              <li className="mb-4 d-flex">
                <span className="fs-4 me-3">📧</span>
                <div>
                  <h6 className="fw-bold mb-1">Email</h6>
                  <p className="text-muted mb-0">hello@penjualanbuku.com</p>
                </div>
              </li>
              <li className="mb-4 d-flex">
                <span className="fs-4 me-3">📞</span>
                <div>
                  <h6 className="fw-bold mb-1">Telepon</h6>
                  <p className="text-muted mb-0">+62 812 3456 7890</p>
                </div>
              </li>
              <li className="d-flex">
                <span className="fs-4 me-3">⏰</span>
                <div>
                  <h6 className="fw-bold mb-1">Jam Operasional</h6>
                  <p className="text-muted mb-0">Senin - Jumat: 09.00 - 17.00 WIB</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App