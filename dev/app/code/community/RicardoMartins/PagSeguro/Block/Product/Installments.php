<?php

class RicardoMartins_PagSeguro_Block_Product_Installments extends Mage_Core_Block_Template
{
    public function _toHtml()
    {
        if (!$this->isEnabled()) {
            return '';
        }
        return parent::_toHtml(); // TODO: Change the autogenerated stub
    }

    public function getPrice()
    {
        $product = $this->getProduct();
        if (!$product) {
            $product = Mage::registry('current_product');
        }
        return $product->getFinalPrice();
    }

    protected function _construct()
    {
        parent::_construct();
        $this->setTemplate('ricardomartins_pagseguro/product/installments.phtml');
    }

    public function isEnabled()
    {
        if ($this->getNameInLayout() != 'ricardomartins.pagseguro.parcelas') {
            return true;
        }
        return Mage::getStoreConfigFlag('payment/rm_pagseguro_cc/installments_product');
    }

    protected function _prepareLayout()
    {
        if (!$this->isEnabled()) {
            return parent::_prepareLayout();
        }

        //adicionaremos o JS do pagseguro na tela que usará o bloco de installments logo após o <body>
        $head = Mage::app()->getLayout()->getBlock('after_body_start');

        if ($head && false == $head->getChild('pagseguro_direct')) {
            $scriptBlock = Mage::helper('ricardomartins_pagseguro')->getExternalPagSeguroScriptBlock();
            $head->append($scriptBlock);
        }

        return parent::_prepareLayout();
    }
}