var paymentHistoryList={
	id:'paymentHistoryList',
	cls: 'timeline',
	xtype:'list',

/*
	plugins: [
	{ptype:'pullrefresh'}
  ],*/
  //plugins: [new Ext.plugin.PullRefresh()],

	store:'PaymentHistoryST',
	itemTpl:'{date} - {policy} - {paymentMethod} - {amount} - {status}'
};

Ext.define('PET.view.PaymentHistoryVW', {
	id:"PaymentHistoryVW",
    extend: 'Ext.Panel',
	xtype:'PaymentHistoryVW',
    config: {
	alias: 'widget.PaymentHistoryVW',
      fullscreen: true,
			layout:{
				type:'fit'
			},
 	   items: 
			[

				{
					xtype:'toolbar',
					title:'Payment History',
					docked:'top',
					items:
					[
					{
						ui:'plain',
						iconMask:true,
						xtype:'button',
						iconCls:'reply',
						go:'right_PaymentInfoVW'
					}
					]
				
				},
				paymentHistoryList
			]		
   }
});