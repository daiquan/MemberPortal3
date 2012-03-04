var paymentMethodButtons={
	xtype:'segmentedbutton',
	docked:'top',
	id:'sbtnPaymentInfo',
	defaults:{
		flex:1
	},
	items:[
	{
		text:'New'
	},
	{
		text:'Current',
		pressed:true
	},
	{
		text:'Other'
	}
	]
};

var newPaymentMethodForm={
	xtype:'formpanel',
	items:[
	{
		xtype:'fieldset',
		defaults:{
			xtype:'textfield',
			labelWidth:'40%'
		},
		title:'New Payment Method',
		items:[
		{
			label:'Type',
			name:'type'
		},
		{
			label:'Name On Card',
			name:'nameOnAccount'
		},
		{
			label:'Account Number',
			name:'accountNumber'
		},
		{
			label:'Transit #',
			name:'transitNumber'
		},
		{
			label:'Bank #',
			name:'bankNumber'
		},
		{
			xtype:'datepickerfield',
			label:'Expiry Date',
			name:'expiryDate'
		},
		{
			label:'Billing Address',
			name:'billingAddress'
		},
		]
	}
	]

};
var paymentMethodForm={
	xtype:'formpanel',
	id:'fpCurrPaymentMethod',
	items:[
	{
		xtype:'fieldset',
		defaults:{
			xtype:'textfield',
			labelWidth:'40%'
		},
		title:'Current Payment Method',
		items:[
		{
			label:'Type',
			name:'type'
		},
		{
			label:'Name On Card',
			name:'nameOnAccount'
		},
		{
			label:'Account Number',
			name:'accountNumber'
		},
		{
			label:'Transit #',
			name:'transitNumber',
			id:'txtTransitNumber'
		},
		{
			label:'Bank #',
			name:'bankNumber',
			id:'txtBankNumber'
		},
		{
			xtype:'datepickerfield',
			label:'Expiry Date',
			name:'expiryDate'
		},
		{
			label:'Billing Address',
			name:'billingAddress'
		},
		]
	}
	]

};
var otherPaymentMethod={
	xtype:'formpanel',
	items:[
	{
		xtype:'fieldset',
		title:'Other Payment Method',
		items:[
		{
			xtype:'selectfield',
			options:[
			{
				text:'bank card -1234',
				value:'bankcard'
			}
			]
		}
		]
	}
	]
	

};
var paymentMethodCards={
	xtype:'panel',
	id:'paymentMethodCards',
	layout:'card',
	activeItem:1,
	items:[
	newPaymentMethodForm,
	paymentMethodForm,
	otherPaymentMethod
	]
};
Ext.define('PET.view.PaymentMethodVW', {
	id:"PaymentMethodVW",
    extend: 'Ext.Panel',
		alias: 'widget.PaymentMethodVW',
    config: {
      fullscreen: true,

			layout:{
				type:'fit'
			},

 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Payment Method',
					docked:'top',
					items:[
					{
						ui:'plain',
						iconMask:true,
						xtype:'button',
						iconCls:'reply',
						go:'right_PaymentInfoVW'
					
					}
					]
				
				},
				paymentMethodButtons,
				paymentMethodCards,
				{
					xtype:'toolbar',
					docked:'bottom',
					items:[
					{
						xtype:'button',
						docked:'right',
						text:'Save',
						ui:'action',
						id:'btnPaymentMethodSave'
					}
					
					]
				}


			]		
   }
});