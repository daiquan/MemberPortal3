Ext.define('PET.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Tablet',
        views: ['MainVW']
    },

    isActive: function() {
        //return Ext.os.is.Tablet;
        return true;
    },


    launch: function() {
       	Ext.Viewport.setLayout({type: 'card', animation: {type: 'slide',direction:'left'}});
				
				var landingPage;
				//isAuthenticated=true;
       if(isAuthenticated){
					console.log('access tablet view');
					var landingPage=Ext.create('PET.view.tablet.MainVW');
				}
				else{
					//var landingPage = this.createView('HomeVW');
					//console.log(app);
					
					var landingPage=Ext.create('PET.view.LoginVW');
                    var loginModel = Ext.create('PET.model.LoginMD',{email:'616498@pet.com',password:'123456'});
                    landingPage.setRecord(loginModel);
				}
       
      
       
       Ext.Viewport.add(landingPage);
    }
});