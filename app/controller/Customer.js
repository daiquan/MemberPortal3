Ext.define('PET.controller.Customer',{
    extend:'Ext.app.Controller',
		requires:['PET.model.ContactMD'],
  config: {
      profile: Ext.os.deviceType.toLowerCase()
  },
  mixins:{
		mixHome:'PET.controller.Home'
	},

 /*
    refs:[
         {
             selector:'#pageDataview',
             ref:'pageRef'
         },
         {
             selector:'main_menu',
             ref:'mainMenu'
         },
         
     ],*/
 


    init:function(){
        
        console.log('init customer controller.');

      	
        this.control({

            '#lstPrimaryContact':{
								'itemtap':function(item,i,target,record){
									try{
										 this.mixins.mixHome.changeView('EditPrimaryContactVW','left',record);
									}
									catch(e){
										alert(e);
									}
                
								 
            	}
						},
						'#lstSecondaryContact':{
								'itemtap':function(item,i,target,record){
                 this.mixins.mixHome.changeView('EditSecondaryContactVW','left',record);
								 
            	}
						},
						'#lstPetAddress':{
								'itemtap':function(item,i,target,record){
                 this.mixins.mixHome.changeView('EditPetAddressVW','left',record);
								 
            	}
						},
						'#lstMailingAddress':{
								'itemtap':function(item,i,target,record){
                 this.mixins.mixHome.changeView('EditMailingAddressVW','left',record);
								 
            	}
						},
						'#btnAddPrimaryContact':{
							'tap':function(){
								//Ext.getCmp('btnAddContact').actions.hide();
								Ext.Viewport.items.get('AddContactActionSheet').hide();

								this.mixins.mixHome.changeView('EditPrimaryContactVW');

							}
						},
						'#btnAddSecondaryContact':{
							'tap':function(){
								Ext.Viewport.items.get('AddContactActionSheet').hide();
								sContact=Ext.getCmp('EditSecondaryContactVW');
								sContact.setRecord(null);

								this.mixins.mixHome.changeView('EditSecondaryContactVW');

							}
						},

						'#EditPrimaryContactVW':{
  
							'activate':function(){
								var actionSheet = Ext.Viewport.items.get('AddContactActionSheet');
								if(actionSheet!=null)
								{
									actionSheet.hide();
								}
					
								
								this.activateContact('EditPrimaryContactVW');
								
							},  


         
							'deactivate':function()
							{
								var pContact = Ext.getCmp('EditPrimaryContactVW');
								pContact.setRecord(null);
							}
						},

						'#EditSecondaryContactVW':{
							'activate':function(){
								Ext.Viewport.items.get('AddContactActionSheet').hide();
									this.activateContact('EditSecondaryContactVW');
							},
							'deactivate':function()
							{
								var pcontact = Ext.getCmp('EditSecondaryContactVW');
								var store = Ext.getStore('')
								pcontact.reset();
							}
						},
						'#btnPCAction':{
							'tap':function(btn){
								if(btn.getText() == 'Create')
								{
									this.createContact('EditPrimaryContactVW');
								}
								if(btn.getText() == 'Update')
								{
									this.updateContact('EditPrimaryContactVW');
								}
								
							}
						},
						'#btnSCAction':{
							'tap':function(){
								this.createContact('EditSecondaryContactVW');
							}
						},
						'#btnPCDelete':{
							'tap':function(){
								this.removeContact('EditPrimaryContactVW');
							}
						},

						'#btnSCDelete':{
							'tap':function(){
								this.removeContact('EditSecondaryContactVW');
							}
						},
						'#tabCustomerInfo':{
							'select':function(){
								this.mixins.mixHome.changeView('CustInfoVW')
							}
						}

						
        }); //end control
    },
		removeContact:function(contactView){
			console.log('tap delete contact');
			var pcontact = Ext.getCmp(contactView);
			var record =pcontact.getRecord().data;
			var data = record.ContactId;
			this.mixins.mixHome.callAPIService('DELETE','MemberPortalService','DeleteContact',data,function(response,page){
				console.log(response);
				page.changeView('MainVW','right');
				page.loadCustomerInfo();
			});
		},
		createContact:function(contactView){
			console.log('tap btnPCAction');
			var pcontact = Ext.getCmp(contactView);
			var data = pcontact.getValues();
			//validation todo
/*
			var newContact = Ext.create('PET.model.ContactMD', data);
			var errors = newContact.validate();
			if(!errors.isValid())
			{
				this.showErrors('pContactFieldSet',errors)
				return;
			}*/


			
			this.mixins.mixHome.callAPIService('POST','MemberPortalService','AddContact',data,function(response,page){
				console.log(response);
				reLoadPage=true;
				page.changeView('MainVW','right');
				page.loadCustomerInfo();
			});

			
		},
		updateContact:function(contactView){
			console.log('tap btnPCAction');
			var pcontact = Ext.getCmp(contactView);
			var values = pcontact.getValues();
			var data = pcontact.getRecord().data;
			data.ContactValue = values.ContactValue;
			data.ContactType=values.ContactType;
			this.mixins.mixHome.callAPIService('PUT','MemberPortalService','UpdateContact',data,function(response,page){
				console.log(response);
				page.changeView('MainVW','right');
				page.loadCustomerInfo();
			});

			
		},
		activateContact:function(contactView){
			
			var btnId=contactView=='EditPrimaryContactVW'?'btnPCAction':'btnSCAction';
			var titleBarId = contactView=='EditPrimaryContactVW'?'pcTitle':'scTitle';
			var titleText = contactView=='EditPrimaryContactVW'?'Primary':'Secondary';
			var pcontact = Ext.getCmp(contactView);
			var isNew=false;
			var contactRecord=pcontact.getRecord();
			
			
			
			if(contactRecord==null)
			{
				var newModel = Ext.create('PET.model.ContactMD');
				pcontact.load(newModel);
				contactRecord=pcontact.getRecord();
				isNew=true;
			}
			else
			{
				var newModel = Ext.create('PET.model.ContactMD',contactRecord.data);
				pcontact.load(newModel);
				isNew=false;
			}

			if (isNew) {
          Ext.getCmp(titleBarId).setTitle('Create '+titleText+' Contact');
          Ext.getCmp(btnId).setText('Create');
          //deleteButton.hide();
      } else {
        Ext.getCmp(titleBarId).setTitle('Update '+titleText+' Contact');
        Ext.getCmp(btnId).setText('Update');
          //deleteButton.show();
      }
		},
		showErrors: function(fieldSetId,errors) {
        var fieldset = Ext.getCmp(fieldSetId);
				var errorMessage='';
        fieldset.items.each(function(field) {
            var fieldErrors = errors.getByField(field.getName());

            if (fieldErrors.length > 0) {
                var errorField = Ext.getCmp(field.getName()+'ErrorField');
                field.addCls('invalid-field');
								for(i=0;i<fieldErrors.length;i++)
								{
									errorMessage+=fieldErrors[i]._field+' '+fieldErrors[i]._message+'; ';
									
								}
								errorField.setHtml(errorMessage);
            
                errorField.show();
            } else {
               //errorField.hide();
            }
        }, this);
        fieldset.setInstructions("Please amend the flagged fields");
    }

});

