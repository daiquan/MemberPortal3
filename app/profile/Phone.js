Ext.define('PET.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Phone',
        views: ['MainVW']
    },

    isActive: function() {
        return Ext.os.is.Phone;
    },


    launch: function() {
       	Ext.Viewport.setLayout({type: 'card', animation: {type: 'slide',direction:'left'}});
				
				var landingPage;
				//isAuthenticated=true;
       if(isAuthenticated){
					
					var landingPage=Ext.create('PET.view.phone.MainVW');
				}
				else{
					//var landingPage = this.createView('HomeVW');
					//console.log(app);
					
					var landingPage=Ext.create('PET.view.LoginVW');
				}
       
      
       
       Ext.Viewport.add(landingPage);
    }
});