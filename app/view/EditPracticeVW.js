
var practiceForm = {

		xtype:'fieldset',
		defaults:{
			labelWidth:'40%'
		},
		items:[
		{
			xtype:'selectfield',
			label:'Province',
			name:'province',
			options:[
			{
				text:'MB',
				value:'MB'
			},
			{
				text:'ON',
				value:'ON'
			},
			{
				text:'BC',
				value:'BC'
			}
			]
		},
		{
			xtype:'selectfield',
			label:'Practice',
			name:'practice',
			options:[

			]
		},
		{
			xtype:'selectfield',
			label:'Address',
			name:'address',
			options:[

			]
		},
		{
			xtype:'checkboxfield',
			label:'Is Primary',
			name:'isPrimary'
		}
		
		]
};
Ext.define('PET.view.EditPracticeVW', {
	id:"EditPracticeVW",
    extend: 'Ext.form.Panel',
		alias: 'widget.EditPracticeVW',
    config: {
      fullscreen: true,
 	   items: 
			[
				{
					xtype:'toolbar',
					id:'practiceTitle',
					title:'Practice',
					docked:'top',
					items:[
					{
						ui:'plain',
						iconMask:true,
						xtype:'button',
						iconCls:'reply',
						go:'right_PracticeVW'
					},
					{
						xtype:'button',
						id:'btnAddNewPractice',
						iconCls: 'add',
		        iconMask: true,
		        ui: 'plain',
						docked:'right',
						go:'left_NewPracticeVW'
					}
					
					]
				
				},
				{
					xtype:'toolbar',
					docked:'bottom',
					items:[
					{
						xtype:'button',
						id:'btnPracticeDelete',
						ui:'action',
						docked:'left',
						text:'Delete'
					},
					{
						xtype:'button',
						id:'btnPracticeAction',
						ui:'action',
						docked:'right',
						text:'Save'
						
					}
					]
				},
				practiceForm
			]		
   }
});