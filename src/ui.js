

// Dane - tablica współrzędnych x i y
const pointsArray = points;


// Pobierz element canvas z dokumentu HTML
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');



function drawPoints(pointsArray) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Wyczyść canvas przed narysowaniem punktów

    // Rysowanie punktów
    pointsArray.forEach((point, index) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, Math.PI * 2); // Rysuj punkt jako okrąg
        ctx.fillStyle = 'red'; // Ustaw kolor punktu (czerwony)
        ctx.fill();
        ctx.closePath();

        // Rysowanie numerów punktów
        ctx.font = '12px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText(index, point.x - 5, point.y - 10); // Numeracja punktów
    });

}

function drawLines(pointsArray) {

    // Rysowanie linii łączących punkty
    ctx.beginPath();
    ctx.moveTo(pointsArray[0].x, pointsArray[0].y);
    for (let i = 1; i < pointsArray.length; i++) {
        ctx.lineTo(pointsArray[i].x, pointsArray[i].y);
    }
    ctx.strokeStyle = 'blue'; // Kolor linii (niebieski)
    ctx.stroke();
    ctx.closePath();
}

// Wywołanie funkcji do rysowania punktów z numerami i połączonych linii
drawPoints(pointsArray);
drawLines(createOrderPoints(bestRoute, pointsArray));

