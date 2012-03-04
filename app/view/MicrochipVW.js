
Ext.define('PET.view.MicrochipVW', {
	id:"MicrochipVW",
    extend: 'Ext.Panel',
		alias: 'widget.MicrochipVW',
		
    config: {
      fullscreen: true,
			layout:'fit',
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Microchip',
					docked:'top',
					items:[
					{
						ui:'plain',
						iconMask:true,
						xtype:'button',
						iconCls:'reply',
						go:'right_PetInfoVW'
					},
					{
						xtype:'button',
						id:'btnAddMicrochip',
						iconCls: 'add',
		        iconMask: true,
		        ui: 'plain',
						docked:'right'
					}
					]
				
				},
				{
					xtype:'list',
					id:'lstMicrochip',
					store:'MicrochipST',
					itemTpl:'{type} - {identifier}'
					
				}
			]		
   }
});