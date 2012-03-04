Ext.define('PET.model.PaymentHistoryMD',{
	extend:'Ext.data.Model',
	config:{
		fields:[
		{name:'date',type:'date'},
		{name:'policy',type:'string'},
		{name:'paymentMethod',type:'string'},
		{name:'amount',type:'float'},
		{name:'status',type:'string'}
		]
	}

});