
function openLogin() {
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("signupSection").style.display = "none";
   
    const loginTabBtn = document.getElementById("showLoginBtn");
    const signupTabBtn = document.getElementById("showSignupBtn");

    if (loginTabBtn && signupTabBtn) {
        loginTabBtn.style.backgroundColor = "#d63031";
        loginTabBtn.style.color = "white";
        signupTabBtn.style.backgroundColor = "#eeeeee";
        signupTabBtn.style.color = "#333333";
    }
}

function openSignup() {
   
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("signupSection").style.display = "block";
   
   
    const loginTabBtn = document.getElementById("showLoginBtn");
    const signupTabBtn = document.getElementById("showSignupBtn");

    if (loginTabBtn && signupTabBtn) {
        signupTabBtn.style.backgroundColor = "#d63031";
        signupTabBtn.style.color = "white";
        loginTabBtn.style.backgroundColor = "#eeeeee";
        loginTabBtn.style.color = "#333333";
    }
}

function handleLogin(event) {
    event.preventDefault(); 
    var email = document.getElementById("loginEmail").value;
    var pass = document.getElementById("loginPassword").value;
   
    if (pass.length < 6) {
        alert("Invalid Password! Must be at least 6 characters to login.");
    } else {
        alert("Welcome Back to The Velvet Churn! Login Successful.");
        console.log("Logged in user identity: " + email);
       
        document.getElementById("loginForm").reset(); 

       
        window.location.href = "index.html";
    }
}

function handleSignup(event) {
    event.preventDefault(); 
   
    var name = document.getElementById("signupName").value;
    var email = document.getElementById("signupEmail").value;
    var pass = document.getElementById("signupPassword").value;
   
    const strongPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    if (!emailRegex.test(email)) {
        alert("❌ Invalid Email Structure! Please format like: user@example.com");
        return;
    }
    if (!strongPasswordRegex.test(pass)) {
        alert("❌ Weak Password Selection!\n\nYour password must fulfill these constraints:\n• Minimum 8 characters long\n• At least 1 Uppercase letter (A-Z)\n• At least 1 Lowercase letter (a-z)\n• At least 1 Numeric digit (0-9)");
        return; 
    }

    alert("🎉 Account Successfully Created! Welcome to the parlor family, " + name + ".");
    console.log("Registered parlor account email string: " + email);
   
    document.getElementById("signupForm").reset();
    openLogin(); 
}
window.addEventListener('DOMContentLoaded', openLogin);
