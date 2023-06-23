-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: qrapp
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sites`
--

DROP TABLE IF EXISTS `sites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sites` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `create_time` datetime DEFAULT NULL COMMENT 'Create Time',
  `site_id` int DEFAULT NULL,
  `site_address` varchar(255) DEFAULT NULL COMMENT 'Site Address',
  `site_lat` varchar(255) DEFAULT NULL COMMENT 'Site Latitude',
  `site_long` varchar(255) DEFAULT NULL COMMENT 'Site Longitude',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sites`
--

LOCK TABLES `sites` WRITE;
/*!40000 ALTER TABLE `sites` DISABLE KEYS */;
INSERT INTO `sites` VALUES (29,'2023-04-25 04:56:23',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(30,'2023-04-25 04:57:25',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(31,'2023-04-25 04:57:49',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(32,'2023-04-25 05:35:09',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(33,'2023-04-25 05:36:54',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(34,'2023-05-11 18:58:19',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(35,'2023-05-11 19:00:54',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(36,'2023-05-12 17:57:08',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(37,'2023-05-12 18:15:10',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(38,'2023-05-12 18:35:57',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(39,'2023-05-12 18:43:48',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(40,'2023-05-12 18:44:44',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(41,'2023-05-12 18:45:56',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(42,'2023-05-12 18:55:21',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(43,'2023-05-12 18:55:42',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(44,'2023-05-12 19:03:00',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(45,'2023-05-12 19:07:00',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(46,'2023-05-12 19:10:56',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(47,'2023-05-12 19:20:46',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(48,'2023-05-12 19:25:34',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(49,'2023-05-12 19:50:46',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(50,'2023-05-12 19:51:59',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014'),(51,'2023-05-12 19:53:47',12,'SITEID=\"12 rue de la bastide 95800 Cergy \n »\n','49.0488672','2.0329014');
/*!40000 ALTER TABLE `sites` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-19 14:58:51
