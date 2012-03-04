Ext.define('PET.controller.Home',{
    extend:'Ext.app.Controller',
  config: {
      profile: Ext.os.deviceType.toLowerCase()
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
        
        console.log('init home controller.');

      
        this.control({

            '#lstPrimaryContact':{
								'itemtap':function(item,i,target,record){
									
                 this.changeView('EditPrimaryContactVW','left',record);
								 
            	}
						},
						'#lstSecondaryContact':{
								'itemtap':function(item,i,target,record){
                 this.changeView('EditSecondaryContactVW','left',record);
								 
            	}
						},
						'#lstPetAddress':{
								'itemtap':function(item,i,target,record){
                 this.changeView('EditPetAddressVW','left',record);
								 
            	}
						},
						'#lstMailingAddress':{
								'itemtap':function(item,i,target,record){
                 this.changeView('EditMailingAddressVW','left',record);
								 
            	}
						},
						'#MainVW':{
							'activeitemchange':function(i,v,ov){
								if(v.getItemId() == 'CustInfoVW')
								{
									//alert(v.getItemId());
									this.loadCustomerInfo();
								}
								
							}
						},
            'button[go]':{'tap':function(btn){
                var direction = btn.go.split('_')[0];
                var viewName = btn.go.split('_')[1];
								
                this.changeView(viewName,direction)

                }
            },
            'tab[go]':{'select':function(btn){
                var direction = btn.go.split('_')[0];
                var viewName = btn.go.split('_')[1];

                this.changeView(viewName,direction)

                }
            },
						'#btnAddPrimaryContact':{
							'tap':function(){
								//Ext.getCmp('btnAddContact').actions.hide();
								Ext.Viewport.items.get('AddContactActionSheet').hide();

								this.changeView('EditPrimaryContactVW');

							}
						},
						'#btnAddSecondaryContact':{
							'tap':function(){
								Ext.Viewport.items.get('AddContactActionSheet').hide();
								sContact=Ext.getCmp('EditSecondaryContactVW');
								sContact.setRecord(null);

								this.changeView('EditSecondaryContactVW');

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
								this.changeView('CustInfoVW')
							}
						}

						
        }); //end control
    },
		loadCustomerInfo:function(page){
				this.callAPIService('GET','MemberPortalService','GetCustomerInfo',{htoken:mpToken,returnType:'json'},function(response){
					console.log('get customer info result:')
					console.log(response);
					if(response.GetCustomerInfoResult.ResponseMessageHeader.IsSuccess)
					{

						var customerInfoData = response.GetCustomerInfoResult.ResponseMessageBody.MessageBody[0];
						var pstore =Ext.getStore('CustPrimaryContactST'); 
						var sstore = Ext.getStore('CustSecondaryContactST');
						var pastore =Ext.getStore('CustPetAddressST'); 
						var mastore = Ext.getStore('CustMailingAddressST'); 
						var lstP = Ext.getCmp('lstPrimaryContact');
						var lstS = Ext.getCmp('lstSecondaryContact');
						var lstPA = Ext.getCmp('lstPetAddress');
						var lstMA = Ext.getCmp('lstMailingAddress');
						pstore.setData(customerInfoData.PrimaryContacts);
						sstore.setData(customerInfoData.SecondaryContacts);
						pastore.setData(customerInfoData.RatingAddress);
						mastore.setData(customerInfoData.MailingAddress);

		
						lstP.setHeight(pstore.data.length*46);
						lstS.setHeight(sstore.data.length*46);
						lstP.refresh();
						lstS.refresh();
						lstPA.refresh();
						lstMA.refresh();

						
					}
					else{
						alert('Error: can not load customer info.');
					}
				});
		},
		removeContact:function(contactView){
			console.log('tap delete contact');
			var pcontact = Ext.getCmp(contactView);
			var record =pcontact.getRecord().data;
			var data = record.ContactId;
			this.callAPIService('DELETE','MemberPortalService','DeleteContact',data,function(response,page){
				console.log(response);
				page.changeView('CustInfoVW','right');
				page.loadCustomerInfo();
			});
		},
		createContact:function(contactView){
			console.log('tap btnPCAction');
			var pcontact = Ext.getCmp(contactView);
			var data = pcontact.getValues();
			
			this.callAPIService('POST','MemberPortalService','AddContact',data,function(response,page){
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
			this.callAPIService('PUT','MemberPortalService','UpdateContact',data,function(response,page){
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
    changeView: function(viewName,direction,data) {  
	     	var activeItem = Ext.Viewport.getActiveItem();
        var card;

					if(direction==null)
						direction='left';

	       Ext.Viewport.getLayout().getAnimation().getOutAnimation().setDirection(direction);
				Ext.Viewport.getLayout().getAnimation().getInAnimation().setDirection(direction);
				//if(this.)


				historyItem=Ext.Viewport.items.get(viewName);
				if(historyItem!=null)
				{
					
					card=historyItem;
				}
				else{
					this.getEventDispatcher().addListener('element', '#'+viewName, 'swipe', this.onTouchPadEvent, this);
					card = Ext.create('PET.view.'+viewName);
					Ext.Viewport.add(card);
				}
				if(data!=null){
					
					card.setRecord(data);
					
				}
				Ext.Viewport.setActiveItem(card);
			

				//set default card switch direction to -> left

        //Ext.Viewport.getLayout().getAnimation().getOutAnimation()._direction=direction;
               //Ext.Viewport.getLayout().getAnimation().getInAnimation()._direction=direction;
       

				if(direction == 'left'){
						previewsView.push(activeItem.getItemId());
				}
		
    },
    onTouchPadEvent: function(e, target, options, eventController) {
        var eventName = eventController.info.eventName;
 				if(e.direction == 'right'){
					this.changeView(previewsView.pop(),'right');
				}
				
    },
		callAPIService:function(httpMethod,serviceName,methodName,params,successFnc){

			Ext.Viewport.setMasked({
				xtype:'loadmask',
				message:'please wait...'
			});
			if(httpMethod == 'GET')
			{
				Ext.Ajax.request({
					url:'http://staging.wfic.ca/api/'+serviceName+'/'+methodName,
					params:params,
					headers:{
						'Content-Type':'application/json'
					},
					method:'GET',
					scope:this,
					success:function(response){
						Ext.Viewport.setMasked(false);
						var resultObj = eval("("+response.responseText+")");
						successFnc(resultObj,this);
					}
					});
			}
			else
			{
				Ext.Ajax.request({
					url:'http://staging.wfic.ca/api/'+serviceName+'/'+methodName,
					jsonData:{
						request:params
					},
					params:{
						'htoken':mpToken,
						'returnType':'json'
					},
					headers:{
						'Content-Type':'application/json'
					},
					method:httpMethod,
					scope:this,
					success:function(response){
						Ext.Viewport.setMasked(false);
						var resultObj = eval("("+response.responseText+")");
						successFnc(resultObj,this);
					}
					});
			}


		}
});
var previewsView = [];
