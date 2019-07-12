<?php class Cmsmart_ThemeSetting_Adminhtml_ImportController extends Mage_Adminhtml_Controller_Action{         

		public function indexAction() {
            $this->getResponse()->setRedirect($this->getUrl("adminhtml/system_config/edit/section/themesetting/"));
        }
        public function blocksAction() {
            $isoverwrite = Mage::helper('themesetting')->getCfg('install/overwrite_blocks');
            Mage::getSingleton('themesetting/import_cms')->importCmsItems('cms/block', 'blocks', $isoverwrite);
            $this->getResponse()->setRedirect($this->getUrl("adminhtml/system_config/edit/section/themesetting/"));
        }
        public function pagesAction() {
            $isoverwrite = Mage::helper('themesetting')->getCfg('install/overwrite_pages');
            Mage::getSingleton('themesetting/import_cms')->importCmsItems('cms/page', 'pages', $isoverwrite);
            $this->getResponse()->setRedirect($this->getUrl("adminhtml/system_config/edit/section/themesetting/")); 
        }
}