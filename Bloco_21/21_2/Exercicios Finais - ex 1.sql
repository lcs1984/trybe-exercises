SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.Theater;

-- 1
SELECT m.id, m.title, b.domestic_sales, b.international_sales 
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id;

-- 2
SELECT m.id, m.title, b.domestic_sales, b.international_sales 
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;

-- 3
SELECT m.id, m.title, b.rating
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
ORDER BY b.rating DESC;

-- 4
SELECT t.name, m.title, t.id, t.location
FROM Pixar.Movies AS m
LEFT JOIN Pixar.Theater AS t
ON m.theater_id = t.id
ORDER BY t.name;

-- 5
