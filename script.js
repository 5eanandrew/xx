/**
 * PORTFOLIO MAIN SCRIPT
 * Handles sidebar glassmorphism background, case study display, and modal
 */

// ===================================
// P5.JS GLASSMORPHISM BACKGROUND (SIDEBAR ONLY)
// ===================================
let flowField = [];
let cols, rows;
let scale = 32;
let zoff = 0;
let timeOffset;

function setup() {
    try {
        let canvas = createCanvas(280, windowHeight);
        canvas.parent('aurora-canvas');
        
        colorMode(HSB, 360, 100, 100, 100);
        background(0);
        timeOffset = random(1000);
        
        updateDimensions();
    } catch (error) {
        console.warn('P5.js background failed to initialize:', error);
    }
}

function draw() {
    fill(0, 0, 0, 3);
    noStroke();
    rect(0, 0, width, height);
    
    updateFlowField();
    drawSimpleColorPatches();
    
    zoff += 0.002;
}

function updateDimensions() {
    cols = floor(width / scale) + 1;
    rows = floor(height / scale) + 1;
    flowField = new Array(cols * rows);
}

function updateFlowField() {
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
        let xoff = timeOffset;
        for (let x = 0; x < cols; x++) {
            let index = x + y * cols;
            
            let angle1 = noise(xoff * 0.8, yoff * 0.8, zoff) * TWO_PI;
            let angle2 = noise(xoff * 0.4, yoff * 0.4, zoff * 1.5) * PI;
            
            let finalAngle = angle1 + sin(angle2) * 0.4;
            let magnitude = noise(xoff + 1000, yoff + 1000, zoff) * 1.5;
            
            flowField[index] = createVector(cos(finalAngle) * magnitude, sin(finalAngle) * magnitude);
            
            xoff += 0.04;
        }
        yoff += 0.04;
    }
}

function drawSimpleColorPatches() {
    for (let y = -1; y <= rows; y++) {
        for (let x = -1; x <= cols; x++) {
            let index = constrain(x, 0, cols-1) + constrain(y, 0, rows-1) * cols;
            
            if (flowField[index]) {
                let px = x * scale;
                let py = y * scale;
                let v = flowField[index];
                
                drawLargeColorPatch(px, py, v);
            }
        }
    }
}

function drawLargeColorPatch(x, y, flowVec) {
    let time = millis() * 0.0005;
    
    let baseHue = (noise(x * 0.003, y * 0.003, time) * 150 + 220) % 360;
    let colorShift = sin(time * 1.5 + x * 0.008 + y * 0.008) * 50;
    let finalHue = (baseHue + colorShift) % 360;
    
    let saturation = 50 + sin(time + x * 0.004) * 25;
    let brightness = 35 + noise(x * 0.005, y * 0.005, time * 0.8) * 30;
    
    let patchSize = scale * 4;
    
    push();
    translate(x + flowVec.x * 15, y + flowVec.y * 15);
    
    fill(finalHue, saturation, brightness, 8);
    noStroke();
    ellipse(0, 0, patchSize, patchSize);
    
    fill(finalHue, saturation * 0.4, brightness + 10, 6);
    ellipse(0, 0, patchSize * 2, patchSize * 2);
    
    fill(finalHue, saturation * 0.2, brightness + 15, 4);
    ellipse(0, 0, patchSize * 3, patchSize * 3);
    
    pop();
}

function windowResized() {
    resizeCanvas(280, windowHeight);
    updateDimensions();
}

// ===================================
// CASE STUDY FUNCTIONS
// ===================================
function loadCaseStudies() {
    const grid = document.getElementById('caseStudiesGrid');
    grid.innerHTML = '';
    
    CASE_STUDIES.forEach(study => {
        const card = document.createElement('div');
        card.className = 'case-card';
        card.onclick = () => openCase(study.id);
        
        card.innerHTML = `
            <div class="case-card-image" style="background: ${GRADIENTS[study.gradient]}">${study.icon}</div>
            <div class="case-card-content">
                <h3>${study.title}</h3>
                <p>${study.description}</p>
                <div class="case-card-meta">${getMetaSummary(study.meta)}</div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function getMetaSummary(meta) {
    const parts = [];
    if (meta.role) parts.push(meta.role);
    if (meta.timeline) parts.push(meta.timeline);
    return parts.join(' • ');
}

function openCase(caseId) {
    const study = CASE_STUDIES.find(s => s.id === caseId);
    if (!study) return;
    
    // Build meta HTML
    const metaHTML = `
        <div class="case-detail-meta">
            ${study.meta.client ? `<strong>Client:</strong> ${study.meta.client}<br>` : ''}
            ${study.meta.role ? `<strong>Role:</strong> ${study.meta.role}<br>` : ''}
            ${study.meta.team ? `<strong>Team:</strong> ${study.meta.team}<br>` : ''}
            ${study.meta.timeline ? `<strong>Timeline:</strong> ${study.meta.timeline}` : ''}
        </div>
    `;
    
    // Set modal content
    document.getElementById('case-hero').innerHTML = study.icon;
    document.getElementById('case-hero').style.background = GRADIENTS[study.gradient];
    document.getElementById('case-body').innerHTML = `
        <h1>${study.title}</h1>
        ${metaHTML}
        ${study.content}
    `;
    
    // Show modal
    document.getElementById('case-detail').classList.add('active');
}

function closeCase() {
    document.getElementById('case-detail').classList.remove('active');
}

// ===================================
// NAVIGATION FUNCTIONS
// ===================================
function showHome() {
    // Already on home - could scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showAbout() {
    alert('About page coming soon! Update the showAbout() function in script.js to add your about page content.');
}

function showContact() {
    alert('Contact page coming soon! Update the showContact() function in script.js to add your contact form.');
}

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Load case studies
    loadCaseStudies();
    
    // Close modal when clicking outside
    document.getElementById('case-detail').addEventListener('click', function(e) {
        if (e.target === this) {
            closeCase();
        }
    });
    
    // Keyboard support - ESC to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeCase();
        }
    });
});