CREATE DATABASE  IF NOT EXISTS `photoloverdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `photoloverdb`;
-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: photoloverdb
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `photo_post`
--

DROP TABLE IF EXISTS `photo_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `photo_post` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(200) NOT NULL,
  `createdat` date NOT NULL,
  `photolink` varchar(200) NOT NULL,
  `user_id` int(11) NOT NULL,
  `likes` longtext,
  `tags` longtext,
  PRIMARY KEY (`post_id`),
  KEY `fk_photo_post_user_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=988 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo_post`
--

LOCK TABLES `photo_post` WRITE;
/*!40000 ALTER TABLE `photo_post` DISABLE KEYS */;
INSERT INTO `photo_post` VALUES (55,'bridge','2019-05-25','https://avatars.mds.yandex.net/get-pdb/34158/21a778e7-8bb7-425a-8374-4fdbf138c2ea/s1200?webp=false',124,'[\"dudek\",\"petrov\"]','[\"#beautiful\"]'),(363,'green forest','2018-04-21','https://images.wallpaperscraft.com/image/lake_trees_coast_summer_cloudy_clouds_green_54045_1920x1080.jpg',124,'[\"snow\"]','[\"#nature\"]'),(396,'yummy','2015-01-30','https://www.artsfon.com/pic/201411/2560x1600/artsfon.com-28591.jpg',222,'[\"ivanov\"]','[\"#fruit\"]'),(443,'Paris','2019-05-25','https://wallbox.ru/resize/1400x1050/wallpapers/main/201614/b77f7fdfb8c2b27.jpg',357,'[]','[\"#color\",\"#beautiful\"]'),(460,'ice-cream','2019-02-12','https://www.spafinder.com/wp-content/uploads/2015/08/iStock_000015947146_Double.jpg',124,'[\"ivanov\"]','[\"#color\"]'),(484,'city','2011-01-02','https://images.wallpaperscraft.com/image/bay_bridge_night_san_francisco_54849_1920x1080.jpg',222,'[\"petrov\"]','[\"#beautiful\"]'),(558,'space','1997-02-24','https://w-dog.ru/wallpapers/3/4/424165804605452.jpg',357,'[]','[\"#beautiful\"]'),(667,'2016','1991-02-14','https://avatars.mds.yandex.net/get-zen_doc/197791/pub_5bff992cec988914b928a3c9_5bffa05c1bae811302cfd509/scale_1200',111,'[\"petrov\",\"ivanov\",\"dudek\"]','[\"#color\"]'),(708,'fast car','2013-07-29','https://avatars.mds.yandex.net/get-pdb/1549417/7ae6a610-449f-4d05-adbd-c031045b0927/s1200',222,'[]','[\"#cars\"]'),(756,'coffee','2002-05-06','https://cdn.oboi7.com/dc625d3ec07fc9264e042aa783f2985ff9965ab6/kofe-latte-art.jpg',357,'[]','[\"#morning\"]'),(769,'red pomegranate','2004-06-08','https://avatars.mds.yandex.net/get-pdb/1340633/81f31978-eabf-4c73-99e6-2f1c7249047d/s1200',111,'[\"petrov\"]','[\"#fruit\"]'),(800,'Snow Leopard','2001-09-11','https://avatars.mds.yandex.net/get-pdb/38069/5de7ffaa-438a-4dcc-837e-3f8023aadab8/s1200?webp=false',222,'[]','[\"#animals\"]'),(866,'lamborghini','2005-12-25','https://wpapers.ru/wallpapers/avto/Lamborghini/11270/download/2560x1440_Lamborghini-Aventador-Gold.jpg',357,'[]','[\"#cars\"]');
/*!40000 ALTER TABLE `photo_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1235 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (111,'Petrov','[B@61139e5b'),(124,'Ivanov','[B@22726493'),(222,'Snow','[B@2fe3e219'),(357,'Dudek','[B@341a0715');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-25 16:32:55
