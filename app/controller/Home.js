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

					'tabpanel[name=mainView]':{
							'activeitemchange':function(i,v,ov){
								if(Ext.Array.contains(mainViewHistory,v.getItemId()))
								{
									return;
								}
								if(v.getItemId() == 'CustInfoVW')
								{
									//alert(v.getItemId());
									this.loadCustomerInfo();
									
								}
								else if(v.getItemId() == 'PaymentInfoVW')
								{
									//alert(v.getItemId());
									this.loadPaymentInfo();
								}
								else if(v.getItemId() == 'PetInfoVW')
								{
									//alert(v.getItemId());
									this.loadPetInfo();
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
						mainViewHistory.push('CustInfoVW');
						
					}
					else{
						alert('Error: can not load customer info.');
					}
				});
		},
		loadPaymentInfo:function()
		{
			this.getApplication().getController('Home').callAPIService('GET','MemberPortalService','GetPaymentInfo',{htoken:mpToken,returnType:'json'},function(response){
				console.log('get payment info result:')
				console.log(response);
				if(response.GetPaymentInfoResult.ResponseMessageHeader.IsSuccess)
				{
					var paymentInfoData = response.GetPaymentInfoResult.ResponseMessageBody.MessageBody[0];
					var pstore =Ext.getStore('PaymentInfoST');
					pstore.setData(paymentInfoData.Details);
					var listPayment = Ext.getCmp('lstPaymentInfo');
					listPayment.refresh();
					mainViewHistory.push('PaymentInfoVW');
				}
			});
		},
		loadPetInfo:function(){
			this.getApplication().getController('Home').callAPIService('GET','MemberPortalService','GetPetInfo',{htoken:mpToken,returnType:'json'},function(response){
				console.log('get pet info result:')
				console.log(response);
				if(response.GetPetInfoResult.ResponseMessageHeader.IsSuccess)
				{
					var petInfoData = response.GetPetInfoResult.ResponseMessageBody.MessageBody[0];
					var pstore =Ext.getStore('PetInfoST');
					pstore.setData(petInfoData.Pets);
					var listPet = Ext.getCmp('lstPetInfo');
					listPet.refresh();
					mainViewHistory.push('PetInfoVW');
				}
			});
		},

    changeView: function(viewName,direction,data) {  
	     	var activeItem = Ext.Viewport.getActiveItem();
        var card;

					if(direction==null)
						direction='left';

	       Ext.Viewport.getLayout().getAnimation().getOutAnimation().setDirection(direction);
				Ext.Viewport.getLayout().getAnimation().getInAnimation().setDirection(direction);
				//if(this.)

				if(viewName=='MainVW')
				{
					viewName = profileName+'_'+viewName;
				}
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
					jsonData:params,
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

