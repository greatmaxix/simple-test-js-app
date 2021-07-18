-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: test_app
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `answers_json` json NOT NULL,
  `right_answer_keys` json NOT NULL,
  `is_multiple` tinyint DEFAULT NULL,
  `test_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `test_id_fk_idx` (`test_id`),
  CONSTRAINT `test_id_fk` FOREIGN KEY (`test_id`) REFERENCES `test` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (1,'{\"1\": {\"answer_text\": \"Кедр\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"Сокол\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"Первый\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"1\"]',0,1),(2,'{\"1\": {\"answer_text\": \"12.04.1961\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"12.04.1960\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"12.04.1962\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"1\"]',0,2),(3,'{\"1\": {\"answer_text\": \"ЕАМ\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"ERP\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"PLM\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"2\"]',0,3),(4,'{\"1\": {\"answer_text\": \"продуктовые, процессные\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"объективные, субъективные\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"патентные, лицензионные\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"1\"]',0,4),(5,'{\"1\": {\"answer_text\": \"Б В Г А\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"Б В А Г\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"В Б Г А\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"3\"]',0,5),(6,'{\"1\": {\"answer_text\": \"приобретение существенной конкурентоспособности и реализация на рынке\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"больший масштаб использования инновации, чем новшества\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"повышение рейтинга организации за счет использования новшества\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"1\"]',0,6),(7,'{\"1\": {\"answer_text\": \"пошаговых процедур, определяющих последовательность технологических операций проектирования;\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"критериев и правил, на основании которых определяется техническое задание\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"графических и текстовых средств, определяющих последовательность разработки плана реализации\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"1\"]',0,7),(8,'{\"1\": {\"answer_text\": \"Проектирование\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"Ввод в эксплуатацию\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"Предпроектное обследование\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"3\"]',0,8),(9,'{\"1\": {\"answer_text\": \"сложность\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"делимость\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"структурированность\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"2\"]',0,9),(10,'{\"1\": {\"answer_text\": \"1 а в б д г е\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"2 в а б г д е\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"3 а г в б д е\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"1\"]',0,10),(11,'{\"1\": {\"answer_text\": \"предынвестиционный анализ\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"планирование проекта\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"выполнения проекта\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"1\"]',0,11),(12,'{\"1\": {\"answer_text\": \"1 выполнение проекта\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"2 завершение проекта\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"3 предынвестиционный анализ проекта\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"2\"]',0,12),(13,'{\"1\": {\"answer_text\": \"оболочек операционной системы Linux\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"операционных систем\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"графических редакторов\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"1\"]',0,13),(14,'{\"1\": {\"answer_text\": \"драйверы\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"утилиты\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"библиотеки\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"1\"]',0,15),(15,'{\"1\": {\"answer_text\": \"управление устройствами\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"создание текстовых документов\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"программирование\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"1\"]',0,16),(16,'{\"1\": {\"answer_text\": \"ядро операционной системы\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"оболочка операционной системы\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"транзитная часть операционной системы\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"1\"]',0,17),(17,'{\"1\": {\"answer_text\": \"Клиентские ОС\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"Системы общего назначения\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"Системы реального времени\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"1\"]',0,18),(18,'{\"1\": {\"answer_text\": \"начальной\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"корневой\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"стартовой\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"2\"]',0,19),(19,'{\"1\": {\"answer_text\": \"названия различных файловых систем\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"расширения графических файлов (рисунков)\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"стартовой\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"2\"]',0,20),(20,'{\"1\": {\"answer_text\": \"названия различных операционных систем\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"2\": {\"answer_text\": \"названия различных файловых систем\", \"answer_image_path\": null, \"answer_sound_path\": null}, \"3\": {\"answer_text\": \"виды кодировки файлов\", \"answer_image_path\": null, \"answer_sound_path\": null}}','[\"2\"]',0,14);
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(511) NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `sound_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES (1,'Какой позывной был у Юрия Гагарина?',NULL,NULL),(2,'Когда Юрий Гагарин полетел в космос?',NULL,NULL),(3,'Организационная стратегия интеграции производства и операций, управления трудовыми ресурсами, финансового менеджмента и управления активами, ориентированная на непрерывную балансировку и оптимизацию ресурсов предприятия посредством специализированного интегрированного пакета прикладного программного обеспечения, обеспечивающего общую модель данных и процессов для всех сфер деятельности – это…',NULL,NULL),(4,'Инновации бывают:',NULL,NULL),(5,'Изготовление опытного образца;',NULL,NULL),(6,'Отличие между инновацией и новшеством – это …',NULL,NULL),(7,'Технологии проектирования – это совокупность …',NULL,NULL),(8,'На каком этапе жизненного цикла создания ИС проводится анализ предметной области?',NULL,NULL),(9,'«Такое свойство системы, как (…) системы означает, что в зависимости от точки зрения на нее она может быть разделена на подсистемы, каждая из которых выполняет свою функцию».',NULL,NULL),(10,'снятие с эксплуатации',NULL,NULL),(11,'Обоснование целей проекта и обоснование экономической эффективности в целом проводится на этапе:',NULL,NULL),(12,'Отчетность и документирование результатов производится на этапе :',NULL,NULL),(13,'KDE, GNOME, Xfce — это названия …',NULL,NULL),(14,'FAT32, Ext2, NTFS — это …',NULL,NULL),(15,'Программы, предназначенные для обслуживания конкретных периферийных устройств',NULL,NULL),(16,'Функции, выполняемые операционной:',NULL,NULL),(17,'Резидентная часть операционной системы постоянно находящаяся в оперативной памяти персонального компьютера в течение всей работы системы',NULL,NULL),(18,'В зависимости от назначения компьютера, на котором системы установлены выделяют …',NULL,NULL),(19,'Папка, которая выступает в качестве вершины файловой структуры и олицетворяет собой носитель, на котором сохраняются файлы носит название …',NULL,NULL),(20,'jpg, gif, png, tiff — это …',NULL,NULL);
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-18 18:42:03
