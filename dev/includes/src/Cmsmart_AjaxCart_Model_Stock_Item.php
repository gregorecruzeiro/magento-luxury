<?php

class Cmsmart_AjaxCart_Model_Stock_Item extends Mage_CatalogInventory_Model_Stock_Item
{
    public function checkQuoteItemQty($qty, $summaryQty, $origQty = 0)
    {
        $helper = Mage::helper('cataloginventory');
        $result = parent::checkQuoteItemQty($qty, $summaryQty, $origQty);

        //check for error and specifically for the flag that the item went out of stock
        if($result->getHasError() && $result->getItemUseOldQty()){
            //remove the item from cart
            $this->subtractQty($qty);

            //set notification for the user
            Mage::getSingleton('checkout/session')->addError($helper->__('Some items have been removed from your cart as they were not available in the qty requested.'));
        }
    }

}