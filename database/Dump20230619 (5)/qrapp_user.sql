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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `create_time` datetime DEFAULT NULL COMMENT 'Create Time',
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role_id` varchar(255) DEFAULT NULL,
  `auth_key` varchar(255) DEFAULT NULL,
  `controller_name` varchar(255) DEFAULT NULL,
  `controller_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=140 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (17,NULL,'superadmin','superadmin@gmail.com','123456','1','Bearer 7d1bd9f578b7946e0b4aefe2dfc7ccfa6672271754772bffa9ff32a3554058046ac765c8db8ee587d601c79e68d86c0c6dacf2997e77965a317bf5cb0ed0cda8',NULL,NULL),(121,'2023-04-20 16:53:14','controller-umer','umer@gmail.com','123456','2','Bearer c12a316cbab967c8e917db073ee1790cfb363481d03f5d4d3ac2d8231fa69daa6abf1e7395da1a6e3c83c8d0e8c083ca244f3cf3d48bf64cba5fb5238f452b61','superadmin',17),(122,'2023-04-20 16:54:40','user-umer','umer1@gmail.com','123456','3','Bearer acfeba01c4ab25ffc34287cfce750136df3e3e8898993555af34eeddfc58f8380dfcd6f6bc65a9c0c718c00742f94416238195eb96bc088640867a3b4e6c99ad','controller-umer',121),(123,'2023-04-25 05:23:00','saad','saad@gmail.com','S123456','1','Bearer e69c2857010d745d0911195b8322cd2d1d1632eeee158abf34a0ea0112bd008cd510b0c3a9647826614d8140ac927f55b1834b3ccc5de24efce805d97e4b306c','superadmin',17),(124,'2023-04-25 05:23:45','test-umer','test@gmail.com','S123456','2','Bearer 52bed55d3ecced661d0f8a3f84c5b50cd14b5a19ae088092a23d594b4d1bb319ec79972743847430c4f6c74f866e303e4c07a76cfc906593016ee457edad4a41','controller-umer',121),(125,'2023-04-25 05:32:17','saad1','saad1@gmail.com','S123456','2','Bearer 8f716cf205667648cf5e431843cfd85e0e77cad85cf40128e95b04fcb19ff489028c66d041990065c036fb91a46cb30153ae38250f2ce92f44bc855fbccc49f9','saad',123),(126,'2023-04-25 05:32:56','saadtest','saadtest@gmail.com','S123456','3','Bearer 8b579603d69dfb03e40446850fbd47e0af0e669785e56cc7f1f64f2f44727d3d7f03ac52633c6be6dc81cfb714a767d6d63b880fd64d3e86825d3e5d0eb3d88d','saad1',125),(127,'2023-04-26 03:13:13','admin','admin@gmail.com','123456S','2','Bearer 3f2d178b6f6a4ca2d46c31075cb69134b410d5cd93ca43e8726bdf2c04bc88f726d35150f7f92b3666d46d40c316003d1a1dd1b112b598a360f48c485bf48c86','superadmin',17),(128,'2023-04-26 03:24:55','admin1','admin1@gmail.com','123456S','2','Bearer 826928cf6d1d243ae73c7f0515a9b9c0a1e464085aa18baf04b2353ccd26705ed5c0c57356262e2c96f4338c19ba29ed3afd8bd204bf92491016bb850f7834ed','superadmin',17),(129,'2023-04-26 03:25:22','adminuser','adminuser@gmail.com','123456S','3','Bearer fc3b01e94f08056f866c754a3a7819f6158c2254a685dbbab05315d568e46afe7725d9c8151fed1abf3b0ea586ed60c9359f23f676a467cbc800bbc98800477a','admin1',128),(130,'2023-05-11 18:54:15','saad','saadali@gmail.com','123456S','2','Bearer 5177679e11dfeb3d9995c274e72d6eea019788d166d92c7ef32f8fcb86b086a800ea328c13213c70f13f050e7cfb2151a5179866bcd4efe1e72227521c31db68','superadmin',17),(131,'2023-05-11 18:54:56','umer shafiq','umershafiq@gmail.com','123456S','3','Bearer c798d2d8eb46e99a5cb11cf4f6af68d59e00b9d468ae5fc37a83aea8ef443cee47e7399442a41f3c9a1e1754aa0e13bcfb11208244d9e4c9d4ef3b192a88972b','saad',130),(132,'2023-05-12 17:44:10','fahad-admin','fahad-admin@gmail.com','q1q1q1','2','Bearer db231991d783d8d5651943fad135a7410fd9169d961994a21786b7556e09f8b51e2df0ed7dd6cc00733dbbc6e128703cee9d3dd1bef5fc3f467faf074bbe758f','superadmin',17),(133,'2023-05-12 17:44:41','fahad','fahad@gmail.com','q1q1q1','2','Bearer 07ca0a329f81fcce048af6c3a5b029d14bf5ae2931f367fb01d787c1d336988d51b90aface80fb912240e99077f43d57ed875ee43b01fa479ab77036c9e5f78c','superadmin',17),(134,'2023-05-12 17:45:18','johnson','johnson@gmail.com','q1q1q1','2','Bearer dc99666332cc9798b669bb8d490768bd4adf09922ddfc381f16f78af17cb4412251442bb1d875f80533fe554d0ca802911de45e691abeb03e02c79de1a4075b6','superadmin',17),(135,'2023-05-12 17:47:37','alexander','alexander@gmail.com','q1q1q1','3','Bearer 692a0ff96f39222aec7df421fb0a51595851180abf52b09152df2186c1b47497fd927b53bb2b033ebed38177930fd2fe5341f70cc7d89233378235ad8d9d6091','johnson',134),(136,'2023-05-12 18:12:58','acon','acon@gmail.com','123456','2','Bearer 15df3b205a219787d6d407ea625e1db7c142d24ee3390a9e6d36a81bb09bbd9e9bd9dfe6f106005d653e99e21956802fb228531f8726b9f48c95b961d5e38de2','superadmin',17),(137,'2023-05-12 18:13:46','arya','aryastark@gmail.com','q1q1q1','3','Bearer acdf9d025bc525ac1a820b19a40efcb64c6c8b4afe90548f2b77a6463b78fee513619614f9990d6c603c8a5a526aa2ffc9eb1d4782e36253461b7de042ce1792','acon',136),(138,'2023-06-08 14:26:14','mentor888','superadminZXZX@gmail.com','123456DASDSA','2','Bearer 7c73a3fc7c21e06e89826a350804c5070f083d4f3b1b7f7e708b343acaa7cf7cb17cf7e52030a8e9f13c29eef9bbb10a287e4adb783ff82e3a3e992406551540','superadmin',17),(139,'2023-06-08 16:35:45','mentor888','superaSADSAdmin@gmail.com','123456AFSDF','2','Bearer dcf55724b0a116e1ca35b81e0e3d4bdc00ae667ec13abcb7839a7e755b85230d12340b0eea081220a81ad99d005d7ab8105c99545e3bc79e0914845279fbca51','superadmin',17);
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

-- Dump completed on 2023-06-19 14:58:50
