// Pəncərəni aç/bağla
window.openModal = () => document.getElementById('auth-modal').style.display = 'block';
window.closeModal = () => document.getElementById('auth-modal').style.display = 'none';

// Giriş və Qeydiyyat formaları arasında keçid (Əsas istədiyin hissə)
window.toggleAuth = function(mode) {
    const loginSec = document.getElementById('login-section');
    const regSec = document.getElementById('reg-section');

    if(mode === 'reg') {
        loginSec.style.display = 'none';
        regSec.style.display = 'block';
    } else {
        loginSec.style.display = 'block';
        regSec.style.display = 'none';
    }
}

// Qeydiyyat funksiyasını işə salan handle
window.handleRegister = () => {
    const email = document.getElementById('r-email').value;
    const pass = document.getElementById('r-pass').value;
    // Firebase funksiyanı çağırır
    window.qeydiyyatOl(email, pass); 
}

// Giriş funksiyasını işə salan handle
window.handleLogin = () => {
    const email = document.getElementById('l-email').value;
    const pass = document.getElementById('l-pass').value;
    // Firebase funksiyanı çağırır
    window.girisEt(email, pass);
}