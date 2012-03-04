Ext.define('PET.model.ClaimMD',{
	extend:'Ext.data.Model',
	config:{
		fields:[
		{name:'claimNumber',type:'string'},
		{name:'petName',type:'string'},
		{name:'received',type:'date'},
		{name:'claimAmount',type:'float'},
		{name:'paidAmount',type:'float'},
		{name:'status',type:'string'}

		]
	}

});