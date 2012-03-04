Ext.define('PET.view.MainVW', {
    extend: 'Ext.tab.Panel',
		xtype:'MainVW',
		id:'MainVW',
    config: {
				
        fullscreen: true,
        tabBarPosition: 'bottom',
        items: [
						{ xclass: 'PET.view.HomeVW' },
            { xclass: 'PET.view.CustInfoVW' }
						//{ xclass: 'PET.view.PaymentInfoVW' },
            //{ xclass: 'PET.view.PetInfoVW' }
            

        ]
    }
});