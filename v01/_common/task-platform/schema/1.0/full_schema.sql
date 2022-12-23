CREATE TABLE IF NOT EXISTS `history_tm_hints` (
  `historyID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ID` bigint(20) NOT NULL,
  `idTask` bigint(20) NOT NULL,
  `iRank` tinyint(11) NOT NULL,
  `iVersion` int(11) NOT NULL DEFAULT '0',
  `iNextVersion` int(11) DEFAULT NULL,
  `bDeleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`historyID`),
  KEY(`idTask`),
  KEY `synchro` (`iVersion`),
  KEY `iNextVersion` (`iNextVersion`),
  KEY `bDeleted` (`bDeleted`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `history_tm_hints_strings` (
  `historyID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ID` bigint(20) NOT NULL,
  `idHint` bigint(20) NOT NULL,
  `sLanguage` varchar(5) NOT NULL DEFAULT 'fr',
  `sTranslator` varchar(100) NOT NULL,
  `sContent` mediumtext NOT NULL,
  `iVersion` int(11) NOT NULL DEFAULT '0',
  `iNextVersion` int(11) DEFAULT NULL,
  `bDeleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`historyID`),
  KEY `idHint` (`idHint`),
  KEY `idHintsLanguage` (`idHint`, `sLanguage`),
  KEY `synchro` (`iVersion`),
  KEY `iNextVersion` (`iNextVersion`),
  KEY `bDeleted` (`bDeleted`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `history_tm_recordings` (
  `historyID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ID` bigint(20) NOT NULL,
  `idUser` bigint(20) NOT NULL,
  `idPlatform` bigint(20) NOT NULL,
  `idTask` bigint(20) NOT NULL,
  `sData` mediumtext DEFAULT NULL,
  `sDateCreation` DATETIME NOT NULL,
  `iVersion` int(11) NOT NULL,
  `iNextVersion` int(11) DEFAULT NULL,
  `bDeleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`historyID`),
  KEY `idTask` (`idTask`),
  KEY `iVersion` (`iVersion`),
  KEY `iNextVersion` (`iNextVersion`),
  KEY `bDeleted` (`bDeleted`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `history_tm_solutions` (
  `historyID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ID` bigint(20) NOT NULL,
  `idTask` bigint(20) NOT NULL,
  `bInSolution` tinyint(1) NOT NULL DEFAULT 0,
  `sLangProg` varchar(10) NOT NULL,
  `sGroup` varchar(50) DEFAULT NULL,
  `sAuthor` varchar(50) NOT NULL,
  `iVersion` int(11) NOT NULL,
  `iNextVersion` int(11) DEFAULT NULL,
  `bDeleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`historyID`),
  KEY `idTask` (`idTask`),
  KEY `iVersion` (`iVersion`),
  KEY `iNextVersion` (`iNextVersion`),
  KEY `bDeleted` (`bDeleted`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
CREATE TABLE `history_tm_solutions_strings` (
  `historyID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ID` bigint(20) NOT NULL,
  `idSolution` bigint(20) NOT NULL,
  `sLanguage` varchar(5) NOT NULL,
  `sTranslator` varchar(50) DEFAULT NULL,
  `sSource` mediumtext NOT NULL,
  `iVersion` int(11) NOT NULL,
  `iNextVersion` int(11) DEFAULT NULL,
  `bDeleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`historyID`),
  KEY `idSolution` (`idSolution`),
  KEY `idSolutionsLanguage` (`idSolution`, `sLanguage`),
  KEY `iVersion` (`iVersion`),
  KEY `iNextVersion` (`iNextVersion`),
  KEY `bDeleted` (`bDeleted`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
CREATE TABLE IF NOT EXISTS `history_tm_source_codes` (
  `historyID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ID` bigint(20) NOT NULL,
  `idUser` bigint(20) NOT NULL,
  `idPlatform` bigint(20) NOT NULL,
  `idTask` bigint(20) NOT NULL,
  `sDate` datetime NOT NULL,
  `sParams` tinytext DEFAULT NULL,
  `sName` varchar(250) NOT NULL,
  `sSource` mediumtext NOT NULL,
  `bEditable` tinyint(1) NOT NULL,
  `bSubmission` tinyint(1) NOT NULL,
  `bActive` tinyint(1) NOT NULL DEFAULT 0,
  `iRank` tinyint(2) NOT NULL DEFAULT 0,
  `iVersion` int(11) NOT NULL,
  `iNextVersion` int(11) DEFAULT NULL,
  `bDeleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`historyID`),
  KEY `UserTask` (`idUser`,`idTask`,`idPlatform`),
  KEY `idTask` (`idTask`),
  KEY `recordID` (`ID`),
  KEY `iVersion` (`iVersion`),
  KEY `iNextVersion` (`iNextVersion`),
  KEY `bDeleted` (`bDeleted`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `history_tm_submissions` (
  `historyID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ID` bigint(20) NOT NULL,
  `idUser` bigint(20) NOT NULL,
  `idPlatform` bigint(20) NOT NULL,
  `idTask` bigint(20) NOT NULL COMMENT 'Problem''s ID',
  `sDate` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `idSourceCode` bigint(20) NOT NULL,
  `bManualCorrection` tinyint(4) NOT NULL DEFAULT '0',
  `bSuccess` tinyint(4) NOT NULL DEFAULT '0',
  `nbTestsTotal` int(11) NOT NULL DEFAULT '0',
  `nbTestsPassed` int(11) NOT NULL DEFAULT '0',
  `iScore` int(11) NOT NULL DEFAULT '0',
  `bCompilError` tinyint(4) NOT NULL DEFAULT '0',
  `sCompilMsg` mediumtext,
  `sErrorMsg` mediumtext,
  `sFirstUserOutput` mediumtext,
  `sFirstExpectedOutput` mediumtext,
  `sManualScoreDiffComment` varchar(255) DEFAULT NULL,
  `bEvaluated` tinyint(4) NOT NULL DEFAULT '0',
  `bConfirmed` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0 when saved for getAnswer, 1 once the grade process starts',
  `sMode` enum('Submitted','LimitedTime','Contest','UserTest') NOT NULL DEFAULT 'Submitted',
  `sReturnUrl` varchar(255) DEFAULT NULL,
  `iChecksum` int(11) NOT NULL DEFAULT '0',
  `iVersion` int(11) NOT NULL,
  `iNextVersion` int(11) DEFAULT NULL,
  `bDeleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`historyID`),
  KEY `iVersion` (`iVersion`),
  KEY `iNextVersion` (`iNextVersion`),
  KEY `bDeleted` (`bDeleted`),
  KEY `checksum` (`iChecksum`),
  KEY `date` (`sDate`),
  KEY `user` (`idUser`,`idPlatform`),
  KEY `idTask` (`idTask`),
  KEY `userTask` (`idTask`,`idUser`,`idPlatform`),
  KEY `idSourceCode` (`idSourceCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
CREATE TABLE `history_tm_submissions_subtasks` (
  `historyID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ID` bigint(20) NOT NULL,
  `bSuccess` tinyint(1) NOT NULL,
  `iScore` tinyint(3) NOT NULL,
  `idSubtask` bigint(20) NOT NULL,
  `idSubmission` bigint(20) NOT NULL,
  `iVersion` int(11) NOT NULL,
  `iNextVersion` int(11) DEFAULT NULL,
  `bDeleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`historyID`),
  KEY `iVersion` (`iVersion`),
  KEY `iNextVersion` (`iNextVersion`),
  KEY `bDeleted` (`bDeleted`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
CREATE TABLE `history_tm_submissions_tests` (
  `historyID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ID` bigint(20) NOT NULL,
  `idSubmission` bigint(20) NOT NULL DEFAULT '0',
  `idTest` bigint(20) NOT NULL DEFAULT '0',
  `iScore` tinyint(3) NOT NULL DEFAULT '0',
  `iTimeMs` int(11) NOT NULL DEFAULT '0',
  `iMemoryKb` int(11) NOT NULL DEFAULT '0',
  `iErrorCode` int(11) NOT NULL DEFAULT '0',
  `sOutput` mediumtext DEFAULT NULL,
  `sErrorMsg` mediumtext DEFAULT NULL,
  `idSubmissionSubtask` bigint(20) DEFAULT NULL,
  `iVersion` int(11) NOT NULL,
  `iNextVersion` int(11) DEFAULT NULL,
  `bDeleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`historyID`),
  KEY `iVersion` (`iVersion`),
  KEY `iNextVersion` (`iNextVersion`),
  KEY `bDeleted` (`bDeleted`),
  KEY `idSubmission` (`idSubmission`),
  KEY `idTest` (`idTest`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
CREATE TABLE IF NOT EXISTS `history_tm_tasks_limits` (
  `historyID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ID` bigint(20) NOT NULL,
  `idTask` bigint(20) NOT NULL,
  `sLangProg` varchar(255) NOT NULL DEFAULT '*',
  `iMaxTime` int(11) NOT NULL DEFAULT '10000' COMMENT 'max allowed time in ms',
  `iMaxMemory` int(11) NOT NULL COMMENT 'max allowed memory in kb',
  `iVersion` int(11) NOT NULL,
  `iNextVersion` int(11) DEFAULT NULL,
  `bDeleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`historyID`),
  KEY `idTask` (`idTask`),
  KEY `iVersion` (`iVersion`),
  KEY `iNextVersion` (`iNextVersion`),
  KEY `bDeleted` (`bDeleted`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `history_tm_tasks` (
  `historyID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ID` bigint(20) NOT NULL,
  `sTextId` varchar(100) NOT NULL,
  `sSupportedLangProg` varchar(255) NOT NULL DEFAULT '*',
  `sAuthor` varchar(100) NOT NULL,
  `sAuthorSolution` varchar(100) NOT NULL,
  `bShowLimits` tinyint(1) NOT NULL DEFAULT '1',
  `bUserTests` tinyint(1) NOT NULL DEFAULT '1',
  `bChecked` tinyint(1) NOT NULL DEFAULT '0',
  `iEvalMode` tinyint(1) NOT NULL DEFAULT '0',
  `bUsesLibrary` tinyint(1) NOT NULL,
  `bUseLatex` tinyint(1) NOT NULL DEFAULT '0',
  `iTestsMinSuccessScore` tinyint(3) NOT NULL DEFAULT '100',
  `bIsEvaluable` tinyint(1) NOT NULL DEFAULT '1',
  `sTemplateName` varchar(100) NOT NULL DEFAULT '',
  `sScriptAnimation` text,
  `sTaskPath` varchar(100) NOT NULL COMMENT 'taskPath as documented in taskgrader',
  `sRevision` varchar(100) DEFAULT NULL,
  `sAssetsBaseUrl` varchar(250) DEFAULT NULL,
  `iVersion` int(11) NOT NULL,
  `iNextVersion` int(11) DEFAULT NULL,
  `bDeleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`historyID`),
  KEY `iVersion` (`iVersion`),
  KEY `iNextVersion` (`iNextVersion`),
  KEY `bDeleted` (`bDeleted`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `history_tm_tasks_strings` (
  `historyID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ID` bigint(20) NOT NULL,
  `idTask` bigint(20) NOT NULL,
  `sLanguage` varchar(5) NOT NULL,
  `sTitle` varchar(100) NOT NULL,
  `sTranslator` varchar(100) NOT NULL,
  `sStatement` mediumtext NOT NULL,
  `sSolution` mediumtext NOT NULL,
  `iVersion` int(11) NOT NULL DEFAULT '0',
  `iNextVersion` int(11) DEFAULT NULL,
  `bDeleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`historyID`),
  KEY (`idTask`),
  KEY `idTasksLang` (`idTask`, `sLanguage`),
  KEY `iVersion` (`iVersion`),
  KEY `iNextVersion` (`iNextVersion`),
  KEY `bDeleted` (`bDeleted`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `history_tm_tasks_subtasks` (
  `historyID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ID` bigint(20) NOT NULL,
  `idTask` bigint(20) NOT NULL,
  `iRank` tinyint(3) NOT NULL,
  `name` varchar(255) NOT NULL,
  `comments` text NOT NULL,
  `iPointsMax` tinyint(11) NOT NULL,
  `iVersion` int(11) NOT NULL,
  `iNextVersion` int(11) DEFAULT NULL,
  `bDeleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`historyID`),
  KEY `idTask` (`idTask`),
  KEY `iVersion` (`iVersion`),
  KEY `iNextVersion` (`iNextVersion`),
  KEY `bDeleted` (`bDeleted`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
CREATE TABLE `history_tm_tasks_tests` (
  `historyID` bigint(20) NOT NULL AUTO_INCREMENT,
  `ID` bigint(20) NOT NULL,
  `idTask` bigint(20) NOT NULL,
  `idSubtask` bigint(20) DEFAULT NULL,
  `idSubmission` bigint(20) DEFAULT NULL,
  `sGroupType` enum('Example','User','Evaluation','Submission') NOT NULL DEFAULT 'User',
  `idUser` bigint(20) DEFAULT NULL,
  `idPlatform` bigint(20) DEFAULT NULL,
  `iRank` tinyint(3) NOT NULL DEFAULT '0',
  `bActive` tinyint(1) NOT NULL DEFAULT '0',
  `sName` varchar(100) NOT NULL,
  `sInput` mediumtext DEFAULT NULL,
  `sOutput` mediumtext DEFAULT NULL,
  `iVersion` int(11) NOT NULL DEFAULT '0',
  `iNextVersion` int(11) DEFAULT NULL,
  `bDeleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`historyID`),
  KEY `iVersion` (`iVersion`),
  KEY `iNextVersion` (`iNextVersion`),
  KEY `bDeleted` (`bDeleted`),
  KEY `TaskGroup` (`idTask`,`sGroupType`),
  KEY `TaskGroupUser` (`idTask`,`sGroupType`,`idUser`,`idPlatform`),
  KEY `idUser` (`idUser`,`idPlatform`),
  KEY `idTask` (`idTask`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
CREATE TABLE `synchro_version` (
  `iVersion` int(11) NOT NULL,
  `iLastServerVersion` int(11) NOT NULL,
  `iLastClientVersion` int(11) NOT NULL,
  UNIQUE KEY `iVersion_2` (`iVersion`),
  KEY `iVersion` (`iVersion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8CREATE TABLE `tm_grader_checks` (
  `ID` bigint(20) NOT NULL,
  `sDescription` mediumtext NOT NULL COMMENT 'TODO',
  `idTask` bigint(20) DEFAULT NULL COMMENT 'TODO',
  `sParams` tinytext NOT NULL COMMENT 'TODO',
  `sSource` mediumtext NOT NULL COMMENT 'TODO',
  `sTestData` mediumtext NOT NULL COMMENT 'TODO',
  `iVersion` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `synchro` (`iVersion`),
  KEY `idTask` (`idTask`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
CREATE TABLE IF NOT EXISTS `tm_hints` (
  `ID` bigint(20) NOT NULL,
  `idTask` bigint(20) NOT NULL,
  `iRank` tinyint(11) NOT NULL,
  `iVersion` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY (`idTask`),
  KEY `synchro` (`iVersion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `tm_hints_strings` (
  `ID` bigint(20) NOT NULL,
  `idHint` bigint(20) NOT NULL,
  `sLanguage` varchar(5) NOT NULL DEFAULT 'fr',
  `sTranslator` varchar(100) NOT NULL,
  `sContent` mediumtext NOT NULL,
  `iVersion` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `idHint` (`idHint`),
  UNIQUE KEY `idHintsLanguage` (`idHint`, `sLanguage`),
  KEY `synchro` (`iVersion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `tm_platforms` (
  `ID` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `public_key` varchar(500) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY(`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `tm_recordings` (
  `ID` bigint(20) NOT NULL,
  `idUser` bigint(20) NOT NULL COMMENT 'user who created the recording',
  `idPlatform` bigint(20) NOT NULL COMMENT 'platform on which the recording was created',
  `idTask` bigint(20) NOT NULL,
  `sDateCreation` DATETIME NOT NULL,
  `sData` mediumtext DEFAULT NULL,
  `iVersion` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY (`idTask`),
  KEY `synchro` (`iVersion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `tm_solutions` (
  `ID` bigint(20) NOT NULL,
  `idTask` bigint(20) NOT NULL,
  `bInSolution` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'solution is in the solution part of the task',
  `sLangProg` varchar(10) NOT NULL,
  `sGroup` varchar(50) NOT NULL,
  `sAuthor` varchar(50) NOT NULL,
  `iVersion` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `idTask` (`idTask`),
  KEY `synchro` (`iVersion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
CREATE TABLE `tm_solutions_strings` (
  `ID` bigint(20) NOT NULL,
  `idSolution` bigint(20) NOT NULL,
  `sLanguage` varchar(5) NOT NULL,
  `sTranslator` varchar(50) DEFAULT NULL,
  `sSource` mediumtext NOT NULL,
  `iVersion` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `idSolution` (`idSolution`),
  KEY `idSolutionsLanguage` (`idSolution`, `sLanguage`),
  KEY `synchro` (`iVersion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
CREATE TABLE `tm_source_codes` (
  `ID` bigint(20) NOT NULL,
  `idUser` bigint(20) NOT NULL,
  `idPlatform` bigint(20) NOT NULL,
  `idTask` bigint(20) NOT NULL,
  `sDate` datetime NOT NULL,
  `sParams` tinytext DEFAULT NULL,
  `sName` varchar(250) NOT NULL,
  `sSource` mediumtext NOT NULL,
  `bEditable` tinyint(1) NOT NULL,
  `bSubmission` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'corresponds to a submission, not fetched by editor',
  `bActive` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'is active tab',
  `iRank` tinyint(2) NOT NULL DEFAULT 0 COMMENT 'rank in editor tabs',
  `iVersion` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `UserTask` (`idUser`,`idTask`,`idPlatform`),
  KEY `idTask` (`idTask`),
  KEY `synchro` (`iVersion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
CREATE TABLE `tm_submissions` (
  `ID` bigint(20) NOT NULL,
  `idUser` bigint(20) NOT NULL,
  `idPlatform` bigint(20) NOT NULL,
  `idTask` bigint(20) NOT NULL COMMENT 'Problem''s ID',
  `sDate` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `idSourceCode` bigint(20) NOT NULL,
  `bManualCorrection` tinyint(4) NOT NULL DEFAULT '0',
  `bSuccess` tinyint(4) NOT NULL DEFAULT '0',
  `nbTestsTotal` int(11) NOT NULL DEFAULT '0',
  `nbTestsPassed` int(11) NOT NULL DEFAULT '0',
  `iScore` int(11) NOT NULL DEFAULT '0',
  `bCompilError` tinyint(4) NOT NULL DEFAULT '0',
  `sCompilMsg` mediumtext,
  `sErrorMsg` mediumtext,
  `sFirstUserOutput` mediumtext,
  `sFirstExpectedOutput` mediumtext,
  `sManualScoreDiffComment` varchar(255) DEFAULT NULL,
  `bEvaluated` tinyint(4) NOT NULL DEFAULT '0',
  `bConfirmed` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0 when saved for getAnswer, 1 once the grade process starts',
  `sMode` enum('Submitted','LimitedTime','Contest','UserTest') NOT NULL DEFAULT 'Submitted',
  `sReturnUrl` varchar(255) DEFAULT NULL,
  `iChecksum` int(11) NOT NULL DEFAULT '0',
  `iVersion` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `synchro` (`iVersion`),
  KEY `checksum` (`iChecksum`),
  KEY `date` (`sDate`),
  KEY `idUser` (`idUser`,`idPlatform`),
  KEY `idTask` (`idTask`),
  KEY `userTask` (`idTask`,`idUser`,`idPlatform`),
  KEY `idSourceCode` (`idSourceCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
CREATE TABLE `tm_submissions_subtasks` (
  `ID` bigint(20) NOT NULL,
  `bSuccess` tinyint(1) NOT NULL,
  `iScore` tinyint(3) NOT NULL,
  `idSubtask` bigint(20) NOT NULL,
  `idSubmission` bigint(20) NOT NULL,
  `iVersion` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `synchro` (`iVersion`),
  KEY `idSubtask` (`idSubtask`),
  KEY `idSubmission` (`idSubmission`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
CREATE TABLE IF NOT EXISTS `tm_tasks_limits` (
  `ID` bigint(20) NOT NULL,
  `idTask` bigint(20) NOT NULL,
  `sLangProg` varchar(255) NOT NULL DEFAULT '*',
  `iMaxTime` int(11) NOT NULL DEFAULT '10000' COMMENT 'max allowed time in ms',
  `iMaxMemory` int(11) NOT NULL COMMENT 'max allowed memory in kb',
  `iVersion` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `idTask` (`idTask`),
  KEY `iVersion` (`iVersion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `tm_tasks` (
  `ID` bigint(20) NOT NULL,
  `sTextId` varchar(100) NOT NULL,
  `sSupportedLangProg` varchar(255) NOT NULL DEFAULT '*',
  `sAuthor` varchar(100) NOT NULL,
  `sAuthorSolution` varchar(100) NOT NULL,
  `bShowLimits` tinyint(1) NOT NULL DEFAULT '1',
  `bUserTests` tinyint(1) NOT NULL DEFAULT '1',
  `bChecked` tinyint(1) NOT NULL DEFAULT '0',
  `iEvalMode` tinyint(1) NOT NULL DEFAULT '0',
  `bUsesLibrary` tinyint(1) NOT NULL,
  `bUseLatex` tinyint(1) NOT NULL DEFAULT '0',
  `iTestsMinSuccessScore` tinyint(3) NOT NULL DEFAULT '100',
  `bIsEvaluable` tinyint(1) NOT NULL DEFAULT '1',
  `sTemplateName` varchar(100) NOT NULL DEFAULT '',
  `sScriptAnimation` text,
  `sTaskPath` varchar(100) NOT NULL COMMENT 'taskPath as documented in taskgrader',
  `sRevision` varchar(100) DEFAULT NULL,
  `sAssetsBaseUrl` varchar(250) DEFAULT NULL,
  `iVersion` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `synchro` (`iVersion`),
  UNIQUE KEY `text_id` (`sTextId`),
  UNIQUE KEY `pathRev` (`sTaskPath`,`sRevision`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;CREATE TABLE IF NOT EXISTS `tm_tasks_strings` (
  `ID` bigint(20) NOT NULL,
  `idTask` bigint(20) NOT NULL,
  `sLanguage` varchar(5) NOT NULL,
  `sTitle` varchar(100) NOT NULL COMMENT 'title of the task',
  `sTranslator` varchar(100) NOT NULL,
  `sStatement` mediumtext NOT NULL,
  `sSolution` mediumtext NOT NULL,
  `iVersion` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY (`idTask`),
  KEY `idTasksLang` (`idTask`, `sLanguage`),
  KEY `iVersion` (`iVersion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `tm_tasks_subtasks` (
  `ID` bigint(20) NOT NULL,
  `idTask` bigint(20) NOT NULL,
  `iRank` tinyint(3) NOT NULL COMMENT 'position of the subtask in the task',
  `name` varchar(255) NOT NULL,
  `comments` text NOT NULL,
  `iPointsMax` tinyint(11) NOT NULL,
  `iVersion` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `synchro` (`iVersion`),
  KEY `idTask` (`idTask`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
CREATE TABLE `tm_tasks_tests` (
  `ID` bigint(20) NOT NULL,
  `idTask` bigint(20) NOT NULL,
  `idSubtask` bigint(20) DEFAULT NULL,
  `idSubmission` bigint(20) DEFAULT NULL,
  `sGroupType` enum('Example','User','Evaluation','Submission') NOT NULL DEFAULT 'User',
  `idUser` bigint(20) DEFAULT NULL,
  `idPlatform` bigint(20) DEFAULT NULL,
  `iRank` tinyint(3) NOT NULL DEFAULT '0',
  `bActive` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'current tab or not, relevant only with user tests',
  `sName` varchar(100) NOT NULL,
  `sInput` mediumtext DEFAULT NULL,
  `sOutput` mediumtext DEFAULT NULL,
  `iVersion` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `TaskGroupUserRank` (`idTask`,`sGroupType`,`idUser`,`iRank`,`idPlatform`),
  KEY `TestName` (`sName`),
  KEY `synchro` (`iVersion`),
  KEY `TaskGroup` (`idTask`,`sGroupType`),
  KEY `TaskGroupUser` (`idTask`,`sGroupType`,`idUser`,`idPlatform`),
  KEY `idUser` (`idUser`,`idPlatform`),
  KEY `idSubtask` (`idSubtask`),
  CONSTRAINT `tm_tasks_tests_subtask` FOREIGN KEY (`idSubtask`) REFERENCES `tm_tasks_subtasks` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tm_tasks_tests_task` FOREIGN KEY (`idTask`) REFERENCES `tm_tasks` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8
CREATE TABLE `tm_submissions_tests` (
  `ID` bigint(20) NOT NULL,
  `idSubmission` bigint(20) NOT NULL DEFAULT '0',
  `idTest` bigint(20) NOT NULL DEFAULT '0',
  `iScore` tinyint(3) NOT NULL DEFAULT '0',
  `iTimeMs` int(11) NOT NULL DEFAULT '0',
  `iMemoryKb` int(11) NOT NULL DEFAULT '0',
  `iErrorCode` int(11) NOT NULL DEFAULT '0',
  `sOutput` mediumtext DEFAULT NULL,
  `sErrorMsg` mediumtext DEFAULT NULL,
  `iVersion` int(11) NOT NULL,
  `idSubmissionSubtask` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `synchro` (`iVersion`),
  KEY `idSubmission` (`idSubmission`),
  UNIQUE KEY `idSubmissionTest` (`idSubmission`, `idTest`),
  KEY `idTest` (`idTest`),
  CONSTRAINT `tm_submissions_tests_ibfk_1` FOREIGN KEY (`idTest`) REFERENCES `tm_tasks_tests` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8
