function submitUcapanForm() {
  const form = document.getElementById('ucapanForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {
      nama: formData.get('nama'),
      kehadiran: formData.get('kehadiran'),
      ucapan: formData.get('ucapan')
    };

    // Menampilkan pop-up SweetAlert2
    Swal.fire({
      text: `Terima kasih ${data.nama}, atas konfirmasi dan ucapannya!`,
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/4726/4726095.png', // Gambar wedding
      imageWidth: 80,
      imageHeight: 80,
      confirmButtonText: 'Tutup',
      backdrop: true,
      allowOutsideClick: true,
      allowEscapeKey: true,
      customClass: {
        popup: 'rounded-xl'
      }
    });


    this.reset(); // Reset form setelah submit
  });
}

function copyRekening(noRek) {
  navigator.clipboard.writeText(noRek).then(() => {
    Swal.fire({
      icon: 'success',
      title: 'Disalin!',
      text: 'Nomor rekening berhasil disalin.',
      confirmButtonText: 'Tutup'
    });
  });
}
window.copyRekening = copyRekening;

export { submitUcapanForm};
