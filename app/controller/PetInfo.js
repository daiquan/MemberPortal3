

Ext.define('PET.controller.PetInfo',{
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
        
        console.log('init pet info controller.');
        
        this.control({
					'#btnPetInfo':{
						'tap':function()
						{
							historyItem=Ext.Viewport.items.get('PetInfoVW');
								this.changeView('PetInfoVW','left');
							if(historyItem==null)
							{

								this.loadPetInfo();
							}
						}
					},
					'#lstPetInfo':{
						'itemtap':function(){
								if(!this.actions){
									this.actions=Ext.create('Ext.ActionSheet',{
										
										items:[
										{
											text:'Policy Detail',
											id:'btnPetDetail',
											go:'left_PolicyVW'
										},
										{
											text:'Pet Claim',
											id:'btnPetClaim',
											go:'left_ClaimVW'
										},
										{
											text:'Pet Practice',
											id:'btnPetPractice',
											go:'left_PracticeVW'
										},
										{
											text:'Pet Microchip',
											id:'btnPetMicrochip',
											go:'left_MicrochipVW'
										},
										{
											text:'Cancel',
											scope:this,
											ui:'confirm',
											handler:function(){
												this.actions.hide();
											}
										}
										]
									});

								} //end if
								this.actions.show();
							
						}
					},
					'#btnPetDetail':{
						'tap':function(){
							this.actions.hide();
						}
					},
					'#btnPetClaim':{
						'tap':function(){
							this.changeView('ClaimVW');
							this.actions.hide();
						}
					},
					'#btnPetPractice':{
						'tap':function(){
							this.actions.hide();
						}
					},
					'#btnPetMicrochip':{
						'tap':function(){
							this.changeView('MicrochipVW');
							this.actions.hide();
						}
					},
					'#lstMicrochip':{
						'itemtap':function(item){
							var record = item.getSelected().items[0];
							
							this.changeView('EditMicrochipVW','left',record);
							Ext.getCmp('mcTitle').setTitle('Edit Microchip');
							Ext.getCmp('btnMCDelete').setHidden(false);
						}
					},
					'#btnAddMicrochip':{
						'tap':function()
						{
							this.changeView('EditMicrochipVW');
							Ext.getCmp('mcTitle').setTitle('Add Microchip');
							Ext.getCmp('btnMCDelete').setHidden(true);
						}
					},
					'#lstPractice':{
						'itemtap':function(item){
								var record = item.getSelected().items[0];
								this.changeView('EditPracticeVW','left',record);
								Ext.getCmp('practiceTitle').setTitle('Edit Practice');
								Ext.getCmp('btnPracticeDelete').setHidden(false);
						}
					},
					'#btnAddPractice':{
						'tap':function(){
							this.changeView('EditPracticeVW');
							Ext.getCmp('practiceTitle').setTitle('Add Practice');
							Ext.getCmp('btnPracticeDelete').setHidden(true);
						}
					}
					

						
        }); //end control
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
				}
			});
		},
		changeView:function(viewName,direction,data){
			var home;
			home = this.getApplication().getController('Home');
			home.changeView(viewName,direction,data);
		}
});

