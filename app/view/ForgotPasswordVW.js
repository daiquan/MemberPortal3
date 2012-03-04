Ext.define('PET.view.ForgotPasswordVW', {
	id:"ForgotPasswordVW",
    extend: 'Ext.Panel',
		alias: 'widget.ForgotPasswordVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Forgot Password',
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
					title:'Please enter your email address on file.',
					style:'margin:10px;',
					items:[
					{
						xtype:'textfield',
						label:'Email'
					}

					
					]
				},
				{
					xtype:'button',
					text:'Submit',
					id:'btnForgotPassword',
					//width:100,
					
					style:'width:200px;margin-right:10px;float:right;'
				}
			]		
   }
});