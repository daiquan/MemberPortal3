Ext.require(['PET.model.ContactMD','PET.model.AddressMD']);
Ext.define('PET.model.CustInfoMD',{
		extend:'Ext.data.Model',

		//hasMany:[{model:'PET.model.ContactMD',name:'primaryContacts'},
		//{model:'PET.model.AddressMD',name:'ratingAddress'}]

		//hasMany:{model:'PET.model.ContactMD',name:'secondaryContacts'}

		//hasOne:{model:'PET.model.AddressMD',name:'ratingAddress'},
		//hasOne:{model:'PET.model.AddressMD',name:'mailingAddress'}

		config:{
			fields:[
			{name:'claimPaymentMethod',type:'string'},
			{name:'firstName',type:'string'},
			{name:'lastName',type:'string'}
			],
			associations: [
	        {type: 'hasMany', model: 'PET.model.ContactMD',    name: 'primaryContacts'},
					{type: 'hasMany', model: 'PET.model.ContactMD',    name: 'secondaryContacts'},
					{type: 'hasOne', model:'PET.model.AddressMD', name:'ratingAddress'},
					{type: 'hasOne', model:'PET.model.AddressMD', name:'mailingAddress'}
	    ]
		}

});


