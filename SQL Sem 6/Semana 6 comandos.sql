CREATE DATABASE CursoAWCS3C;
USE CursoAWCS3C;

CREATE TABLE estudiantes(
id INT auto_increment PRIMARY KEY,
nombre varchar(100) NOT NULL,
apellido varchar (100) NOT NULL,
correo varchar(100) NOT NULL,
edad INT NOT NULL
)
-- CRUD 
-- CREATE READ UPDATE DELETE

INSERT INTO estudiantes (nombre, apellido, correo, edad) VALUES 
('Ana', 'López', 'ana@correo.com', '23'),
('Carolina', 'Cespedes', 'carolina@correo.com', '35'),
('Alberto', 'Mora', 'albertillo@correo.com', '43');

SELECT * FROM estudiantes WHERE id = 4;
SELECT id, correo FROM estudiantes;
SELECT id + edad AS Prueba FROM estudiantes;

UPDATE estudiantes SET nombre = 'Joshua', apellido = 'Loria' WHERE Id = 1 


DELETE FROM estudiantes WHERE id = 3;


TRUNCATE TABLE estudiantes;





