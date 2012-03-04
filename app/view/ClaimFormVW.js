Ext.define('PET.view.ClaimFormVW', {
	id:"ClaimFormVW",
    extend: 'Ext.Panel',
		alias: 'widget.ClaimFormVW',
    config: {
      fullscreen: true,
			layout:'fit',
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Claim Form',
					docked:'top',
					items:[
					{
						ui:'plain',
						iconMask:true,
						xtype:'button',
						iconCls:'reply',
						go:'right_ClaimVW'
					}
					]
				
				},
				{
					xtype:'list',
					store:'ClaimFormST',
					itemTpl:'{claimForm} - <a href="#">download</a>'
				}
			]		
   }
});