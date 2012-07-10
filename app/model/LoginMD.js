Ext.define('PET.model.LoginMD',{
	extend:'Ext.data.Model',
	config:{
		fields:[
		{name:'email',type:'string'},
		{name:'password',type:'string'}
		],
        validations: [
            {type: 'email', field: 'email'},
            {type: 'length', field: 'password',min:6}
        ]
	}

});