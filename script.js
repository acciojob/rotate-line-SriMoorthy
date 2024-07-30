//your JS code here. If required.
        let angle = 0;
        const element = document.getElementById('#line');

        setInterval(() => {
            angle = (angle + 2) % 360;
            element.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        }, 20);
