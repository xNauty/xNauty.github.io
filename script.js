function copyEmailToClipboard(event) {
    event.preventDefault();
    navigator.clipboard.writeText('karolsys@gmail.com').then(() => {
        // Wyświetl okno dialogowe zamiast tooltipu
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
    // Funkcja do losowania koloru z określonymi ograniczeniami
    function getRandomColorComponent() {
        var value = Math.floor(Math.random() * 256); // Losowanie wartości od 0 do 255
        if (value <= 50) {
            return 0; // Wartości z przedziału 0-50 są zamieniane na 0
        } else if (value <= 100) {
            return 100; // Wartości z przedziału 51-100 są zamieniane na 100
        }
        return value; // Pozostałe wartości pozostają bez zmian
    }
  
    // Funkcja do tworzenia łańcucha koloru RGB
    function getRandomRgbColor() {
        var r = getRandomColorComponent();
        var g = getRandomColorComponent();
        var b = getRandomColorComponent();
        return `rgb(${r},${g},${b})`;
    }

    function getRandomShade(){
        var value = Math.floor(Math.random() * (125 - 75 + 1) + 75);
        return value
    }
  
    // Pobierz wszystkie elementy z klasą .skill
    var skills = document.querySelectorAll('.skill');
  
    // Ustaw nasłuchiwacz zdarzeń dla każdego kafelka umiejętności
    skills.forEach(function(skill) {
        skill.addEventListener('mouseenter', function() {
            // Losuj kolor cienia
            var color = getRandomRgbColor();
            var shade = getRandomShade();
            skill.style.boxShadow = `0px 0px ${shade}px ${color}`;
        });
        skill.addEventListener('mouseleave', function() {
            // Usuń cień po opuszczeniu kafelka
            skill.style.boxShadow = 'none';
        });
    });
});