function toggleAuthForms(event, targetForm) {
    event.preventDefault(); 
    
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const authSubtitle = document.getElementById('authSubtitle');
    const authAlert = document.getElementById('authAlert');

    if (authAlert) authAlert.style.display = 'none';

    if (targetForm === 'signup' && signupForm && loginForm) {
        loginForm.classList.remove('active-form');
        signupForm.classList.add('active-form');
        if (authSubtitle) authSubtitle.innerText = "Join the parlor family for exclusive sweet deals!";
    } else if (loginForm && signupForm) {
        signupForm.classList.remove('active-form');
        loginForm.classList.add('active-form');
        if (authSubtitle) authSubtitle.innerText = "Log in to scoop up your favorite flavors!";
    }
}
window.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const authAlert = document.getElementById('authAlert');

   
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            if (authAlert) {
               
                authAlert.innerHTML = "✨ <strong>Login Successful!</strong> Redirecting to The Velvet Churn storefront... 🍨";
                authAlert.style.display = 'block';
                authAlert.style.backgroundColor = '#d4edda';
                authAlert.style.color = '#155724';
                authAlert.style.border = '1px solid #c3e6cb';
            }

            loginForm.reset();

            
            setTimeout(function() {
                window.location.href = "index.html";
            }, 1200);
        });
    }

   
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const passwordValue = document.getElementById('signupPassword').value;

            
            const isLongEnough = passwordValue.length >= 8;
            const hasCapital = /[A-Z]/.test(passwordValue);
            const hasLower = /[a-z]/.test(passwordValue);
            const hasDigit = /[0-9]/.test(passwordValue);

            if (!isLongEnough || !hasCapital || !hasLower || !hasDigit) {
                if (authAlert) {
                    
                    authAlert.innerHTML = "❌ <strong>Weak Password!</strong> Must be at least 8 characters, with 1 uppercase, 1 lowercase, and 1 number.";
                    authAlert.style.display = 'block';
                    authAlert.style.backgroundColor = '#f8d7da';
                    authAlert.style.color = '#721c24';
                    authAlert.style.border = '1px solid #f5c6cb';
                }
                return; 
            }

            if (authAlert) {
              
                authAlert.innerHTML = "🎉 <strong>Account Created!</strong> Welcome to the parlor family. Opening shop... 🍦";
                authAlert.style.display = 'block';
                authAlert.style.backgroundColor = '#d4edda';
                authAlert.style.color = '#155724';
                authAlert.style.border = '1px solid #c3e6cb';
            }

            setTimeout(function() {
                window.location.href = "index.html";
            }, 1200);
        });
    }
});


window.addEventListener('DOMContentLoaded', function() {
    const iceCreamForm = document.getElementById('iceCreamForm');
    const alertBox = document.getElementById('alertBox');

    if (iceCreamForm && alertBox) {
        iceCreamForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            alertBox.innerText = "🍦 Details Submitted Successfully! Thank you.";
            alertBox.style.display = "block";
            
            iceCreamForm.reset();

           
            setTimeout(function() {
                alertBox.style.display = "none";
            }, 3000);
        });
    }
});

// script.js addition

window.addEventListener('DOMContentLoaded', function() {
    // Gather target element containers using unique matching IDs
    const parlorCommentForm = document.getElementById('parlorCommentForm');
    const commentsTimeline = document.getElementById('commentsTimeline');
    const emptyShelfText = document.getElementById('emptyShelfText');
    const commentSuccessAlert = document.getElementById('commentSuccessAlert');

    if (parlorCommentForm && commentsTimeline) {
        // Intercept form submit interaction loops
        parlorCommentForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Blocks the active browser window from forcing full data reloads

            // Extract input values from text fields
            const authorName = document.getElementById('clientName').value;
            const reviewContent = document.getElementById('clientComment').value;

            // Remove placeholder empty text on the first submitted comment
            if (emptyShelfText) {
                emptyShelfText.remove();
            }

            // Create a brand-new review item block container on the fly
            const dynamicCommentBox = document.createElement('div');
            
            // Apply custom parlor theme layout designs to the new review card
            dynamicCommentBox.style.backgroundColor = '#fffafb';
            dynamicCommentBox.style.padding = '12px';
            dynamicCommentBox.style.borderRadius = '6px';
            dynamicCommentBox.style.marginBottom = '12px';
            dynamicCommentBox.style.borderLeft = '4px solid #ff7675';
            dynamicCommentBox.style.boxShadow = '0 2px 5px rgba(0,0,0,0.02)';

            // Inject the name and comment text values securely inside the new box layout
            dynamicCommentBox.innerHTML = `
                <strong style="color: #d63031; font-size: 0.95rem;">${authorName}</strong>
                <p style="color: #2c3e50; margin-top: 4px; font-size: 0.9rem; line-height: 1.4;">${reviewContent}</p>
            `;

            // Prepend the newest review straight into the top of your display container list view
            commentsTimeline.insertBefore(dynamicCommentBox, commentsTimeline.firstChild);

            // Flash floating success confirmation notice banner
            if (commentSuccessAlert) {
                commentSuccessAlert.innerText = "❤️ Thank you for your review!";
                commentSuccessAlert.style.display = "block";
                
                setTimeout(function() {
                    commentSuccessAlert.style.display = "none";
                }, 3000);
            }

            // Flush out old input values to reset the form clean for next entry
            parlorCommentForm.reset();
        });
    }
});

