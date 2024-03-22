Create table for School

CREATE TABLE School ( SchoolID INT PRIMARY KEY, SchoolName VARCHAR(100), Location VARCHAR(100), EstablishedYear INT );

Insert sample rows into School table

INSERT INTO School (SchoolID, SchoolName, Location, EstablishedYear)

VALUES

(1, 'Example  new High School', 'City A', 1990), (2, 'kengson School', 'City B', 2005), (3, 'Test Elementary School', 'City C', 2010);

Create table for Teacher

CREATE TABLE Teacher ( TeacherID INT PRIMARY KEY, TeacherName VARCHAR(100), SubjectTaught VARCHAR(100), SchoolID INT, FOREIGN KEY (SchoolID) REFERENCES School (SchoolID)

);

Insert sample rows into Teacher table

INSERT INTO Teacher (TeacherID, TeacherName, SubjectTaught, SchoolID)

VALUES

(1. shivam shinde', 'Mathematics', 1),

(2, 'Aliya shekh', 'English', 2),

(3, 'Mina jadhav', 'Science', 3);