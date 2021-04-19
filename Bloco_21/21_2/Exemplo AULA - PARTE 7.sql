SELECT * FROM hotel.Customers;
SELECT * FROM hotel.Reservations;

SELECT * FROM hotel.Customers AS c
WHERE EXISTS (
	SELECT * FROM hotel.Reservations 
    WHERE c.CustomerId = Reservations.CustomerId
    );
    
SELECT * FROM hotel.Customers AS c
WHERE NOT EXISTS (
	SELECT * FROM hotel.Reservations 
    WHERE c.CustomerId = Reservations.CustomerId
    );
    

SELECT * FROM praticando.manufacturers;
SELECT * FROM praticando.products;

SELECT * FROM praticando.products AS p
WHERE NOT EXISTS (
	SELECT * FROM praticando.manufacturers
    WHERE p.Manufacturer = manufacturers.Code
);

SELECT * FROM praticando.manufacturers as m
	WHERE NOT EXISTS (
		SELECT * FROM praticando.products
        WHERE Manufacturer = m.code
);

-- 1
SELECT * FROM hotel.Books;
SELECT * FROM hotel.Books_Lent;

SELECT id, title FROM hotel.Books AS b
WHERE NOT EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE book_id = b.id
);
-- 2
SELECT id, title FROM hotel.Books AS b
WHERE EXISTS(
	SELECT * FROM hotel.Books_Lent
    WHERE book_id = b.id
)
HAVING b.title LIKE '%lost%';

SELECT id, title FROM hotel.Books AS b
WHERE EXISTS(
	SELECT * FROM hotel.Books_Lent
    WHERE book_id = b.id AND b.title LIKE '%lost%'
);
-- 3
SELECT * FROM hotel.CarSales;
SELECT * FROM hotel.Customers;

SELECT Name FROM hotel.Customers AS ct
WHERE NOT EXISTS(
	SELECT * FROM hotel.CarSales
    WHERE CustomerID = ct.CustomerID
);
-- 4
SELECT * FROM hotel.Cars;
SELECT * FROM hotel.CarSales;
SELECT * FROM hotel.Customers;

SELECT ct.name, c.name 
FROM hotel.Customers AS ct
INNER JOIN hotel.CarSales AS cs
ON ct.CustomerId = cs.CustomerID
INNER JOIN hotel.Cars AS c
ON c.Id = cs.CarID;

SELECT cus.name, car.name
FROM hotel.Cars car
INNER JOIN hotel.Customers cus
WHERE EXISTS(
    SELECT *
    FROM hotel.CarSales
    WHERE CustomerID = cus.CustomerId
    AND carID = car.ID
);