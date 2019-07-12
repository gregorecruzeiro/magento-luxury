<?php
class Cmsmart_ThemeSetting_Model_Source_Fontsize
{
    public function toOptionArray()
    {
        return array(
			array('value' => 'default', 'label' => Mage::helper('themesetting')->__('default')),
			array('value' => '12px', 'label' => Mage::helper('themesetting')->__('12px')),
            array('value' => '13px', 'label' => Mage::helper('themesetting')->__('13px')),
            array('value' => '14px', 'label' => Mage::helper('themesetting')->__('14px')),
            array('value' => '15px', 'label' => Mage::helper('themesetting')->__('15px')),
            array('value' => '16px', 'label' => Mage::helper('themesetting')->__('16px'))
	        );
    }
}