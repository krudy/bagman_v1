# bagman_v1
genetic algorithm for solving the travelling salesman problem

Cel:
Program implementuje algorytm genetyczny w celu rozwiązania problemu komiwojażera. Problem ten polega na znalezieniu najkrótszej trasy, która odwiedza wszystkie miasta dokładnie raz i wraca do punktu wyjścia. Program może być wykorzystany np. do zaplanowania instalacji sieci internetiowej miedzy podanymi punktami. 

Znaczenie zmiennych:
headerResult, headerResult2, headerResult3, resultList: Zmienne przechowujące odniesienia do elementów HTML, gdzie będą wyświetlane wyniki.
numPoints: Liczba miast.
popSize: Rozmiar populacji w algorytmie genetycznym.
generations: Liczba pokoleń algorytmu genetycznego.
mutationRate: Współczynnik mutacji w algorytmie genetycznym.
points: Tablica zawierająca losowo wygenerowane punkty (miasta) na płaszczyźnie.
bestRoute: Najlepsza znaleziona trasa w problemie komiwojażera.

Opis funkcji:

Funkcja getRandomIntInclusive(min, max)
Generuje losową liczbę całkowitą z podanego zakresu, uwzględniając wartości graniczne min i max.

Funkcja createPoints(numPoints)
Generuje tablicę losowych punktów reprezentujących miasta na płaszczyźnie o współrzędnych x i y.

Funkcja calcDistance(points, order)
Oblicza odległość między miastami w kolejności określonej przez tablicę order, wykorzystując wzór na odległość euklidesową.

Funkcja createOrderPoints(order, points)
Tworzy tablicę punktów x i y na podstawie kolejności miast zdefiniowanej w tablicy order.

Funkcja initialPopulation(popSize, numPoints)
Generuje początkową populację tras (kolejności odwiedzania miast) o rozmiarze popSize.

Funkcja shuffle(array)
Miesza kolejność elementów w tablicy, wykorzystywana do losowego ustawienia kolejności miast.

Funkcja selectParents(population, points)
Wybiera rodziców do krzyżowania na podstawie wartości funkcji przystosowania, której odwrotność odpowiada odległości między miastami.

Funkcja crossover(parents)
Przeprowadza krzyżowanie rodziców w celu generowania potomstwa.

Funkcja mutate(child, mutationRate)
Dokonuje mutacji potomstwa z zadanym współczynnikiem mutacji.

Funkcja geneticAlgorithm(points, popSize, generations, mutationRate)
Implementuje algorytm genetyczny rozwiązujący problem komiwojażera. Iteracyjnie tworzy nowe populacje, wybiera najlepszą trasę, aktualizuje listę wyników i zwraca najlepszą znalezioną trasę.

Wywołanie algorytmu genetycznego:
Algorytm genetyczny jest uruchamiany z określonymi parametrami: liczba miast (numPoints), rozmiar populacji (popSize), liczba pokoleń (generations) i współczynnik mutacji (mutationRate). Następnie wynik, czyli najlepsza trasa, jest wyświetlany w określonych elementach HTML (headerResult2 i headerResult3).

Podsumowanie:
Kod implementuje algorytm genetyczny w celu rozwiązania problemu komiwojażera. Rozpoczyna od losowego generowania miast na płaszczyźnie, następnie iteracyjnie ewoluuje populację tras, wybierając najlepsze rozwiązania. Wyniki są wyświetlane na stronie internetowej w określonych elementach HTML.
