/*
 Navicat Premium Data Transfer
 
 Source Server Type    : MySQL
 Source Server Version : 50716
 Source Host           : localhost:3306
 Source Schema         : test01
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for dept
-- ----------------------------
DROP TABLE IF EXISTS `dept`;
CREATE TABLE `dept` (
  `deptno` int(11) NOT NULL AUTO_INCREMENT,
  `dname` varchar(14) DEFAULT NULL,
  `loc` varchar(13) DEFAULT NULL,
  PRIMARY KEY (`deptno`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of dept
-- ----------------------------
BEGIN;
INSERT INTO `dept` VALUES (10, 'accountting', 'NeWYORK');
INSERT INTO `dept` VALUES (20, 'research', 'DALLAS');
INSERT INTO `dept` VALUES (30, 'sales', 'CHICAGO');
INSERT INTO `dept` VALUES (40, 'operations', 'BOSTON');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
