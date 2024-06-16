function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('show');
}


function copyEmailToClipboard(event) {
    event.preventDefault();
    navigator.clipboard.writeText('karolsys@gmail.com').then(() => {
        alert("+----------------------------------+\n" +
            " |                                                   |\n" +
            " |     Skopiowano adres email!      |\n" +
            " |     ▶ karolsys@gmail.com ◀     |\n" +
            " |                                                   |\n" +
            "+----------------------------------+\n");

    }).catch(err => {
        console.error('Nie udało się skopiować emaila:', err);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const clock = `${hours}:${minutes}:${seconds}`;
        
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = now.toLocaleDateString('pl-PL', options);

        document.getElementById('clock').textContent = clock;
        document.getElementById('date').textContent = date;
    }

    setInterval(updateTime, 1000);
    updateTime();

    function getRandomColorComponent() {
        var value = Math.floor(Math.random() * 256);
        if (value <= 50) {
            return 0;
        } else if (value <= 100) {
            return 100;
        }
        return value;
    }

    function getRandomRgbColor() {
        var r = getRandomColorComponent();
        var g = getRandomColorComponent();
        var b = getRandomColorComponent();
        return `rgb(${r},${g},${b})`;
    }

    function getRandomShade(){
        var value = Math.floor(Math.random() * (125 - 75 + 1) + 75);
        return value;
    }

    var skills = document.querySelectorAll('.skill');

    skills.forEach(function(skill) {
        skill.addEventListener('mouseenter', function() {
            var color = getRandomRgbColor();
            var shade = getRandomShade();
            skill.style.boxShadow = `0px 0px ${shade}px ${color}`;
        });
        skill.addEventListener('mouseleave', function() {
            skill.style.boxShadow = 'none';
        });
    });

    const interests = document.querySelectorAll('.interest');

    function getRandomColor() {
        const r = Math.floor(Math.random() * 200);
        const g = Math.floor(Math.random() * 200);
        const b = Math.floor(Math.random() * 200);
        return `rgb(${r}, ${g}, ${b})`;
    }

    interests.forEach(interest => {
        interest.addEventListener('mouseover', function () {
            const randomColor = getRandomColor();
            this.style.backgroundColor = randomColor;
        });
    });
});
