Ext.define('PET.model.PracticeMD',{
	extend:'Ext.data.Model',
	config:{
		fields:[
		{name:'province',type:'string'},
		{name:'practice',type:'string'},
		{name:'address',type:'string'},
		{name:'isPrimary',type:'bool'}

		]
	}

});