document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const translateBtn = document.getElementById('translateBtn');
    const input = document.getElementById('input');
    const output = document.getElementById('output');

    // Add magical sparkle effect to button
    translateBtn.addEventListener('mousemove', createSparkle);

    // Handle translation
    translateBtn.addEventListener('click', async function() {
        // Add loading animation
        translateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Channeling...';
        translateBtn.disabled = true;

        try {
            // Fade out old output
            output.style.opacity = '0';
            
            await new Promise(resolve => setTimeout(resolve, 500)); // Magical pause

            const inputText = input.value.trim();
            const translated = translateToUnicode(inputText);

            // Magical reveal animation
            output.innerHTML = '';
            output.style.opacity = '1';

            // Reveal each character with a magical effect
            for (let char of translated) {
                await new Promise(resolve => setTimeout(resolve, 100));
                const span = document.createElement('span');
                span.textContent = char;
                span.style.opacity = '0';
                span.style.transform = 'translateY(20px)';
                output.appendChild(span);

                // Fade in animation
                requestAnimationFrame(() => {
                    span.style.transition = 'all 0.5s ease';
                    span.style.opacity = '1';
                    span.style.transform = 'translateY(0)';
                });
            }

        } catch (error) {
            output.innerHTML = '✧ A mystical error occurred ✧';
            console.error('Translation error:', error);
        }

        // Reset button
        translateBtn.innerHTML = '<i class="fas fa-star"></i> Translate';
        translateBtn.disabled = false;
    });

    // Translation function
    function translateToUnicode(input) {
        try {
            // Split input and process each code
            const codes = input.split(/[\s,]+/);
            return codes.map(code => {
                // Handle both "U+" and plain number formats
                code = code.replace(/^U\+/i, '');
                // Convert to integer and then to character
                return String.fromCodePoint(parseInt(code, 16));
            }).join('');
        } catch (error) {
            throw new Error('Invalid Unicode format');
        }
    }

    // Sparkle effect function
    function createSparkle(event) {
        const button = event.currentTarget;
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Position sparkle relative to cursor
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        sparkle.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: sparkleOut 1s ease-out forwards;
        `;

        button.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => sparkle.remove(), 1000);
    }

    // Add input validation and formatting
    input.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9A-Fa-f\s,U+]/g, '');
    });

    // Add keyboard shortcut (Enter key)
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            translateBtn.click();
        }
    });
});

// Add this CSS to your stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleOut {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
        }
    }

    .sparkle {
        pointer-events: none;
        z-index: 2;
    }
`;
document.head.appendChild(style);
