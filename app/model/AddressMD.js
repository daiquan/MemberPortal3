Ext.define('PET.model.AddressMD',{
	extend:'Ext.data.Model',
	config:{
		fields:[
		{name:'Line1',type:'string'},
		{name:'Line2',type:'string'},
		{name:'City',type:'string'},
		{name:'Region',type:'string'},
		{name:'PostalCode',type:'string'},
		{name:'EffectiveDate',type:'date'},
		{name:'AddressType',type:'string'}

		]
	}

});