Ext.define('PET.model.PolicyDetailMD',{
	extend:'Ext.data.Model',
	config:{
		fields:[
		{name:'petName',type:'string'},
		{name:'policyNumber',type:'string'},
		{name:'period',type:'string'},
		{name:'product',type:'string'},
		{name:'effDate',type:'date'},
		{name:'status',type:'string'},
		{name:'renewalDate',type:'string'},
		{name:'withdrawalDay',type:'int'},
		{name:'premium',type:'float'},
		{name:'deductible',type:'float'},
		{name:'dedRemaining',type:'float'}

		]
		//hasMany:{type:'PET.model.CoverageMD', name:'coverages'}
	}

});