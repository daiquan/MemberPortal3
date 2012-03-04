
Ext.define('PET.view.HomeVW', {
    extend: 'Ext.Panel',
		xtype:'HomeVW',
    config: {
	
      iconCls: 'home',
      fullscreen: true,
			title:'Home',
      items: 
			[
				{
					xtype:'toolbar',
					title:'Home',
					docked:'top'
				}
			],
     html:'Welcome to Petsecure mobile Member Portal!!'
    }
});


/*
Ext.define('PET.view.HomeVW', {
	id:"HomeVW",
    extend: 'Ext.Panel',
		alias: 'widget.HomeVW',
		xtype:'HomeVW',
    config: {
      fullscreen: true,
 	   items: 
			[
		
				{
					xtype:'toolbar',
					title:'Home',
					docked:'top'
				
				},
				toolbarMenu
				
			]		
   }
});
*/

