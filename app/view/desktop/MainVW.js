Ext.define('PET.view.desktop.MainVW', {
    extend: 'Ext.tab.Panel',
		
    config: {
				name:'mainView',
				id:'desktop_MainVW',
        fullscreen: true,
        tabBarPosition: 'bottom',
        items: [
						{ xclass: 'PET.view.HomeVW' },
            { xclass: 'PET.view.CustInfoVW' },
						{ xclass: 'PET.view.PaymentInfoVW' },
            { xclass: 'PET.view.PetInfoVW' }
            

        ]
    }
});