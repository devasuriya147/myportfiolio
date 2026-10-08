const FRAME_COUNT = 300;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d', { alpha: false });
const loader = document.getElementById('loader');
const loaderText = document.getElementById('loader-text');

const images = new Array(FRAME_COUNT);
let loadedCount = 0;
let currentFrame = 0;
let targetFrame = 0;
let lastRenderedFrame = -1;
let isResizing = false;

// Format image filename with 3-digit zero padding
function getFramePath(index) {
  const frameNumber = String(index + 1).padStart(3, '0');
  return `ezgif-1bf3d1fe282b6319-jpg/ezgif-frame-${frameNumber}.jpg`;
}

// Preload all frames into memory
function preloadImages() {
  for (let i = 0; i < FRAME_COUNT; i++) {
    const img = new Image();
    img.src = getFramePath(i);

    img.onload = () => {
      images[i] = img;
      loadedCount++;

      // Update loading percentage
      const percent = Math.floor((loadedCount / FRAME_COUNT) * 100);
      if (loaderText) {
        loaderText.textContent = `Loading ${percent}%`;
      }

      // Draw the first frame immediately once loaded
      if (i === 0 && lastRenderedFrame === -1) {
        drawFrame(0);
      }

      // Once all frames are cached, fade out loader
      if (loadedCount === FRAME_COUNT) {
        setTimeout(() => {
          loader.classList.add('loaded');
        }, 150);
      }
    };

    img.onerror = () => {
      loadedCount++;
      if (loadedCount === FRAME_COUNT) {
        loader.classList.add('loaded');
      }
    };
  }
}

// Resize canvas handling Device Pixel Ratio for razor-sharp rendering
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  // Force redraw on resize
  lastRenderedFrame = -1;
  drawFrame(Math.round(currentFrame));
}

// Draw the frame centered using "cover" aspect fit
function drawFrame(frameIndex) {
  const img = images[frameIndex];
  if (!img || !img.complete || img.naturalWidth === 0) return;

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  // Calculate cover scaling
  const scale = Math.max(canvasWidth / img.naturalWidth, canvasHeight / img.naturalHeight);
  const scaledWidth = img.naturalWidth * scale;
  const scaledHeight = img.naturalHeight * scale;
  const offsetX = (canvasWidth - scaledWidth) / 2;
  const offsetY = (canvasHeight - scaledHeight) / 2;

  ctx.drawImage(img, offsetX, offsetY, scaledWidth, scaledHeight);
  lastRenderedFrame = frameIndex;
}

// Map scroll position to target frame
function updateScroll() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll <= 0) return;

  const scrollFraction = Math.max(0, Math.min(1, window.scrollY / maxScroll));
  targetFrame = scrollFraction * (FRAME_COUNT - 1);
}

// Animation loop using linear interpolation (lerp) for smooth motion
function animate() {
  // Lerp smoothing: smoothly interpolate currentFrame towards targetFrame
  const delta = targetFrame - currentFrame;

  if (Math.abs(delta) > 0.001) {
    currentFrame += delta * 0.09;
  } else {
    currentFrame = targetFrame;
  }

  const frameToRender = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(currentFrame)));

  if (frameToRender !== lastRenderedFrame) {
    drawFrame(frameToRender);
  }

  requestAnimationFrame(animate);
}

// Event Listeners
window.addEventListener('scroll', updateScroll, { passive: true });
window.addEventListener('resize', () => {
  if (!isResizing) {
    isResizing = true;
    requestAnimationFrame(() => {
      resizeCanvas();
      isResizing = false;
    });
  }
});

// Initialize
resizeCanvas();
preloadImages();
updateScroll();
requestAnimationFrame(animate);

// ==========================================================================
// Interactive Micro-Parallax on Hero Motion Words
// ==========================================================================
const heroWordWrappers = document.querySelectorAll('.hero-col-left .word-wrap');

if (heroWordWrappers.length > 0 && window.matchMedia('(pointer: fine)').matches) {
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let isMouseMoving = false;

  window.addEventListener('mousemove', (e) => {
    isMouseMoving = true;
    const { innerWidth, innerHeight } = window;
    const normX = (e.clientX / innerWidth) * 2 - 1;
    const normY = (e.clientY / innerHeight) * 2 - 1;
    targetX = normX * 9;
    targetY = normY * 7;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
  });

  function updateHeroWordsParallax() {
    if (isMouseMoving || Math.abs(currentX - targetX) > 0.01 || Math.abs(currentY - targetY) > 0.01) {
      currentX += (targetX - currentX) * 0.07;
      currentY += (targetY - currentY) * 0.07;

      heroWordWrappers.forEach((wrap, index) => {
        const depth = 0.6 + index * 0.22;
        const x = (currentX * depth).toFixed(2);
        const y = (currentY * depth).toFixed(2);
        const rot = (currentX * 0.22 * (index % 2 === 0 ? 1 : -1)).toFixed(2);
        wrap.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rot}deg)`;
      });
    }

    requestAnimationFrame(updateHeroWordsParallax);
  }

  requestAnimationFrame(updateHeroWordsParallax);
}

