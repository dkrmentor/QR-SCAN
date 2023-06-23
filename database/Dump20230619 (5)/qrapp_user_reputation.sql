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
-- Table structure for table `user_reputation`
--

DROP TABLE IF EXISTS `user_reputation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_reputation` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `create_time` datetime DEFAULT NULL COMMENT 'Create Time',
  `name` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `site` varchar(255) DEFAULT NULL,
  `controller` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `identity_card` varchar(255) DEFAULT NULL,
  `round_controller` varchar(255) DEFAULT NULL,
  `cleanliness_workstation` varchar(255) DEFAULT NULL,
  `storage_documents` varchar(255) DEFAULT NULL,
  `electronic_paperhandrail` varchar(255) DEFAULT NULL,
  `round_reports` varchar(255) DEFAULT NULL,
  `dress_code` varchar(255) DEFAULT NULL,
  `onsite_behaviour` varchar(255) DEFAULT NULL,
  `punctuality` varchar(255) DEFAULT NULL,
  `reactivity` varchar(255) DEFAULT NULL,
  `observations` varchar(255) DEFAULT NULL,
  `user_position` varchar(255) DEFAULT NULL,
  `user_language` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `user_lat` double DEFAULT NULL,
  `user_long` double DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `controller_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_reputation`
--

LOCK TABLES `user_reputation` WRITE;
/*!40000 ALTER TABLE `user_reputation` DISABLE KEYS */;
INSERT INTO `user_reputation` VALUES (46,'2023-05-12 18:04:27','alexander','alexander','France','johnson','2023-05-12 17:48:36.807252','2023-05-12 17:48:36.811715','Oui','Excellent','Insuffisant','Correct','Correct','Excellent','Inacceptable','Excellent','Excellent','Insuffisant','alexander@gmail.com','france','Inacceptable','SITEID=\"12 rue de la bastide 95800 Cergy \n »\n',49.0488672,2.0329014,135,134),(47,'2023-05-12 18:16:45','arya','arya','Pakistan','acon','2023-05-12 18:14:44.764554','2023-05-12 18:14:44.767467','Oui','Inacceptable','Insuffisant','Correct','Inacceptable','Insuffisant','Insuffisant','Insuffisant','Inacceptable','Correct','fich3 de controller','manager','Excellent','SITEID=\"12 rue de la bastide 95800 Cergy \n »\n',49.0488672,2.0329014,137,136),(48,'2023-05-12 19:11:28','alexander','fahad','Pakistan','johnson','2023-05-12 19:10:46.274012','2023-05-12 19:10:46.276600','Oui','Excellent','Correct','Correct','Correct','Correct','Excellent','Correct','Correct','Correct','hello','ali','Excellent','SITEID=\"12 rue de la bastide 95800 Cergy \n »\n',49.0488672,2.0329014,135,134),(49,'2023-05-12 19:52:29','alexander','Pakistan','Pakistan','johnson','2023-05-12 19:51:46.827305','2023-05-12 19:51:46.829770','Non','Excellent','Insuffisant','Inacceptable','Insuffisant','Correct','Excellent','Excellent','Ponctualité (prise et fin de service)','Réactivité','observation ','Pakistan','Language','SITEID=\"12 rue de la bastide 95800 Cergy \n »\n',49.0488672,2.0329014,135,134),(50,'2023-05-12 19:54:22','alexander','check','check','johnson','2023-05-12 19:53:34.420996','2023-05-12 19:53:34.423344','Oui','Excellent','Insuffisant','Insuffisant','Inacceptable','Inacceptable','Excellent','Inacceptable','Inacceptable','Excellent','done issue','check','Correct','SITEID=\"12 rue de la bastide 95800 Cergy \n »\n',49.0488672,2.0329014,135,134);
/*!40000 ALTER TABLE `user_reputation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-19 14:58:50
