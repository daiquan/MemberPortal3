Ext.define('PET.profile.Desktop', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Desktop',
        views: ['MainVW']
    },

    isActive: function() {
        return true;
    },


    launch: function() {
       	Ext.Viewport.setLayout({type: 'card', animation: {type: 'slide',direction:'left'}});
				
				var landingPage;
				//isAuthenticated=true;
       if(isAuthenticated){
					
					var landingPage=Ext.create('PET.view.desktop.MainVW');
				}
				else{
					//var landingPage = this.createView('HomeVW');
					//console.log(app);
					
					var landingPage=Ext.create('PET.view.LoginVW');
				}
       
      
       
       Ext.Viewport.add(landingPage);
    }
});