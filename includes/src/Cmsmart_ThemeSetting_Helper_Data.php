<?php
/**
 * BookStore Theme Options
 */
class Cmsmart_ThemeSetting_Helper_Data extends Mage_Core_Helper_Abstract
{
	public function getCfgGroup($group, $storeId = NULL)
    {
        if ($storeId)
            return Mage::getStoreConfig('themesetting/' . $group, $storeId);
        else
            return Mage::getStoreConfig('themesetting/' . $group);
    }
	public function getCfgSectionDesign($storeId = NULL)
    {
        if ($storeId)
            return Mage::getStoreConfig('themesetting', $storeId);
        else
            return Mage::getStoreConfig('themesetting');
    }
    public function getCfg($optionString)
    {
        return Mage::getStoreConfig('themesetting/' . $optionString);
    }
    public function getCfgSectionSettings($storeId = NULL)
    {
        if ($storeId)
            return Mage::getStoreConfig('themesetting', $storeId);
        else
            return Mage::getStoreConfig('themesetting');
    }	
}
