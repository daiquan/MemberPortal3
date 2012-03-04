Ext.define('PET.view.ClaimPaymentMethodVW', {
	id:"ClaimPaymentMethodVW",
    extend: 'Ext.Panel',
		alias: 'widget.ClaimPaymentMethodVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Claim Payment Method',
					docked:'top'
				
				}
			]		
   }
});