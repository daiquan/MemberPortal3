Ext.define('PET.view.AddPetQuoteVW', {
	id:"AddPetQuoteVW",
    extend: 'Ext.Panel',
		alias: 'widget.AddPetQuoteVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Add Pet/Quote',
					docked:'top'
				
				}
			]		
   }
});