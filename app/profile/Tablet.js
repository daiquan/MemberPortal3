Ext.define('PET.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Tablet',
        views: ['MainVW']
    },

    isActive: function() {
        return Ext.os.is.Tablet;
    },


    launch: function() {
       	Ext.Viewport.setLayout({type: 'card', animation: {type: 'slide',direction:'left'}});
				
				var landingPage;
				//isAuthenticated=true;
       if(isAuthenticated){
					
					var landingPage=Ext.create('PET.view.tablet.MainVW');
				}
				else{
					//var landingPage = this.createView('HomeVW');
					//console.log(app);
					
					var landingPage=Ext.create('PET.view.LoginVW');
				}
       
      
       
       Ext.Viewport.add(landingPage);
    }
});