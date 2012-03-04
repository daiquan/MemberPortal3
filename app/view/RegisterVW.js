Ext.define('PET.view.RegisterVW', {
	id:"RegisterVW",
    extend: 'Ext.Panel',
		alias: 'widget.RegisterVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Register',
					docked:'top',
					items:[
					{
						ui:'plain',
						iconMask:true,
						xtype:'button',
						iconCls:'reply',
						go:'right_LoginVW'
					}
					]
				
				},
				{
					xtype:'fieldset',
					title:'Please register with your customer number and email on file.',
					style:'margin:10px;',
					items:[
					{
						xtype:'textfield',
						label:'Customer #'
					},
					{
						xtype:'textfield',
						label:'Email'
					}

					
					]
				},
				{
					xtype:'button',
					text:'Register',
					id:'btnRegister',
					//width:100,
					
					style:'width:200px;margin-right:10px;float:right;'
				}
			]		
   }
});