Ext.define('PET.controller.Login',{
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
        
        console.log('init login controller.');

      
        this.control({
          '#btnLogin':{
							'tap':function(item){

								//lstore.setData('{email:"test",password:"123"}');
								
								this.loginMemberPortal();

							 
          	}
					},
					'#btnLoginRegister':{
							'tap':function(item){
								
               this.changeView('RegisterVW');
							 
          	}
					},
					'#btnLoginForgotPassword':{
							'tap':function(item){
							
               this.changeView('ForgotPasswordVW');
							 
          	}
					}

						
        }); //end control

    },
		changeView:function(viewName,direction,data){
			var home;
			home = this.getApplication().getController('Home');
			home.changeView(viewName,direction,data);
		},
		loginMemberPortal:function(){
			var loginvw = Ext.getCmp('LoginVW');
			var loginData = loginvw.getValues();
			//913116@pet.com
			var email = loginData.email;
			var pw=loginData.password;
			var hashedPW = CalculateSHA512Hash(email,pw);
			//var paramEmail = Ext.create('ParamMD'{name:'email',value:email});
			//var paramPassword = Ext.create('ParamMD'{name:'password',value:hashedPW});
			params={APIName:"Member Portal",
				BrandId:"61E735F2-E2A1-43A3-9E98-6D69DF303F9D",
				Password:hashedPW,
				UserName:email};
			this.getApplication().getController('Home').callAPIService('POST','AuthService','GenerateAPITokenJson',params,this.LoginSuccess);
			
			
		},
		LoginSuccess:function(response,homeVW)
		{
try
{
	

			if(response.GenerateAPITokenJsonResult.ResponseMessageHeader.IsSuccess)
			{
				isAuthenticated=true;
				var token = response.GenerateAPITokenJsonResult.ResponseMessageBody.MessageBody[0].Message;
				mpToken=token;
				console.log('received token:'+mpToken);
			
       homeVW.changeView('MainVW');
			}
			else{
				isAuthenticated=false;
				alert('login failed');
			}
}
catch(e)
{
	alert(e);
}
			
		}

});

