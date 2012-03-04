Ext.define('PET.model.ContactMD',{
	extend:'Ext.data.Model',
	config:{
		fields:[
		{name:'ContactId',type:'string'},
		{name:'ContactType',type:'string'},
		{name:'ContactValue',type:'string'},
		{name:'IsSecondary',type:'bool'}

		],
		proxy: {
	     type: 'localstorage',
			 id:'primaryContactData'
	     //url : 'app/data/CustomerPrimaryContacts.json'
	  }
	}

});