Ext.define('PET.model.CoverageMD',{
	extend:'Ext.data.Model',
	config:{
		fields:[
		{name:'coverage',type:'string'},
		{name:'percent',type:'string'},
		{name:'waitingPeriodEndDate',type:'string'}

		]
	}

});