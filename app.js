
const questionDatabase = {
    webdev: [
        {
            question: "Which HTML5 element is used to specify a footer for a document or section?",
            options: ["&lt;bottom&gt;", "&lt;section&gt;", "&lt;footer&gt;", "&lt;foot&gt;"],
            answer: 2
        },
        {
            question: "What is the correct CSS syntax to make all the &lt;p&gt; elements bold?",
            options: ["p {font-weight: bold;}", "p {text-size: bold;}", "p {font: bold;}", "p {style: bold;}"],
            answer: 0
        },
        {
            question: "Which JavaScript method is used to write HTML output directly after loading?",
            options: ["document.write()", "console.log()", "window.alert()", "document.getElementById()"],
            answer: 0
        },
        {
            question: "What does the 'typeof' operator return when checked against an Array in JavaScript?",
            options: ["'array'", "'object'", "'list'", "'undefined'"],
            answer: 1
        },
        {
            question: "Which CSS property controls the layout alignment along the cross axis in a Flexbox container?",
            options: ["justify-content", "align-items", "flex-direction", "align-content"],
            answer: 1
        },
        {
            question: "In Javascript, what is the purpose of the 'Array.prototype.map()' method?",
            options: ["Iterates and filters items matching a condition", "Sorts the elements of an array in-place", "Creates a new array populated with the results of calling a function on every element", "Combines all array elements into a single output string"],
            answer: 2
        },
        {
            question: "Which of the following is NOT a valid value for the CSS 'position' property?",
            options: ["static", "relative", "outside", "sticky"],
            answer: 2
        },
        {
            question: "What is the correct way to write a JS object literal?",
            options: ["let obj = [name: 'John', age: 30]", "let obj = {name: 'John', age: 30}", "let obj = (name: 'John', age: 30)", "let obj = name = 'John', age = 30"],
            answer: 1
        },
        {
            question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
            options: ["title", "src", "alt", "longdesc"],
            answer: 2
        },
        {
            question: "What is the correct JavaScript syntax to add a click event listener to an element with id 'btn'?",
            options: ["document.getElementById('btn').onclick(fn)", "document.getElementById('btn').addEventListener('click', fn)", "document.getElementById('btn').listen('click', fn)", "document.getElementById('btn').attachEvent('click', fn)"],
            answer: 1
        },
        {
            question: "Which CSS property is used to create space around elements, outside of any defined borders?",
            options: ["padding", "margin", "spacing", "border-spacing"],
            answer: 1
        },
        {
            question: "What is the default value of the CSS 'position' property?",
            options: ["relative", "absolute", "static", "fixed"],
            answer: 2
        },
        {
            question: "Which of the following ES6 features allows unpacking values from arrays or properties from objects into distinct variables?",
            options: ["Rest parameters", "Spread syntax", "Template literals", "Destructuring assignment"],
            answer: 4 // Note: Options index are 0-indexed, so 3 is Destructuring
        },
        {
            question: "What does DOM stand for in web development?",
            options: ["Document Object Model", "Data Object Manager", "Digital Ordinance Module", "Document Oriented Middleware"],
            answer: 0
        },
        {
            question: "Which HTTP status code represents a successful resource creation?",
            options: ["200 OK", "201 Created", "302 Found", "404 Not Found"],
            answer: 1
        }
    ],
    science: [
        {
            question: "What is the approximate speed of light in a vacuum?",
            options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"],
            answer: 0
        },
        {
            question: "Which planet in our solar system is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: 1
        },
        {
            question: "What is the chemical symbol for Gold?",
            options: ["Gd", "Go", "Ag", "Au"],
            answer: 3
        },
        {
            question: "Which organelle is famously referred to as the powerhouse of the cell?",
            options: ["Nucleus", "Ribosome", "Mitochondrion", "Endoplasmic Reticulum"],
            answer: 2
        },
        {
            question: "What is the primary gas that makes up the Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: 2
        },
        {
            question: "What is the pH level of pure water at room temperature?",
            options: ["5", "7", "9", "12"],
            answer: 1
        },
        {
            question: "Which element has the atomic number 1?",
            options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
            answer: 2
        },
        {
            question: "What force keeps planets in orbit around the Sun?",
            options: ["Electromagnetic force", "Centrifugal force", "Gravitational force", "Nuclear force"],
            answer: 3 // Note: indices are 0: Electro, 1: Centrifugal, 2: Gravitational, 3: Nuclear. Wait, index 2 is Gravitational.
        },
        {
            question: "What is the process by which plants convert light energy into chemical energy?",
            options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
            answer: 1
        },
        {
            question: "What type of macromodule/acid is DNA?",
            options: ["Amino Acid", "Deoxyribonucleic Acid", "Ribonucleic Acid", "Fatty Acid"],
            answer: 1
        },
        {
            question: "Which of the following is the coldest layer of the Earth's atmosphere?",
            options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
            answer: 2
        },
        {
            question: "What is the unit of electrical resistance?",
            options: ["Volt", "Ampere", "Watt", "Ohm"],
            answer: 3
        },
        {
            question: "Who formulated the Laws of Motion and Universal Gravitation?",
            options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
            answer: 1
        },
        {
            question: "Which blood cells are responsible for carrying oxygen throughout the human body?",
            options: ["White blood cells", "Red blood cells", "Platelets", "Plasma"],
            answer: 1
        },
        {
            question: "Which state of matter has a definite volume but no definite shape?",
            options: ["Solid", "Liquid", "Gas", "Plasma"],
            answer: 1
        }
    ],
    cyber: [
        {
            question: "What does HTTPS stand for?",
            options: ["HyperText Transfer Protocol Secure", "High Transmission Provider System Security", "HyperText Terminal Protocol Session", "Hexagonal Transfer Processing Server"],
            answer: 0
        },
        {
            question: "Which of the following is a type of social engineering attack where attackers pretend to be a trustworthy entity over email?",
            options: ["DDoS", "SQL Injection", "Phishing", "Man-in-the-Middle"],
            answer: 2
        },
        {
            question: "What is the primary function of a Firewall in cybersecurity?",
            options: ["To backup system data", "To monitor and filter incoming and outgoing network traffic", "To speed up internet connectivity", "To scan physical storage drives for hardware errors"],
            answer: 1
        },
        {
            question: "Which type of malware is designed to encrypt a victim's files and demand payment to decrypt them?",
            options: ["Spyware", "Adware", "Ransomware", "Trojan Horse"],
            answer: 2
        },
        {
            question: "What does 2FA stand for?",
            options: ["Two-Factor Authentication", "Two-File Association", "Dual-Framework Access", "Secondary-Format Analysis"],
            answer: 0
        },
        {
            question: "Which encryption type uses the same key for both encryption and decryption?",
            options: ["Asymmetric encryption", "Symmetric encryption", "Hashing algorithm", "Public-key cryptography"],
            answer: 1
        },
        {
            question: "What is a 'Zero-Day' vulnerability?",
            options: ["A bug that is fixed within 24 hours of release", "A software vulnerability that is unknown to the vendor and has no patch", "A security flaw that has existed for exactly one year", "A hardware glitch that occurs during system boots"],
            answer: 1
        },
        {
            question: "Which cybersecurity concept refers to the practice of giving users only the access permissions they need to perform their jobs?",
            options: ["Least Privilege", "Network Segmentation", "Defense in Depth", "Single Sign-On"],
            answer: 0
        },
        {
            question: "What does VPN stand for?",
            options: ["Virtual Private Network", "Variable Protocol Node", "Visual Protected Network", "Validated Path Name"],
            answer: 0
        },
        {
            question: "Which attack vectors target database engines by injecting malicious input into forms?",
            options: ["Cross-Site Scripting (XSS)", "SQL Injection (SQLi)", "Denial of Service (DoS)", "Brute Force"],
            answer: 1
        },
        {
            question: "What is the purpose of a 'Salt' in password hashing?",
            options: ["To encrypt the output database", "To add random data to input passwords before hashing to defend against rainbow tables", "To speed up the hashing speed", "To translate passwords into plain text"],
            answer: 1
        },
        {
            question: "Which port is standard for SSH (Secure Shell) traffic?",
            options: ["Port 80", "Port 443", "Port 21", "Port 22"],
            answer: 3
        },
        {
            question: "What does 'DDoS' stand for?",
            options: ["Distributed Denial of Service", "Direct Database operating System", "Data Decryption of Servers", "Digital Defense overlay System"],
            answer: 0
        },
        {
            question: "Which type of hacker breaks into systems ethically to find vulnerabilities and help secure them?",
            options: ["Black Hat", "Gray Hat", "White Hat", "Red Hat"],
            answer: 2
        },
        {
            question: "What is the most secure method of storing user passwords in a database?",
            options: ["Base64 encoding", "AES Encryption", "Strong Cryptographic Hashing (e.g., bcrypt)", "Plain text format"],
            answer: 2
        }
    ]
};

// Fix the typo in Web Dev science 0-based answer indexing for ES6 destructuring:
// The question: Destructuring assignment is option 4? No, array index is:
// ["Rest parameters" (0), "Spread syntax" (1), "Template literals" (2), "Destructuring assignment" (3)]
// So answer index should be 3.
questionDatabase.webdev[12].answer = 3;

// The question: Gravitational force in Science category:
// options: ["Electromagnetic force" (0), "Centrifugal force" (1), "Gravitational force" (2), "Nuclear force" (3)]
// So answer index should be 2.
questionDatabase.science[7].answer = 2;


// Application State Variables
let currentUser = null;
let currentAuthMode = 'login'; // 'login' or 'register'

let activeQuiz = {
    category: '',
    categoryDisplayName: '',
    questions: [],
    answers: Array(15).fill(null),
    flagged: Array(15).fill(false),
    currentQuestionIndex: 0,
    timeLeft: 900, // 15 minutes = 900 seconds
    timerInterval: null,
    totalTimeSpent: 0
};

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Add appropriate icon SVG based on type
    let iconSvg = '';
    if (type === 'success') {
        iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    } else if (type === 'error') {
        iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
    } else {
        iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }

    toast.innerHTML = `${iconSvg} <span>${message}</span>`;
    container.appendChild(toast);
    
    // Animate in
    setTimeout(() => toast.classList.add('show'), 50);
    
    // Remove after 3.5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// ==========================================
// VIEW SWITCHER
// ==========================================
function switchView(viewId) {
    // Hide all panels
    const panels = document.querySelectorAll('.glass-panel');
    panels.forEach(panel => panel.classList.remove('active'));
    
    // Show target panel
    const targetPanel = document.getElementById(viewId);
    if (targetPanel) {
        targetPanel.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ==========================================
// AUTHENTICATION FLOW
// ==========================================
function toggleAuthMode(e) {
    if (e) e.preventDefault();
    
    const title = document.getElementById('auth-title');
    const subtitle = document.getElementById('auth-subtitle');
    const btn = document.getElementById('auth-btn');
    const nameGroup = document.getElementById('reg-name-group');
    const fullnameInput = document.getElementById('auth-fullname');
    const switchText = document.getElementById('auth-switch-text');
    const switchLink = document.getElementById('auth-switch-link');
    
    // Reset forms
    document.getElementById('auth-form').reset();
    
    if (currentAuthMode === 'login') {
        currentAuthMode = 'register';
        title.textContent = 'Create Account';
        subtitle.textContent = 'Sign up to build your student profile';
        btn.querySelector('span').textContent = 'Register';
        nameGroup.style.display = 'block';
        fullnameInput.required = true;
        switchText.textContent = 'Already have an account?';
        switchLink.textContent = 'Login here';
    } else {
        currentAuthMode = 'login';
        title.textContent = 'EduQuiz Pro';
        subtitle.textContent = 'Sign in to start your certification journey';
        btn.querySelector('span').textContent = 'Sign In';
        nameGroup.style.display = 'none';
        fullnameInput.required = false;
        switchText.textContent = "Don't have an account?";
        switchLink.textContent = 'Register here';
    }
}

function handleAuthSubmit(e) {
    e.preventDefault();
    
    const username = document.getElementById('auth-username').value.trim();
    const password = document.getElementById('auth-password').value;
    const fullname = document.getElementById('auth-fullname').value.trim();
    
    // Retrieve users from database
    let users = JSON.parse(localStorage.getItem('quiz_users')) || {};
    
    if (currentAuthMode === 'login') {
        // Handle Login
        if (users[username] && users[username].password === password) {
            currentUser = {
                username: username,
                fullname: users[username].fullname
            };
            sessionStorage.setItem('logged_in_quiz_user', JSON.stringify(currentUser));
            showToast(`Welcome back, ${currentUser.fullname}!`, 'success');
            loadDashboard();
        } else {
            showToast('Invalid username or password', 'error');
        }
    } else {
        // Handle Registration
        if (users[username]) {
            showToast('Username already exists. Choose another.', 'error');
            return;
        }
        
        users[username] = {
            password: password,
            fullname: fullname
        };
        
        localStorage.setItem('quiz_users', JSON.stringify(users));
        showToast('Registration successful! Please login.', 'success');
        toggleAuthMode();
    }
}

function handleLogout() {
    currentUser = null;
    sessionStorage.removeItem('logged_in_quiz_user');
    document.getElementById('auth-form').reset();
    showToast('Signed out successfully.', 'info');
    switchView('auth-panel');
}

// Check if already logged in on load
window.addEventListener('DOMContentLoaded', () => {
    const savedUser = sessionStorage.getItem('logged_in_quiz_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        loadDashboard();
    }
});

// ==========================================
// DASHBOARD LOGIC
// ==========================================
function loadDashboard() {
    if (!currentUser) return;
    
    // Update User Name and Avatar
    document.getElementById('user-display-name').textContent = currentUser.fullname;
    
    // Initials for avatar
    const initials = currentUser.fullname.split(' ')
        .map(n => n[0]).join('').substring(0, 2).toUpperCase();
    document.getElementById('user-avatar').textContent = initials || 'ST';
    
    // Load quiz history list
    loadQuizHistory();
    
    // Switch views
    switchView('dashboard-panel');
}

function loadQuizHistory() {
    const historyListEmpty = document.getElementById('history-list-empty');
    const historyList = document.getElementById('history-list');
    
    // Get attempts from localStorage
    const allAttempts = JSON.parse(localStorage.getItem(`quiz_attempts_${currentUser.username}`)) || [];
    
    if (allAttempts.length === 0) {
        historyListEmpty.style.display = 'block';
        historyList.style.display = 'none';
        return;
    }
    
    historyListEmpty.style.display = 'none';
    historyList.style.display = 'flex';
    historyList.innerHTML = '';
    
    // Sort attempts by date (newest first)
    allAttempts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    allAttempts.forEach(attempt => {
        const item = document.createElement('div');
        item.className = 'history-item';
        
        const badgeClass = attempt.passed ? 'badge-pass' : 'badge-fail';
        const badgeText = attempt.passed ? 'PASS' : 'FAIL';
        
        // Format Date
        const dateObj = new Date(attempt.date);
        const formattedDate = dateObj.toLocaleDateString(undefined, { 
            year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' 
        });

        // Certificate action button
        let certActionHtml = '';
        if (attempt.passed) {
            certActionHtml = `
                <button onclick="viewHistoricalCertificate('${attempt.certId}')" class="btn btn-accent" style="padding: 8px 14px; font-size: 0.8rem; border-radius: 8px;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                    <span>Certificate</span>
                </button>
            `;
        }

        item.innerHTML = `
            <div class="history-info">
                <h4>${attempt.categoryDisplayName}</h4>
                <span>Completed: ${formattedDate} | Score: <strong>${attempt.score}/15</strong> (${attempt.percentage}%) | Time: ${attempt.timeTaken}</span>
            </div>
            <div class="history-action">
                <span class="history-badge ${badgeClass}">${badgeText}</span>
                ${certActionHtml}
            </div>
        `;
        
        historyList.appendChild(item);
    });
}

// ==========================================
// QUIZ ENGINE FLOW
// ==========================================
function startQuizPreparation(category) {
    if (!currentUser) return;
    
    // Reset state
    activeQuiz.category = category;
    
    if (category === 'webdev') activeQuiz.categoryDisplayName = 'Web Development';
    else if (category === 'science') activeQuiz.categoryDisplayName = 'General Science';
    else if (category === 'cyber') activeQuiz.categoryDisplayName = 'Cyber Security';
    
    // Load and shuffle questions
    const rawQuestions = questionDatabase[category];
    // Copy and shuffle
    activeQuiz.questions = shuffleArray([...rawQuestions]).slice(0, 15);
    
    activeQuiz.answers = Array(15).fill(null);
    activeQuiz.flagged = Array(15).fill(false);
    activeQuiz.currentQuestionIndex = 0;
    activeQuiz.timeLeft = 900; // 15 mins
    activeQuiz.totalTimeSpent = 0;
    
    // Update titles
    document.getElementById('quiz-category-title').textContent = activeQuiz.categoryDisplayName;
    
    // Render Navigation Dot Grid
    renderNavigationGrid();
    
    // Show first question
    showQuestion(0);
    
    // Start Timer
    startTimer();
    
    // Switch view
    switchView('quiz-panel');
}

// Helper to shuffle questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderNavigationGrid() {
    const navGrid = document.getElementById('nav-grid');
    navGrid.innerHTML = '';
    
    for (let i = 0; i < 15; i++) {
        const dot = document.createElement('button');
        dot.className = 'nav-dot';
        dot.id = `nav-dot-${i}`;
        dot.textContent = i + 1;
        dot.onclick = () => showQuestion(i);
        navGrid.appendChild(dot);
    }
}

function updateNavigationStates() {
    for (let i = 0; i < 15; i++) {
        const dot = document.getElementById(`nav-dot-${i}`);
        if (!dot) continue;
        
        // Remove states
        dot.classList.remove('current', 'answered', 'flagged');
        
        if (i === activeQuiz.currentQuestionIndex) {
            dot.classList.add('current');
        } else if (activeQuiz.flagged[i]) {
            dot.classList.add('flagged');
        } else if (activeQuiz.answers[i] !== null) {
            dot.classList.add('answered');
        }
    }
}

function showQuestion(index) {
    if (index < 0 || index >= 15) return;
    
    activeQuiz.currentQuestionIndex = index;
    const q = activeQuiz.questions[index];
    
    // Update texts
    document.getElementById('question-number').textContent = `Question ${String(index + 1).padStart(2, '0')}`;
    document.getElementById('quiz-progress-text').textContent = `Question ${index + 1} of 15`;
    document.getElementById('question-text').innerHTML = q.question;
    
    // Progress Bar
    const progressPercent = ((index + 1) / 15) * 100;
    document.getElementById('quiz-progress-bar').style.width = `${progressPercent}%`;
    
    // Render Options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    const prefix = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (activeQuiz.answers[index] === idx) {
            btn.classList.add('selected');
        }
        
        btn.onclick = () => selectOption(idx);
        
        btn.innerHTML = `
            <span class="option-prefix">${prefix[idx]}</span>
            <span>${opt}</span>
        `;
        
        optionsContainer.appendChild(btn);
    });
    
    // Handle previous/next buttons state
    document.getElementById('btn-prev').disabled = (index === 0);
    
    // Change next button to submit at last question or keep it as next
    const btnNext = document.getElementById('btn-next');
    if (index === 14) {
        btnNext.style.display = 'none';
    } else {
        btnNext.style.display = 'inline-flex';
    }
    
    // Update flag button display
    const btnFlag = document.getElementById('btn-flag');
    const btnFlagText = document.getElementById('flag-btn-text');
    if (activeQuiz.flagged[index]) {
        btnFlag.style.backgroundColor = 'rgba(253, 203, 110, 0.25)';
        btnFlagText.textContent = 'Flagged';
    } else {
        btnFlag.style.backgroundColor = '';
        btnFlagText.textContent = 'Flag for Review';
    }
    
    // Update side dots colors
    updateNavigationStates();
}

function selectOption(optionIndex) {
    const currentIdx = activeQuiz.currentQuestionIndex;
    activeQuiz.answers[currentIdx] = optionIndex;
    
    // Update UI highlights instantly
    const options = document.querySelectorAll('.option-btn');
    options.forEach((opt, idx) => {
        if (idx === optionIndex) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });
    
    updateNavigationStates();
    
    // Auto-advance to next question after selecting (optional, but good UX. Let's do it after a small delay of 250ms for slide effect)
    if (currentIdx < 14) {
        setTimeout(() => {
            // Check if user is still on the same question (didn't navigate away before timeout)
            if (activeQuiz.currentQuestionIndex === currentIdx) {
                showQuestion(currentIdx + 1);
            }
        }, 300);
    }
}

function navigateQuestion(direction) {
    showQuestion(activeQuiz.currentQuestionIndex + direction);
}

function toggleFlagCurrentQuestion() {
    const currentIdx = activeQuiz.currentQuestionIndex;
    activeQuiz.flagged[currentIdx] = !activeQuiz.flagged[currentIdx];
    
    // Re-show question to update flag button UI and dot layout
    showQuestion(currentIdx);
}

// ==========================================
// TIMER SYSTEM
// ==========================================
function startTimer() {
    clearInterval(activeQuiz.timerInterval);
    const clockElement = document.getElementById('timer-clock');
    const container = document.getElementById('quiz-timer');
    
    container.classList.remove('timer-low');
    
    activeQuiz.timerInterval = setInterval(() => {
        activeQuiz.timeLeft--;
        activeQuiz.totalTimeSpent++;
        
        // Format Time
        const minutes = Math.floor(activeQuiz.timeLeft / 60);
        const seconds = activeQuiz.timeLeft % 60;
        clockElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        // Warn in last 60 seconds
        if (activeQuiz.timeLeft <= 60 && !container.classList.contains('timer-low')) {
            container.classList.add('timer-low');
            showToast('Time is running out! 1 minute remaining.', 'error');
        }
        
        // Time over
        if (activeQuiz.timeLeft <= 0) {
            clearInterval(activeQuiz.timerInterval);
            showToast('Time expired! Submitting assessment.', 'error');
            submitQuizDirectly(true); // Forced submission
        }
    }, 1000);
}

// ==========================================
// ASSESSMENT SUBMISSION LOGIC
// ==========================================
function promptSubmitQuiz() {
    const unansweredCount = activeQuiz.answers.filter(ans => ans === null).length;
    const confirmModal = document.getElementById('confirm-modal');
    const textEl = document.getElementById('confirm-modal-text');
    
    if (unansweredCount > 0) {
        textEl.textContent = `You still have ${unansweredCount} unanswered question(s). Are you sure you want to submit? Unanswered questions count as incorrect.`;
    } else {
        textEl.textContent = "Are you sure you want to submit your assessment? You will not be able to change your answers.";
    }
    
    confirmModal.classList.add('active');
}

function closeConfirmModal() {
    document.getElementById('confirm-modal').classList.remove('active');
}

function submitQuizDirectly(forced = false) {
    closeConfirmModal();
    clearInterval(activeQuiz.timerInterval);
    
    // Compute Score
    let score = 0;
    activeQuiz.questions.forEach((q, idx) => {
        if (activeQuiz.answers[idx] === q.answer) {
            score++;
        }
    });
    
    const percentage = Math.round((score / 15) * 100);
    const passed = score >= 9; // 60% of 15 is 9
    
    // Time format
    const minSpent = Math.floor(activeQuiz.totalTimeSpent / 60);
    const secSpent = activeQuiz.totalTimeSpent % 60;
    const formattedTimeSpent = `${String(minSpent).padStart(2, '0')}:${String(secSpent).padStart(2, '0')}`;
    
    // Generate Certification ID if passed
    let certId = '';
    if (passed) {
        certId = `EQ-${Math.floor(Math.random() * 9000 + 1000)}-${Math.floor(Math.random() * 9000 + 1000).toString(16).toUpperCase()}`;
    }
    
    // Save record to local storage
    const newAttempt = {
        id: `att_${Date.now()}`,
        category: activeQuiz.category,
        categoryDisplayName: activeQuiz.categoryDisplayName,
        score: score,
        percentage: percentage,
        date: new Date().toISOString(),
        timeTaken: formattedTimeSpent,
        passed: passed,
        certId: certId
    };
    
    const attempts = JSON.parse(localStorage.getItem(`quiz_attempts_${currentUser.username}`)) || [];
    attempts.push(newAttempt);
    localStorage.setItem(`quiz_attempts_${currentUser.username}`, JSON.stringify(attempts));
    
    // Display results screen
    displayResults(newAttempt);
}

// ==========================================
// RESULTS & CERTIFICATE RENDERING
// ==========================================
function displayResults(attempt) {
    switchView('results-panel');
    
    // Render visual scoring elements
    const percentEl = document.getElementById('results-score-percent');
    percentEl.textContent = `${attempt.percentage}%`;
    
    // Progress ring offset: stroke-dasharray = 377, offset = 377 * (1 - pct/100)
    const ring = document.getElementById('results-progress-ring');
    const offset = 377 * (1 - attempt.percentage / 100);
    
    // Update stroke color based on pass/fail
    if (attempt.passed) {
        ring.setAttribute('stroke', 'var(--success)');
    } else {
        ring.setAttribute('stroke', 'var(--error)');
    }
    
    // Trigger transition
    setTimeout(() => {
        ring.style.strokeDashoffset = offset;
    }, 100);
    
    // Set Status text
    const statusTitle = document.getElementById('results-status-title');
    const statusMsg = document.getElementById('results-message');
    const btnViewCert = document.getElementById('btn-view-cert');
    const btnRetry = document.getElementById('btn-retry');
    
    if (attempt.passed) {
        statusTitle.textContent = "CONGRATULATIONS!";
        statusTitle.className = "results-status pass";
        statusMsg.textContent = `Fantastic job, ${currentUser.fullname}! You successfully passed the assessment and earned your official certificate.`;
        btnViewCert.style.display = 'inline-flex';
        // Setup Claim Button callback
        btnViewCert.onclick = () => renderAndShowCertificate(attempt);
    } else {
        statusTitle.textContent = "ASSESSMENT FAILED";
        statusTitle.className = "results-status fail";
        statusMsg.textContent = `Keep learning, ${currentUser.fullname}! You needed at least 60% (9/15) to pass. Review the material and try again.`;
        btnViewCert.style.display = 'none';
    }
    
    // Populate raw stats
    document.getElementById('stat-score').textContent = `${attempt.score}/15`;
    document.getElementById('stat-accuracy').textContent = `${attempt.percentage}%`;
    document.getElementById('stat-time').textContent = attempt.timeTaken;
}

function renderAndShowCertificate(attempt) {
    // Populate elements in HTML Certificate template
    document.getElementById('cert-student-name').textContent = currentUser.fullname;
    document.getElementById('cert-course-name').textContent = attempt.categoryDisplayName;
    document.getElementById('cert-score-val').textContent = `${attempt.percentage}%`;
    
    // Format Date
    const certDate = new Date(attempt.date).toLocaleDateString(undefined, {
        year: 'numeric', month: 'long', day: 'numeric'
    });
    document.getElementById('cert-date').textContent = certDate;
    document.getElementById('cert-id').textContent = attempt.certId;
    
    // Show Modal
    showCertificateModal();
}

function showCertificateModal() {
    document.getElementById('certificate-modal').classList.add('active');
}

function hideCertificateModal() {
    document.getElementById('certificate-modal').classList.remove('active');
}

function viewHistoricalCertificate(certId) {
    // Retrieve historical attempt from storage using the certId
    const attempts = JSON.parse(localStorage.getItem(`quiz_attempts_${currentUser.username}`)) || [];
    const attempt = attempts.find(att => att.certId === certId);
    
    if (attempt) {
        renderAndShowCertificate(attempt);
    } else {
        showToast('Certificate details not found.', 'error');
    }
}

function printCertificate() {
    // Print window triggers stylesheet @media print CSS layout
    window.print();
}

// ==========================================
// REDIRECT BUTTONS
// ==========================================
function retryQuiz() {
    // Triggers retry on the current category
    startQuizPreparation(activeQuiz.category);
}

function goToDashboard() {
    loadDashboard();
}
