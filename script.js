// Simulated user data
const users = [

    { name: "Abdul Sir", userId: "Abdul1998", password: "Abdul@1998" },
    { name: "KKDMS", userId: "Kkdms2526", password: "Kkdms@2526" }
];

// Login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error');
    const homePage = document.getElementById('homePage');
    const userNameSpan = document.getElementById('userName');

    // Reset error message
    errorDiv.textContent = '';

    // Check credentials
    const user = users.find(user => user.userId === userId && user.password === password);
    
    if (user) {
        // Show home page
        document.querySelector('.container').classList.add('hidden');
        homePage.classList.remove('hidden');
        userNameSpan.textContent = user.name;
    } else {
        // Show error message
        errorDiv.textContent = 'Invalid User ID or Password';
    }
});

// Show/hide password functionality
document.getElementById('showPasswordBtn').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.textContent = "Hide Password";
    } else {
        passwordInput.type = "password";
        this.textContent = "Show Password";
    }
});

function loadPage(pageUrl) {
    console.log('Loading page:', pageUrl);
    const iframe = document.getElementById('contentFrame');
    document.getElementById('contentFrame').classList.remove('hidden');
    iframe.src = pageUrl;
}

function handleDropdownSelection1() {
    const dropdown = document.getElementById('pageDropdown1');
    const selectedPage = dropdown.value;

    if (selectedPage) {
        loadPage(selectedPage);
    }
}

function handleDropdownSelection2() {
    const dropdown = document.getElementById('pageDropdown2');
    const selectedPage = dropdown.value;

    if (selectedPage) {
        loadPage(selectedPage);
    }
}
