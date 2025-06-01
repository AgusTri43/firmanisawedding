const scriptURL = 'https://script.google.com/macros/s/AKfycbxeiSgLF1PM60p2xU9GGUn5ZqLBvYi9gVJBvthT1Yb9dpD1Xgm0qNwqpLySW9-3edAa/exec';

function submitUcapanForm() {
  const form = document.getElementById('ucapanForm');
  if (!form) return;  // stop kalau form gak ada

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = {
      nama: formData.get('nama'),
      kehadiran: formData.get('kehadiran'),
      ucapan: formData.get('ucapan')
    };

    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(() => {
      alert("Ucapan berhasil dikirim!");
      this.reset();
      loadUcapan();
    })
    .catch(err => {
      console.error('Error submit ucapan:', err);
      alert('Gagal mengirim ucapan, coba lagi.');
    });
  });
}

function loadUcapan() {
  const ucapanList = document.getElementById('ucapanList');
  if (!ucapanList) return;  // stop kalau elemen gak ada

  fetch(scriptURL)
    .then(res => res.json())
    .then(data => {
      ucapanList.innerHTML = '';
      data.reverse().forEach(item => {
        const div = document.createElement('div');
        div.className = 'ucapan-item';
        div.innerHTML = `<strong>${item.nama}</strong> (${item.kehadiran}):<br>${item.ucapan}`;
        ucapanList.appendChild(div);
      });
    })
    .catch(err => {
      console.error('Error load ucapan:', err);
    });
}


// Export fungsi yang ingin diakses dari main.js
export { submitUcapanForm, loadUcapan };
