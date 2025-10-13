/**
 * P5.js Background Animation
 * Oil slick flow field effect
 */

let flowField = [];
let cols, rows;
let scale = 16;
let zoff = 0;
let timeOffset;

function setup() {
    try {
        let canvas = createCanvas(windowWidth, windowHeight);
        canvas.parent('background-canvas');
        
        colorMode(HSB, 360, 100, 100, 100);
        background(0);
        timeOffset = random(1000);
        
        updateDimensions();
    } catch (error) {
        console.warn('P5.js background failed to initialize:', error);
        document.getElementById('background-canvas').style.background = 
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
}

function draw() {
    fill(240, 30, 2, 3);
    noStroke();
    rect(0, 0, width, height);
    
    updateFlowField();
    drawOilSlick();
    
    zoff += 0.003;
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
            
            let angle1 = noise(xoff, yoff, zoff) * TWO_PI;
            let angle2 = noise(xoff * 0.5, yoff * 0.5, zoff * 2) * PI;
            let angle3 = noise(xoff * 2, yoff * 2, zoff * 0.5) * PI * 0.5;
            
            let finalAngle = angle1 + sin(angle2) * 0.3 + cos(angle3) * 0.2;
            
            let magnitude = noise(xoff + 1000, yoff + 1000, zoff) * 2;
            magnitude *= (1 + sin(xoff * 0.1) * 0.3);
            
            flowField[index] = createVector(cos(finalAngle) * magnitude, sin(finalAngle) * magnitude);
            
            xoff += 0.03;
        }
        yoff += 0.03;
    }
}

function drawOilSlick() {
    for (let y = -1; y < rows; y++) {
        for (let x = -1; x < cols; x++) {
            let index = constrain(x, 0, cols-1) + constrain(y, 0, rows-1) * cols;
            
            if (flowField[index]) {
                let px = x * scale;
                let py = y * scale;
                let v = flowField[index];
                let strength = v.mag();
                
                drawOilPatch(px, py, v, max(strength, 0.3));
            }
        }
    }
}

function drawOilPatch(x, y, flowVec, strength) {
    push();
    translate(x, y);
    
    let angle = atan2(flowVec.y, flowVec.x);
    rotate(angle);
    
    let time = millis() * 0.0008;
    let baseHue = (noise(x * 0.008, y * 0.008, time) * 180 + 200) % 360;
    let colorShift = sin(time + x * 0.01 + y * 0.01) * 60;
    let finalHue = (baseHue + colorShift) % 360;
    
    let saturation = 45 + sin(time * 1.5 + x * 0.005) * 25;
    let brightness = 25 + strength * 35;
    
    let size = strength * scale * 2.5;
    
    for (let layer = 0; layer < 4; layer++) {
        let layerAlpha = (4 - layer) * 8;
        let layerHue = (finalHue + layer * 15) % 360;
        let layerBright = brightness + layer * 8;
        
        fill(layerHue, saturation - layer * 5, layerBright, layerAlpha);
        noStroke();
        
        let w = size * (1 - layer * 0.15);
        let h = size * (1 - layer * 0.15) * 0.6;
        
        ellipse(0, 0, w, h);
    }
    
    fill(0, 0, brightness + 40, 12);
    ellipse(-size * 0.2, -size * 0.15, size * 0.4, size * 0.25);
    
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    updateDimensions();
}