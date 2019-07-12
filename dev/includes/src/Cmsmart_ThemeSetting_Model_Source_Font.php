<?php
class Cmsmart_ThemeSetting_Model_Source_Font
{
    public function toOptionArray()
    {
        return array(
			array('value' => 'default', 'label' => Mage::helper('themesetting')->__('Default')),
			array('value' => 'google_font1', 'label' => Mage::helper('themesetting')->__('Roboto, sans-serif')),
			array('value' => 'google_font2', 'label' => Mage::helper('themesetting')->__('"Playfair Display", serif')),
			array('value' => 'serif', 'label' => Mage::helper('themesetting')->__('Georgia, Times New Roman, Times, serif')),
            array('value' => 'sansserif', 'label' => Mage::helper('themesetting')->__('Arial, Helvetica, sans-serif')),			
            array('value' => 'monospace', 'label' => Mage::helper('themesetting')->__('"Courier New", Courier, monospace'))
	        );
    }
}