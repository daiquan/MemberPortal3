
var microchipForm = {

		xtype:'fieldset',
		defaults:{
			labelWidth:'40%'
		},
		items:[
		{
			xtype:'selectfield',
			label:'Type',
			name:'type',
			options:[
			{
				text:'Microchip',
				value:'microchip'
			},
			{
				text:'Tattoo',
				value:'tattoo'
			},
			{
				text:'Petlynx',
				value:'petlynx'
			}
			]
		},
		{
			xtype:'textfield',
			label:'Identifier',
			name:'identifier'
		}
		]
		
		
};
Ext.define('PET.view.EditMicrochipVW', {
	id:"EditMicrochipVW",
    extend: 'Ext.form.Panel',
		alias: 'widget.EditMicrochipVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					id:'mcTitle',
					title:'Modify Microchip',
					docked:'top',
					items:[
					{
						ui:'plain',
						iconMask:true,
						xtype:'button',
						iconCls:'reply',
						go:'right_MicrochipVW'
					}
					
					]
				
				},
				{
					xtype:'toolbar',
					docked:'bottom',
					items:[
					{
						xtype:'button',
						id:'btnMCDelete',
						ui:'action',
						docked:'left',
						text:'Delete'
					},
					{
						xtype:'button',
						id:'btnMCAction',
						ui:'action',
						docked:'right',
						text:'Save'
						
					}
					]
				},
				microchipForm
			]		
   }
});