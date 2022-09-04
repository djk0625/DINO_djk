CREATE DATABASE dino default CHARACTER SET UTF8;
use dino;
CREATE TABLE usertbl(
    userid VARCHAR(300) PRIMARY KEY NOT NULL,
    userpw VARCHAR(300) NOT NULL,
    userplan VARCHAR(300) NOT NULL,
    username VARCHAR(300) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    business_number VARCHAR(50) NOT NULL,
    userdate DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=INNODB;
CREATE TABLE apikey(
    userid VARCHAR(300) PRIMARY KEY NOT NULL,
    ssid VARCHAR(300) NOT NULL,
    sspw VARCHAR(300) NOT NULL,
    atid VARCHAR(300) NOT NULL,
    atpw VARCHAR(300) NOT NULL,
    cpid VARCHAR(300) NOT NULL,
    cpcode VARCHAR(300) NOT NULL,
    cpak VARCHAR(300) NOT NULL,
    cpsk VARCHAR(300) NOT NULL,
    cpday VARCHAR(300) NOT NULL,
    elevenapi VARCHAR(300) NOT NULL,
    rtapi VARCHAR(300) NOT NULL,
    rtday VARCHAR(300) NOT NULL,
    wpid VARCHAR(300) NOT NULL,
    wppw VARCHAR(300) NOT NULL
) ENGINE=INNODB;
CREATE TABLE taobao(
    productid VARCHAR(300) PRIMARY KEY NOT NULL,
    title VARCHAR(300) NOT NULL,
    price VARCHAR(300) NOT NULL,
    orginalprice VARCHAR(300) NOT NULL
) ENGINE=INNODB;
CREATE TABLE taobaoimg(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    productid VARCHAR(300) NOT NULL,
    img VARCHAR(300) NOT NULL
) ENGINE=INNODB;
CREATE TABLE prop(
    propid INT PRIMARY KEY NOT NULL,
    productid VARCHAR(300) NOT NULL,
    propname VARCHAR(300) NOT NULL,
    price VARCHAR(300) NOT NULL,
    orginalprice VARCHAR(300) NOT NULL,
    img VARCHAR(300) NOT NULL
) ENGINE=INNODB;
CREATE TABLE descimg(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    propid VARCHAR(300) NOT NULL,
    img VARCHAR(300) NOT NULL
CREATE TABLE userproduct(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    userid VARCHAR(300) NOT NULL,
    productid VARCHAR(300) NOT NULL
) ENGINE=INNODB;
