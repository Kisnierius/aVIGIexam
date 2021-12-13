# aVIGIexam
**VIGI2 exam Task**

The page is dedicated for a car service companies to store information about the cars their are servicing, their service history logs, parts used, owner changes etc.

**Getting started**

Project uses:
- express;
- MySql;
- React;
- scss;
- milligram css

**MySQL Tables used:**

CREATE TABLE Cars (  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Create Time',
    update_time DATETIME ON UPDATE CURRENT_TIMESTAMP COMMENT 'Update Time',
    make VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    plateNo VARCHAR(12) NOT NULL,
    owner_id INT
) DEFAULT CHARSET UTF8 COMMENT ''; 

CREATE TABLE Owner (  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Create Time',
    update_time DATETIME ON UPDATE CURRENT_TIMESTAMP COMMENT 'Update Time',
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    phone INT NOT NULL,
    email VARCHAR(255) NOT NULL
) DEFAULT CHARSET UTF8 COMMENT '';

CREATE TABLE repair (  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Create Time',
    repair_title VARCHAR(255) NOT NULL,
    repair_comment VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    car_id INT NOT NULL,
    owner_id INT NOT NULL,
    user_id INT NOT NULL,
part_id INT
) DEFAULT CHARSET UTF8 COMMENT '';

CREATE TABLE part_used (  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Create Time',
    part_title VARCHAR(255) NOT NULL,
    part_comment VARCHAR(255) NOT NULL,
    part_price INT NOT NULL,
    repair_id INT NOT NULL,
    user_id INT NOT NULL
) DEFAULT CHARSET UTF8 COMMENT '';

CREATE TABLE users(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(500) NOT NULL
) DEFAULT CHARSET UTF8 COMMENT '';

**npm packets:**

npm install express cors mysql2 dotenv
npm install eslint nodemon --save-dev
npm i bcryptjs
npm i jsonwebtoken
npx create-react-app app-name
npm install --save-dev sass
npm i --save react-router-dom
npm i milligram

**Backend end-ponts:**

router.get('/cars', handleGetcars);
router.get('/cars/:id', handleGetcar);
router.delete('/cars/:id', handleDeletecar);
router.post('/cars/:id', handleUpdateOwnerId);
router.post('/cars', handleCreatecar);

router.get('/owners', handleGetowners);
router.get('/owners/:id', handleGetowner);
router.delete('/owners/:id', handleDeleteowner);
router.post('/owners/:id', handleUpdateOwnerContacts);
router.post('/owners', handleCreateowner);
router.get('/ownerscars/:id', handleGetownerCars);

router.get('/parts', handleGetparts);
router.get('/parts/:id', handleGetpart);
router.delete('/parts/:id', handleDeletepart);
router.post('/parts', handleCreatepart);
router.get('/partsrepairs/:id', handleGetpartsRepair); // Repair ID

router.get('/repairs', handleGetrepairs);
router.get('/repairs/:id', handleGetrepair);
router.delete('/repairs/:id', handleDeleterepair);
router.post('/repairs', handleCreaterepair);
router.get('/repairscars/:id', handleGetrepairsCar); // CAR ID

router.post('/register', handleRegisterUser);
router.post('/login', handleLoginUser);
router.get('/profile/:email', isAuthenticated, handleGetUserProfile);
