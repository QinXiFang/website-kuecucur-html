/* navbar event start */
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};
//kalo klik diluar hamburger-menu maka hamburger-menu akan tertutup
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
})
/* navbar event end */

/* profil event */
const itemsProfil = document.querySelectorAll("#profil .container li");
const textAreaProfil = document.createElement("div");
textAreaProfil.className = "text-area text-center";
textAreaProfil.innerHTML = `<div class="desk-profil blink">klik gambar untuk melihat penjelasan.</div>`;
document.querySelector("#profil .container").insertAdjacentElement("afterend", textAreaProfil);

itemsProfil.forEach(item => {
  const data = item.getAttribute("data-text") || "";
  const parts = data.split("|"); // Pisahkan berdasarkan "|"
  const judul = parts[0] || ""; // Judul adalah bagian pertama
  const deskripsiParts = parts.slice(1); // Sisanya adalah paragraf deskripsi

  item.addEventListener("mouseenter", () => {
    // Buat HTML untuk judul dan paragraf
    let deskripsiHTML = `<h3>${judul}</h3>`;
    deskripsiParts.forEach(paragraf => {
      if (paragraf.trim()) { // Pastikan paragraf tidak kosong
        deskripsiHTML += `<strong><p class="desk-colm" style="font-family: 'Sora', sans-serif;">${paragraf.trim()}</p></strong>`;
      }
    });
    
    textAreaProfil.innerHTML = `<div class="desk-profil">${deskripsiHTML}</div>`;
  });

  item.addEventListener("mouseleave", () => {
    textAreaProfil.innerHTML = `<div class="desk-profil blink">klik gambar untuk melihat penjelasan</div>`;
  });

  // Untuk mobile (klik)
  item.addEventListener("click", () => {
    // Sama seperti mouseenter
    let deskripsiHTML = `<h3>${judul}</h3>`;
    deskripsiParts.forEach(paragraf => {
      if (paragraf.trim()) {
        deskripsiHTML += `<strong><p class="desk-colm" style="font-family: 'Sora', sans-serif;">${paragraf.trim()}</p></strong>`;
      }
    });
    
    textAreaProfil.innerHTML = `<div class="desk-profil">${deskripsiHTML}</div>`;
  });
});

const btnResep = document.querySelector('.btn-resep');
if (btnResep) {
  btnResep.addEventListener('click', e => {
    e.preventDefault();
    const cardMore = document.getElementById('card-more');
    if (cardMore) cardMore.style.display = 'none';
    const resep = document.getElementById('resep');
    if (resep) {
      resep.style.display = 'block';
      resep.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

const btnKeunikan = document.querySelector('.btn-keunikan');
if (btnKeunikan) {
  btnKeunikan.addEventListener('click', e => {
    e.preventDefault();
    const cardMore = document.getElementById('card-more');
    if (cardMore) cardMore.style.display = 'none';
    const keunikan = document.getElementById('keunikan');
    if (keunikan) {
      keunikan.style.display = 'block';
      keunikan.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

const btnAlbum = document.querySelector('.btn-album');
if (btnAlbum) {
  btnAlbum.addEventListener('click', e => {
    e.preventDefault();
    const cardMore = document.getElementById('card-more');
    if (cardMore) cardMore.style.display = 'none';
    const album = document.getElementById('album');
    if (album) {
      album.style.display = 'block';
      album.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

const btnCards = document.querySelector('.btn-cards');
if (btnCards) {
  btnCards.addEventListener('click', e => {
    e.preventDefault();
    const cardMore = document.getElementById('card-more');
    if (cardMore) cardMore.style.display = 'none';
    const cards = document.getElementById('cards');
    if (cards) {
      cards.style.display = 'block';
      cards.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

const btnBackResep = document.querySelector('#resep .btn-back');
if (btnBackResep) {
  btnBackResep.addEventListener('click', e => {
    e.preventDefault();
    const resep = document.getElementById('resep');
    if (resep) resep.style.display = 'none';
    const cardMore = document.getElementById('card-more');
    if (cardMore) {
      cardMore.style.display = 'block';
      const cards = cardMore.querySelectorAll('.card-resep, .card-keunikan, .card-album, .card-cards');
      cards.forEach(card => card.style.margin = '10px 0');
      cardMore.style.gap = '20px';
      cardMore.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

const btnBackKeunikan = document.querySelector('#keunikan .btn-back');
if (btnBackKeunikan) {
  btnBackKeunikan.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('keunikan').style.display = 'none';
    const cardMore = document.getElementById('card-more');
    cardMore.style.display = 'block';
    const cards = cardMore.querySelectorAll('.card-resep, .card-keunikan, .card-album, .card-cards');
    cards.forEach(card => card.style.margin = '10px 0');
    cardMore.style.gap = '20px';
    cardMore.scrollIntoView({ behavior: 'smooth' });
  });
}

const btnBackAlbum = document.querySelector('#album .btn-back');
if (btnBackAlbum) {
  btnBackAlbum.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('album').style.display = 'none';
    const cardMore = document.getElementById('card-more');
    cardMore.style.display = 'block';
    const cards = cardMore.querySelectorAll('.card-resep, .card-keunikan, .card-album, .card-cards');
    cards.forEach(card => card.style.margin = '10px 0');
    cardMore.style.gap = '20px';
    cardMore.scrollIntoView({ behavior: 'smooth' });
  });
}

const btnBackCards = document.querySelector('#cards .btn-back');
if (btnBackCards) {
  btnBackCards.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('cards').style.display = 'none';
    const cardMore = document.getElementById('card-more');
    cardMore.style.display = 'block';
    const cards = cardMore.querySelectorAll('.card-resep, .card-keunikan, .card-album, .card-cards');
    cards.forEach(card => card.style.margin = '10px 0');
    cardMore.style.gap = '20px';
    cardMore.scrollIntoView({ behavior: 'smooth' });
  });
}
