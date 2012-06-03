Ext.define('PET.controller.Login',{
    extend:'Ext.app.Controller',

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
								
               this.mixins.mixHome.changeView('RegisterVW');
							 
          	}
					},
					'#btnLoginForgotPassword':{
							'tap':function(item){
							
               this.mixins.mixHome.changeView('ForgotPasswordVW');
							 
          	}
					},
					'#btnRegister':{
							'tap':function(item){
							 this.registerCustomer();
							 
          	}
					},
					'#btnForgotPassword':{
						'tap':function(item){
							this.forgotPassword();
						}
					}

						
        }); //end control

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
			this.mixins.mixHome.callAPIService('POST','AuthService','GenerateAPIToken',params,this.LoginSuccess);
			
			
		},
		LoginSuccess:function(response,homeVW)
		{

			try
			{
						console.log(response);

						if(response.ResponseMessageHeader.IsSuccess)
						{
							isAuthenticated = true;
							var token       = response.ResponseMessageBody.MessageBody[0].Message;
							mpToken         = token;
							console.log('received token:'+mpToken);
				
			       homeVW.changeView(profileName+'.MainVW');
						}
						else{
							isAuthenticated = false;
							alert('login failed');
						}
			}
			catch(e)
			{
				alert(e);
			}

			
		},
		registerCustomer:function(){
			var regvw = Ext.getCmp('RegisterVW');
			var regData = regvw.getValues();
			var email = regData.email;
			var cn=regData.custNum;
			params={BrandId:'61E735F2-E2A1-43A3-9E98-6D69DF303F9D',CustomerNumber:cn,Email:email
				};
				this.mixins.mixHome.callAPIService('POST','AuthService','RegisterCustomer',params,this.registerCustomerSuccess);
		},
		registerCustomerSuccess:function(response,loginc){
			
			try
			{
						console.log(response);

						if(response.ResponseMessageHeader.IsSuccess)
						{
							
							var msg = response.ResponseMessageBody.MessageBody[0].Message;
							alert(msg);
			       
						}
						else{
						
							alert('register failed');
						}
						loginc.changeView('LoginVW');
			}
			catch(e)
			{
				alert(e);
			}
		},
		forgotPassword:function(){
			var vw = Ext.getCmp('ForgotPasswordVW');
			var data = vw.getValues();
			var email = data.email;
			params={BrandId:'61E735F2-E2A1-43A3-9E98-6D69DF303F9D',Email:email
				};
				this.mixins.mixHome.callAPIService('POST','AuthService','ResetPassword',params,this.forgotPasswordSuccess);
		},
		forgotPasswordSuccess:function(response,loginc){
			
			try
			{
						console.log(response);

						if(response.ResponseMessageHeader.IsSuccess)
						{
							
							var msg = response.ResponseMessageBody.MessageBody[0].Message;
							alert(msg);
			       
						}
						else{
						
							alert('reset password failed');
						}
						loginc.changeView('LoginVW');
			}
			catch(e)
			{
				alert(e);
			}
		}
		

});

