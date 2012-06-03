Ext.define('PET.model.ContactMD',{
	extend:'Ext.data.Model',
	config:{
		fields:[
		{name:'ContactId',type:'string'},
		{name:'ContactType',type:'string'},
		{name:'ContactValue',type:'string'},
		{name:'IsSecondary',type:'bool'}

		],
		validations:[
			{type:'presence',name:'ContactValue'},
			{type:'length',name:'ContactValue',min:10,max:10},
			{type:'format',name:'ContactValue',message:'invalid email address',matcher:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/}
		]
	},
	validate:function(){
        var errors      = Ext.create('Ext.data.Errors'),
            validations = this.getValidations().items,
            validators  = Ext.data.Validations,
            length, validation, field, valid, type, i,fieldValue;

        if (validations) {
            length = validations.length;

            for (i = 0; i < length; i++) {
                validation = validations[i];
                field = validation.field || validation.name;
                type  = validation.type;
								fieldValue = this.get(field);
								if(this.get('ContactType') == 'Email' && type == 'length' && field=='ContactValue')
								{
									continue;
								}
								if(this.get('ContactType') != 'Email' && type == 'format' && field=='ContactValue')
								{
									continue;
								}
                valid = validators[type](validation, fieldValue);
								
                if (!valid) {
                    errors.add(Ext.create('Ext.data.Error', {
                        field  : field,
                        message: validation.message || validators.getMessage(type)
                    }));
                }
            }
        }

        return errors;
    
	}

});