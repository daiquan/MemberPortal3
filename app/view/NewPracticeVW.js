var newPracticeForm = {
	xtype:'fieldset',
	defaults:{
		labelWidth:'40%',
		xtype:'textfield'
	},
	items:[
		{
			
			label:'Practice Name',
			name:'practiceName'
		},
		{
	
			label:'Phone',
			name:'practicePhone',
			
		},
		{
	
			label:'Address',
			name:'practiceAddress'
		}
	]
};


Ext.define('PET.view.NewPracticeVW', {
	id:"NewPracticeVW",
    extend: 'Ext.form.Panel',
		alias: 'widget.NewPracticeVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
				
					title:'New Practice',
					docked:'top',
					items:[
					{
						ui:'plain',
						iconMask:true,
						xtype:'button',
						iconCls:'reply',
						go:'right_EditPracticeVW'
					}
					
					]
				
				},
				{
					xtype:'toolbar',
					docked:'bottom',
					items:[
					{
						xtype:'button',
						id:'btnNewPracticeAction',
						ui:'action',
						docked:'right',
						text:'Save'
						
					}
					]
				},
				newPracticeForm
			]		
   }
});


