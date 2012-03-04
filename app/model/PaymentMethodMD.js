Ext.define('PET.model.PaymentMethodMD',{
	extend:'Ext.data.Model',
	config:{
		fields:[
		{name:'id',type:'string'},
		{name:'type',type:'string'},
		{name:'nameOnAccount',type:'string'},
		{name:'accountNumber',type:'string'},
		{name:'transitNumber',type:'string'},
		{name:'bankNumber',type:'string'},
		{name:'billingAddress',type:'string'}
		]
	}

});