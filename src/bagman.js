// Funkcja losująca z zakresu min-max ,włączając ekstrema
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

// Funkcja tworząca losowe punkty (miasta) na płaszczyźnie, numPoints to liczba miast
function createPoints(numPoints) {
    let points = [];
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: getRandomIntInclusive(0,100),
        y: getRandomIntInclusive(0,100)
      });
    }
    console.log(points);
    return points; //zwraca tablice obiektów {x,y}
  }
  
  // Funkcja obliczająca odległość między miastami w kolejności określonej przez 'order'
  // 'order' to tablica z kolejnościa odwiedzanych miast
  // Funkcja wykorzystuje wzrór na odległość Euklidesową
  function calcDistance(points, order) {
    let distance = 0;
    //console.log(order);
    for (let i = 0; i < order.length - 1; i++) {
      let idx1 = order[i];
      let idx2 = order[i + 1];
      let city1 = points[idx1];
      let city2 = points[idx2];
      distance += Math.sqrt(Math.pow(city2.x - city1.x, 2) + Math.pow(city2.y - city1.y, 2));
    }
   
    return distance;
  }
  
  // Funkcja tworząca początkową populację tras
  function initialPopulation(popSize, numPoints) {
    let population = [];
    for (let i = 0; i < popSize; i++) {
      let order = [];
      for (let j = 0; j < numPoints; j++) {
        order.push(j);
      }
      shuffle(order); // Losowe ustawienie kolejności miast
      population.push(order);
    }
    return population;
  }
  
  // Funkcja mieszająca kolejność elementów w tablicy
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Funkcja selekcji rodziców na podstawie wartości funkcji przystosowania (odwrotność odległości)
  function selectParents(population, points) {
    let fitness = population.map(individual => 1 / calcDistance(points, individual));
    let totalFitness = fitness.reduce((acc, val) => acc + val, 0);
    let probabilities = fitness.map(f => f / totalFitness);
    let parents = [];
    for (let i = 0; i < 2; i++) {
      let pick = Math.random();
      let current = 0;
      for (let j = 0; j < population.length; j++) {
        current += probabilities[j];
        if (pick <= current) {
          parents.push(population[j]);
          break;
        }
      }
    }
    return parents;
  }
  
  // Funkcja krzyżowania rodziców w celu generowania potomstwa
  function crossover(parents) {
    let child = Array(parents[0].length).fill(-1);
    let [start, end] = [Math.floor(Math.random() * parents[0].length), Math.floor(Math.random() * parents[0].length)];
    if (start > end) {
      [start, end] = [end, start];
    }
    for (let i = start; i <= end; i++) {
      child[i] = parents[0][i];
    }
    let remaining = parents[1].filter(item => !child.includes(item));
    for (let i = 0; i < child.length; i++) {
      if (child[i] === -1) {
        child[i] = remaining.shift();
      }
    }
    return child;
  }
  
  // Funkcja mutacji potomstwa
  function mutate(child, mutationRate) {
    for (let i = 0; i < child.length; i++) {
      if (Math.random() < mutationRate) {
        let swapWith = Math.floor(Math.random() * child.length);
        [child[i], child[swapWith]] = [child[swapWith], child[i]];
      }
    }
    return child;
  }
  
  // Algorytm genetyczny rozwiązujący problem komiwojażera
  function geneticAlgorithm(points, popSize, generations, mutationRate) {
    let population = initialPopulation(popSize, points.length);
    let bestRoute = null;
    for (let gen = 0; gen < generations; gen++) {
      let newPopulation = [];
      for (let i = 0; i < popSize / 2; i++) {
        let parents = selectParents(population, points);
        let child = crossover(parents);
        child = mutate(child, mutationRate);
        newPopulation.push(parents[0], child);
      }
      population = newPopulation;
      bestRoute = population.reduce((best, individual) => {
        return calcDistance(points, individual) < calcDistance(points, best) ? individual : best;
      });
      console.log(`Generacja ${gen + 1}: Najlepsza odległość - ${calcDistance(points, bestRoute)}`);
    }
    return bestRoute;
  }
  
  // Wywołanie algorytmu genetycznego
  const numPoints = 5; // liczba miast
  const popSize = 30; // rozmiar populacji
  const generations = 4; // liczba pokoleń
  const mutationRate = 0.015; // współczynnik mutacji
  
  const points = createPoints(numPoints);
  const bestRoute = geneticAlgorithm(points, popSize, generations, mutationRate);
  console.log("Najlepsza trasa:", bestRoute);
  console.log("Najlepsza odległość:", calcDistance(points, bestRoute));
  