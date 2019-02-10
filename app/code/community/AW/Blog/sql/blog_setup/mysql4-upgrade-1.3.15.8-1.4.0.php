<?php

$installer = $this;
$installer->startSetup();
$installer->getConnection()
    ->addColumn($installer->getTable('blog/blog'),'typepost', array(
        'type'      => Varien_Db_Ddl_Table::TYPE_SMALLINT,
        'nullable'  => true,
        'comment'   => 'TypePost'
        ));   
$installer->endSetup();