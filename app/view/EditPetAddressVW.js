var petAddressForm={
	xtype:'fieldset',
	defaults:{
		xtype:'textfield',
		labelWidth:'40%'
	},
	items:[
	{
		label:'Address 1',
		name:'Line1'
	},
	{
		label:'Address 2',
		name:'Line2'
	},
	{
		label:'City',
		name:'City'
	},
	{
		xtype:'selectfield',
		label:'Province',
		name:'Region',
		options:[
		{
			text:'AB',value:'AB'
		},
		{
			text:'BC',value:'BC'
		},
		{
			text:'NB',value:'NB'
		},
		{
			text:'NL',value:'NL'
		},
		{
			text:'NT',value:'NT'
		},
		{
			text:'NS',value:'NS'
		},
		{
			text:'NU',value:'NU'
		},
		{
			text:'ON',value:'ON'
		},
		{
			text:'PE',value:'PE'
		},
		{
			text:'MB',value:'MB'
		},
		{
			text:'ON',value:'ON'
		},
		{
			text:'QC',value:'QC'
		},
		{
			text:'SK',value:'SK'
		},
		{
			text:'YT',value:'YT'
		}
		
		]
	},
	{
		label:'Postal Code',
		name:'PostalCode'
	},
	{
		xtype:'datepickerfield',
		label:'Effective on',
		name:'EffectiveDate',
		value:new Date()
	}
	]
};
Ext.define('PET.view.EditPetAddressVW', {
	id:"EditPetAddressVW",
    extend: 'Ext.form.Panel',
		alias: 'widget.EditPetAddressVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Pet Address',
					docked:'top',
					items:[{
						ui:'plain',
						iconMask:true,
						xtype:'button',
						iconCls:'reply',
						go:'right_MainVW'
					}]
				
				},
				{
					xtype:'toolbar',
					docked:'bottom',
					items:[
					{
						xtype:'button',
						text:'Check Premium',
						docked:'right'
						
					}
					]
				},
				petAddressForm
			]		
   }
});