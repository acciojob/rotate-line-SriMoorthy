//your JS code here. If required.
        document.addEventListener('DOMContentLoaded', () => {
            let angle = 0;
            const line = document.getElementById('line');

            setInterval(() => {
                angle = (angle + 2) % 360;
                line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
            }, 20);
        });
