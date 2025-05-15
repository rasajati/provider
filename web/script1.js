window.generateHTML = function() {
    let content = document.getElementById('content');
    content.innerHTML = `
        <h1>Halaman Dinamis!</h1>
        <p>Elemen ini dibuat oleh JavaScript yang di-host di GitHub.</p>
    `;
};

// Panggil fungsi langsung saat halaman dimuat
window.onload = generateHTML;
