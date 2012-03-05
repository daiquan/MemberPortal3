
var primaryContactForm = {

		xtype:'fieldset',
		defaults:{
			labelWidth:'40%'
		},
		items:[
		{
			xtype:'selectfield',
			label:'Type',
			name:'ContactType',
			options:[
			{
				text:'Home Phone',
				value:'Home Phone'
			},
			{
				text:'Cell Phone',
				value:'Cell Phone'
			},
			{
				text:'Work Phone',
				value:'Work Phone'
			},
			{
				text:'Pager',
				value:'Pager Phone'
			},
			{
				text:'Fax',
				value:'Fax'
			},
			{
				text:'Email',
				value:'Email'
			}
			]
		},
		{
			xtype:'textfield',
			label:'Contact',
			name:'ContactValue'
		}
		
		]
};
Ext.define('PET.view.EditPrimaryContactVW', {
	id:"EditPrimaryContactVW",
    extend: 'Ext.form.Panel',
		xtype: 'EditPrimaryContactVW',
		requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Select'
		],
    
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					id:'pcTitle',
					title:'Primary Contact',
					docked:'top',
					items:[
					{
						ui:'plain',
						iconMask:true,
						xtype:'button',
						iconCls:'reply',
						go:'right_MainVW'
					}
					
					]
				
				},
				{
					xtype:'toolbar',
					docked:'bottom',
					items:[
					{
						xtype:'button',
						id:'btnPCDelete',
						ui:'action',
						docked:'left',
						text:'Delete'
					},
					{
						xtype:'button',
						id:'btnPCAction',
						ui:'action',
						docked:'right'
						
					}
					]
				},
				primaryContactForm
			]		
   }
});