// Multi-language Data
      const content = {
        id: {
          "hero-tag": "Resonansi Distorsi Jiwa",
          "history-title": "Sejarah Band",
          "personnel-title": "Anggota Band",
          "list-title": "Daftar Lagu",
          "music-title": "Rilisan Terbaru",
          "gigs-title": "Jadwal Manggung",
          "booking-title": "Booking Band",
          "booking-sub": "Bawa Energi Rock ke Event Anda",
          "contact-title": "Kontak & Sosial Media",
        },
        en: {
          "hero-tag": "Resonance of Soul Distortion",
          "history-title": "Band History",
          "personnel-title": "Band Members",
          "list-title": "Setlist Repertoire",
          "music-title": "Latest Release",
          "gigs-title": "Live Schedule",
          "booking-title": "Book The Band",
          "booking-sub": "Bring The Rock Energy to Your Event",
          "contact-title": "Contact & Socials",
        },
      };

      let currentLang = "id";

      function toggleLanguage() {
        currentLang = currentLang === "id" ? "en" : "id";
        document.getElementById("langBtn").innerText =
          currentLang === "id" ? "EN" : "ID";

        document.querySelectorAll("[data-key]").forEach((el) => {
          const key = el.getAttribute("data-key");
          el.innerText = content[currentLang][key];
        });

        // Update specific sections
        if (currentLang === "en") {
          document.getElementById("hero-tag").innerText =
            content.en["hero-tag"];
          document.getElementById("history-text").innerHTML = `
                    <p>Cross Out Silence was formed in 2018 in Jakarta. Born from the vision of four long-time friends to create music that blends 90s Alternative Rock energy with atmospheric modern vibes.</p>
                    <p>After years of navigating the independent scene, we have released two studio albums and performed at various national music festivals, bringing a message of courage through every distortion.</p>
                `;
        } else {
          document.getElementById("hero-tag").innerText =
            content.id["hero-tag"];
          document.getElementById("history-text").innerHTML = `
                    <p>Cross Out Silence dibentuk pada tahun 2018 di Jakarta. Berawal dari visi empat kawan lama untuk menciptakan musik yang menggabungkan energi Alternative Rock era 90-an dengan nuansa modern yang atmosferik.</p>
                    <p>Setelah bertahun-tahun merambah skena independen, kami telah merilis dua album studio dan tampil di berbagai festival musik nasional, membawa pesan keberanian dan refleksi diri lewat setiap distorsi.</p>
                `;
        }
      }

      // Booking Form Logic
      function sendToWA() {
        const eo = document.getElementById("eoName").value;
        const contact = document.getElementById("contact").value;
        const date = document.getElementById("date").value;
        const notes = document.getElementById("notes").value;

        if (!eo || !contact) return alert("Mohon lengkapi Nama EO dan Kontak.");

        const text = `Halo Management Cross Out Silence,\n\nSaya *${eo}* ingin melakukan booking band untuk tanggal *${date}*.\nKontak saya: ${contact}\nCatatan: ${notes}`;
        window.open(
          `https://wa.me/628123456789?text=${encodeURIComponent(text)}`
        );
      }

      function sendToEmail() {
        const eo = document.getElementById("eoName").value;
        const contact = document.getElementById("contact").value;
        const body = `Inquiry Booking\nEvent: ${eo}\nKontak: ${contact}\nCatatan: ${
          document.getElementById("notes").value
        }`;
        window.location.href = `mailto:booking@crossoutsilence.com?subject=Booking Inquiry - ${eo}&body=${encodeURIComponent(
          body
        )}`;
      }