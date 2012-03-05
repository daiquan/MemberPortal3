Ext.define('PET.view.DocumentVW', {
	id:"DocumentVW",
    extend: 'Ext.Panel',
		alias: 'widget.DocumentVW',
    config: {
      fullscreen: true,
			layout:'fit',
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Document',
					docked:'top',
					items:[
					{
						ui:'plain',
						iconMask:true,
						xtype:'button',
						iconCls:'reply',
						go:'right_HomeVW'
					}
					]
				
				},
				{
					xtype:'list',
					id:'lstDocument',
					//plugins: [new Ext.plugin.PullRefresh()],
					store:'DocumentST',
					itemTpl:'{publishDate} - {documentTitle} - <a href="#">download</a> - <tpl if=isNew>New</tpl>'
					
				}
			]		
   }
});