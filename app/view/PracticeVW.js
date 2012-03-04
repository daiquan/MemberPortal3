Ext.define('PET.view.PracticeVW', {
	id:"PracticeVW",
    extend: 'Ext.Panel',
		alias: 'widget.PracticeVW',
    config: {
      fullscreen: true,
			layout:'fit',
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Practice',
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
						id:'btnAddPractice',
						iconCls: 'add',
		        iconMask: true,
		        ui: 'plain',
						docked:'right'
					}
					]
				
				},
				{
					xtype:'list',
					id:'lstPractice',
					store:'PracticeST',
					itemTpl:'<tpl if="isPrimary">Primary</tpl><tpl if="!isPrimary">Secondary</tpl> - {practice} - {address}'
				}
			]		
   }
});