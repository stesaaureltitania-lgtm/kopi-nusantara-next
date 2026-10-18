/* eslint-disable @next/next/no-img-element */
"use client";

import { JSX, useState, useEffect } from "react";

export default function Home(): JSX.Element {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>("beranda");

  // Ini utk deteksi scroll tombol Panah Atas & Navigasi Aktif
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      const sections = ["beranda", "menu", "tentang", "faq", "kontak"];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main>
      {/* Ini header Identitas Mahasiswanya */}
      <header className="header">
        {/* NAMA & NIM */}
        <div 
          style={{ 
            backgroundColor: "#3d2314", 
            color: "#ffffff", 
            borderBottom: "2px solid #d4a373",
            width: "100%",
            padding: "10px 15px",
            textAlign: "center"
          }}
        >
          <h2 style={{ margin: "0 0 2px 0", fontSize: "1.1rem", fontWeight: "bold", color: "#ffffff", letterSpacing: "0.5px" }}>
            Stesa Aurel Titania
          </h2>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#e0e0e0" }}>
            NIM: 535250074 — Tugas Pertemuan 9 (Next.js Refactor)
          </p>
        </div>

        {/* LALU DISINI ADA NAVBAR UTAMA KOPI NUSANTARA */}
        <div className="navbar-container">
          <a href="#beranda" className="logo"><span className="logo-dot"></span>Kopi Nusantara</a>

          <span id="menu-icon">&#9776;</span>

          <nav className="navbar">
            <a href="#beranda" className={activeNav === "beranda" ? "active" : ""}>Beranda</a>
            <a href="#menu" className={activeNav === "menu" ? "active" : ""}>Menu</a>
            <a href="#tentang" className={activeNav === "tentang" ? "active" : ""}>Tentang Kami</a>
            <a href="#faq" className={activeNav === "faq" ? "active" : ""}>FAQ</a>
            <a href="#kontak" className={activeNav === "kontak" ? "active" : ""}>Kontak</a>
          </nav>
        </div>
      </header>

      {/* Hero / Banner */}
      <section className="hero" id="beranda">
        <div className="hero-content">
          <p className="hero-label">Sejak 2019 - Diracik di Rumah, Disajikan dengan Hati</p>
          <h1>Secangkir Kehangatan Khas Nusantara</h1>
          <p>Kopi Nusantara menghadirkan biji kopi pilihan dari pelosok Indonesia, diseduh
            langsung setiap hari tanpa bahan pengawet. Nikmati dari layar HP, tablet, atau
            laptop Anda, tampilan kami menyesuaikan di mana pun Anda membuka halaman ini.</p>
          <div className="hero-btn-group">
            <a href="#menu" className="btn btn-solid">Lihat Menu</a>
            <a href="#kontak" className="btn btn-outline">Pesan Sekarang</a>
          </div>
        </div>

        <div className="hero-img">
          <div className="steam">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="cup">
            <div className="cup-foam"></div>
            <div className="cup-handle"></div>
          </div>
        </div>
      </section>

      {/* Konten Utama: Menu */}
      <section className="menu" id="menu">
        <h2 className="heading">Menu Favorit Kami</h2>
        <p className="subheading">Menu andalan yang paling sering dipesan pelanggan.</p>

        <div className="menu-container">
          <div className="menu-box">
            <img 
              src="/images/Kopi Kelapa.jpg" 
              alt="Es Kopi Kelapa" 
              className="menu-img" 
              style={{ cursor: "pointer" }}
              onClick={() => setModalImg("/images/Kopi Kelapa.jpg")}
            />
            <h3>Es Kopi Kelapa</h3>
            <p>Espresso segar berpadu dengan air kelapa muda asli dan sedikit gula aren.</p>
            <span className="price">Rp 22.000</span>
          </div>

          <div className="menu-box">
            <img 
              src="/images/Kopi Guren.jpg" 
              alt="Kopi Susu Gula Aren" 
              className="menu-img" 
              style={{ cursor: "pointer" }}
              onClick={() => setModalImg("/images/Kopi Guren.jpg")}
            />
            <h3>Kopi Susu Gula Aren</h3>
            <p>Perpaduan klasik kopi robusta lokal, susu segar, dan gula aren asli.</p>
            <span className="price">Rp 20.000</span>
          </div>

          <div className="menu-box">
            <img 
              src="/images/americano.jpg" 
              alt="Americano" 
              className="menu-img" 
              style={{ cursor: "pointer" }}
              onClick={() => setModalImg("/images/americano.jpg")}
            />
            <h3>Americano</h3>
            <p>Espresso murni dengan air panas, cocok untuk penikmat kopi hitam.</p>
            <span className="price">Rp 18.000</span>
          </div>

          <div className="menu-box">
            <img 
              src="/images/cappuccino.jpg" 
              alt="Cappuccino" 
              className="menu-img" 
              style={{ cursor: "pointer" }}
              onClick={() => setModalImg("/images/cappuccino.jpg")}
            />
            <h3>Cappuccino</h3>
            <p>Espresso dengan foam susu lembut dan taburan bubuk cokelat.</p>
            <span className="price">Rp 24.000</span>
          </div>

          <div className="menu-box">
            <img 
              src="/images/Kopi Klepon.jpg" 
              alt="Kopi Klepon" 
              className="menu-img" 
              style={{ cursor: "pointer" }}
              onClick={() => setModalImg("/images/Kopi Klepon.jpg")}
            />
            <h3>Kopi Klepon</h3>
            <p>Minuman kopi khas Indonesia dengan rasa manis dari klepon.</p>
            <span className="price">Rp 20.000</span>
          </div>

          <div className="menu-box">
            <img src="/images/Kopi Rarobang.jpeg" alt="Kopi Rarobang" className="menu-img" />
            <h3>Kopi Rarobang</h3>
            <p>Kopi khas Maluku berempah cengkeh dan kayu manis, disajikan dengan taburan kenari.</p>
            <span className="price">Rp 22.000</span>
          </div>

          <div className="menu-box">
            <img src="/images/Kopi Arang.jpg" alt="Kopi Joss Arang" className="menu-img" />
            <h3>Kopi Joss (Arang)</h3>
            <p>Kopi hitam khas yang disajikan unik dengan celupan arang membara pilihan.</p>
            <span className="price">Rp 15.000</span>
          </div>

          <div className="menu-box">
            <img src="/images/Kopi Tubruk.jpg" alt="Kopi Tubruk" className="menu-img" />
            <h3>Kopi Tubruk</h3>
            <p>Seduhan tradisional dengan aroma kuat dan bodi tebal khas warkop Nusantara.</p>
            <span className="price">Rp 12.000</span>
          </div>

          <div className="menu-box">
            <img src="/images/Kopi Klotok.jpg" alt="Kopi Klotok" className="menu-img" />
            <h3>Kopi Klotok</h3>
            <p>Kopi khas Jogja yang direbus bersama bubuknya, menghasilkan rasa pahit gurih yang unik.</p>
            <span className="price">Rp 14.000</span>
          </div>

          <div className="menu-box">
            <img src="/images/Kopi Jahe.jpeg" alt="Kopi Jahe" className="menu-img" />
            <h3>Kopi Jahe</h3>
            <p>Paduan rempah jahe bakar dan kopi hitam yang hangat serta menyegarkan tubuh.</p>
            <span className="price">Rp 17.000</span>
          </div>
        </div>
      </section>

      {/* Konten Utama: Tentang Kami */}
      <section className="about" id="tentang">
        <div className="about-icon">
          <img src="/images/biji-kopi.png" alt="Biji kopi" />
        </div>

        <div className="about-content">
          <h2 className="heading">Tentang Kopi Nusantara</h2>
          <p>Berawal dari dapur rumahan di tahun 2019, Kopi Nusantara tumbuh dari kecintaan
            terhadap biji kopi lokal Indonesia dari Gayo, Toraja, hingga Kintamani.
            Kami percaya secangkir kopi terbaik lahir dari proses yang jujur dan bahan
            yang berkualitas.</p>

          <ul className="about-list">
            <li><span className="dot"></span>Biji kopi pilihan langsung dari petani lokal</li>
            <li><span className="dot"></span>Diseduh segar setiap hari di dapur rumahan kami</li>
            <li><span className="dot"></span>Bisa dipesan kapan saja lewat WhatsApp</li>
          </ul>
        </div>
      </section>

      {/* Konten Utama: FAQ */}
      <section className="faq" id="faq">
        <h2 className="heading">Pertanyaan yang Sering Diajukan</h2>
        <p className="subheading">Beberapa hal yang paling sering ditanyakan pelanggan kami.</p>

        <div className="faq-container">
          <div className="faq-box">
            <h3 className={`faq-question ${activeFaq === 0 ? "active" : ""}`} onClick={() => toggleFaq(0)}>
              Apakah Kopi Nusantara punya toko fisik yang bisa dikunjungi?
            </h3>
            <div className={`faq-answer ${activeFaq === 0 ? "open" : ""}`}>
              <p>Untuk saat ini kami masih beroperasi dari dapur rumahan di Jl. Melati No. 12, Bandung.
                Pemesanan bisa dilakukan lewat WhatsApp, dan pengambilan dapat diatur langsung
                dengan tim kami.</p>
            </div>
          </div>

          <div className="faq-box">
            <h3 className={`faq-question ${activeFaq === 1 ? "active" : ""}`} onClick={() => toggleFaq(1)}>
              Berapa lama waktu pemesanan hingga kopi siap diambil?
            </h3>
            <div className={`faq-answer ${activeFaq === 1 ? "open" : ""}`}>
              <p>Rata-rata pesanan siap dalam 15-20 menit setelah dikonfirmasi, karena setiap
                cangkir diseduh segar begitu ada pesanan masuk.</p>
            </div>
          </div>

          <div className="faq-box">
            <h3 className={`faq-question ${activeFaq === 2 ? "active" : ""}`} onClick={() => toggleFaq(2)}>
              Apakah biji kopi yang digunakan benar-benar dari petani lokal?
            </h3>
            <div className={`faq-answer ${activeFaq === 2 ? "open" : ""}`}>
              <p>Ya. Kami bekerja sama langsung dengan petani dari Gayo, Toraja, dan Kintamani untuk
                menjaga kualitas sekaligus mendukung hasil panen lokal.</p>
            </div>
          </div>

          <div className="faq-box">
            <h3 className={`faq-question ${activeFaq === 3 ? "active" : ""}`} onClick={() => toggleFaq(3)}>
              Apakah tersedia menu tanpa gula atau dengan susu alternatif?
            </h3>
            <div className={`faq-answer ${activeFaq === 3 ? "open" : ""}`}>
              <p>Bisa. Anda dapat menuliskan permintaan khusus seperti tanpa gula, less sugar, atau
                susu oat pada kolom pesan saat menghubungi kami lewat form maupun WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Konten Utama: Kontak */}
      <section className="contact" id="kontak">
        <div className="contact-info">
          <h2 className="heading">Hubungi &amp; Pesan</h2>
          <p>Isi formulir berikut, tim kami akan segera menghubungi Anda kembali.</p>
          <p><b>Alamat:</b> Jl. Melati No. 12, Bandung</p>
          <p><b>WhatsApp:</b> 0812-3456-7890</p>
          <p><b>Jam Buka:</b> Setiap hari, 08.00 - 21.00</p>
        </div>

        <form className="contact-form" action="">
          <div className="input-box">
            <label htmlFor="nama">Nama</label>
            <input type="text" id="nama" name="nama" placeholder="Nama lengkap Anda" />
          </div>

          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="nama@email.com" />
          </div>

          <div className="input-box">
            <label htmlFor="pesan">Pesan</label>
            <textarea id="pesan" name="pesan" rows={5} placeholder="Tuliskan pesanan atau pertanyaan Anda"></textarea>
          </div>

          <input type="submit" value="Kirim Pesan" className="btn btn-solid" />
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Kopi Nusantara. Seluruh hak cipta dilindungi.</p>
      </footer>

      {/* Tombol melayang panah keatas */}
      <a 
        href="#beranda" 
        className={`scroll-top ${showScrollTop ? "show" : ""}`} 
        id="scrollTop"
      >
        &uarr;
      </a>

      {/* Pop-up Fullscreen Gambar */}
      {modalImg && (
        <div 
          className="image-modal" 
          style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            position: "fixed", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%", 
            backgroundColor: "rgba(0,0,0,0.8)", 
            zIndex: 2000 
          }}
          onClick={() => setModalImg(null)}
        >
          <span className="modal-close" style={{ position: "absolute", top: "20px", right: "35px", color: "#fff", fontSize: "40px", cursor: "pointer" }}>
            &times;
          </span>
          <img className="modal-content" src={modalImg} alt="Tampilan Penuh Menu" style={{ maxWidth: "80%", maxHeight: "80%", borderRadius: "12px" }} />
        </div>
      )}
    </main>
  );
}