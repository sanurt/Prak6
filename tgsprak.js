function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const feedback = document.getElementById('feedback');

    let isValid = true;
    feedback.innerHTML = '';

    if (!/^[a-zA-Z0-9]{5,20}$/.test(username)) {
        feedback.innerHTML += '<p class="invalid">Username harus 5-20 karakter alfanumerik.</p>';
        isValid = false;
    }

    if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        feedback.innerHTML += '<p class="invalid">Email tidak valid.</p>';
        isValid = false;
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(password)) {
        feedback.innerHTML += '<p class="invalid">Password harus minimal 8 karakter, mengandung huruf, angka, dan simbol.</p>';
        isValid = false;
    }
    

    if (password !== confirmPassword) {
        feedback.innerHTML += '<p class="invalid">Password dan Konfirmasi Password tidak cocok.</p>';
        isValid = false;
    }

    if (isValid) {
        feedback.innerHTML = '<p class="valid">Pendaftaran berhasil!</p>';
    }

    return false; 
}

function cekKekuatanPassword() {
    const password = document.getElementById('password').value;
    const passwordStrength = document.getElementById('passwordStrength');

    let strength = 0;

    if (password.length >= 8) strength++; 
    if (/[A-Z]/.test(password)) strength++; 
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[@$!%*?&#]/.test(password)) strength++;

    if (strength <= 2) {
        passwordStrength.textContent = "Kekuatan Password: Lemah";
        passwordStrength.className = "strength-weak";
    } else if (strength === 3 || strength === 4) {
        passwordStrength.textContent = "Kekuatan Password: Sedang";
        passwordStrength.className = "strength-medium";
    } else if (strength === 5) {
        passwordStrength.textContent = "Kekuatan Password: Kuat";
        passwordStrength.className = "strength-strong";
    }
}

const password = document.getElementById('password');
password.addEventListener("input", ()=>{
    cekKekuatanPassword()
});

