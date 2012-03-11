Ext.define('PET.view.tablet.MainVW', {
    extend: 'Ext.tab.Panel',
    config: {
				name:'mainView',
				id:'tablet_MainVW',
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