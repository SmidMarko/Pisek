ALTER TABLE `tm_tasks` ADD `sDefaultEditorMode` ENUM('simple','normal','expert','') NOT NULL DEFAULT 'normal' AFTER `sScriptAnimation`;
ALTER TABLE `history_tm_tasks` ADD `sDefaultEditorMode` ENUM('simple','normal','expert','') NOT NULL DEFAULT 'normal' AFTER `sScriptAnimation`;