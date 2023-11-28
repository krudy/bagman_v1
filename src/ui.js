const headerResult = document.querySelector('.result');
const headerResult2 = document.querySelector('.result2');
const headerResult3 = document.querySelector('.result3');


  // Dane - tablica współrzędnych x i y
  const pointsArray = points;
//   // Dane - tablica współrzędnych x i y
//   const pointsArray = [
//     { x: 50, y: 100 },
//     { x: 150, y: 200 },
//     { x: 250, y: 300 },
//     // Dodaj więcej punktów według potrzeb
//   ];

  // Pobierz element canvas z dokumentu HTML
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  // Funkcja do rysowania punktów na canvasie
  function drawPoints() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Wyczyść canvas przed narysowaniem punktów

    // Iteruj przez tablicę punktów i narysuj każdy punkt
    pointsArray.forEach(point => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 5, 0, Math.PI * 2); // Rysuj punkt jako okrąg
      ctx.fillStyle = 'red'; // Ustaw kolor punktu (czerwony)
      ctx.fill();
      ctx.closePath();
    });
  }

  // Wywołaj funkcję do rysowania punktów
  drawPoints();