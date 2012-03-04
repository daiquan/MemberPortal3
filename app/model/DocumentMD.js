Ext.define('PET.model.DocumentMD',{
	extend:'Ext.data.Model',
	config:{
		fields:[
		{name:'publishDate',type:'date'},
		{name:'documentTitle',type:'string'},
		{name:'isNew',type:'bool'}

		]
	}

});