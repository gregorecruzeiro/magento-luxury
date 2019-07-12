<?php
class Cmsmart_ThemeSetting_Model_Source_Color
{
    public function toOptionArray()
    {
        return array(
			array('value' => 'default', 'label' => Mage::helper('themesetting')->__('Default')),
            array('value' => 'cyan', 'label' => Mage::helper('themesetting')->__('Cyan')),
			array('value' => 'dark-blue', 'label' => Mage::helper('themesetting')->__('Dark-blue')),
			array('value' => 'Orchid', 'label' => Mage::helper('themesetting')->__('Orchid')),
			array('value' => 'light_coral', 'label' => Mage::helper('themesetting')->__('LightCoral')),
			array('value' => 'DarkOliveGreen', 'label' => Mage::helper('themesetting')->__('DarkOliveGreen ')),
			array('value' => 'salmon', 'label' => Mage::helper('themesetting')->__('Salmon')),
            array('value' => 'Plum', 'label' => Mage::helper('themesetting')->__('Plum'))
	        );
    }
}