var policyDetail={
	xtype:'list',
	id:'lstPolicyDetail',
	store:'PolicyDetailST',
	disableSelection:true,
	scrollable:false,
	height:200,
	itemTpl:
		'<span style="float:left;width:8%;margin-top:10px;"><img src="https://www.petsecure.com/Portal/Content/Petsecure/images/cat.jpg" width="100"/></span>'+
		'<div style="float:left;width:92%;">'+
			'<div style="background:#DFE0E9;line-height:1.8em;" ><h3 style="margin:10px;"><b>Policy - {policyNumber}</b></h3></div>'+
			
			'<div style="width:45%;float:left;">'+
			'<div style="line-height:1.3em;"><div style="float:left;">Product: </div><div style="text-align:left;margin-left:150px">{product}</div></div>'+
			'<div><div style="float:left;">Eff Date:</div><div style="text-align:left;margin-left:150px">{effDate}</div></div>'+
			'<div><div style="float:left;">Status:</div><div style="text-align:left;margin-left:150px">{status}</div></div>'+
			'<div><div style="float:left;">Renewal Date:</div><div style="text-align:left;margin-left:150px">{renewalDate}</div></div>'+
			'<div><div style="float:left;">Deductible:</div><div style="text-align:left;margin-left:150px">{deductible}</div></div>'+
			'<div><div style="float:left;">Deductible Remaining:</div><div style="text-align:left;margin-left:150px">{dedRemaining}</div></div>'+
			'</div>'+
			'<div style="width:45%;float:right">'+
			'<div><div style="float:left;"><b>Withdrawal Day: </b></div><div style="text-align:left;margin-left:150px"><b>{withdrawalDay}</b></div></div>'+
			'<div><div style="float:left;">Premium:</div><div style="text-align:left;margin-left:150px">{premium}</div></div>'+
			'</div>'+
		'</div>'
	
	
};

var coverages = {
	xtype:'fieldset',
	title:'Coverages',
	items:[
	{
		xtype:'list',
		id:'lstCoverage',
		store:'CoverageST',
		itemTpl:'{coverage} - {percent}% - {waitingPeriodEndDate}',
		height:200
	}
	
	]

};

Ext.define('PET.view.PolicyVW', {
	id:"PolicyVW",
    extend: 'Ext.Panel',
		alias: 'widget.PolicyVW',
		
    config: {
      fullscreen: true,
			layout:{
				xtype:'vbox'
			},
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Policy',
					docked:'top',
					items:[
					{
						ui:'plain',
						iconMask:true,
						xtype:'button',
						iconCls:'reply',
						go:'right_PetInfoVW'
					},
					{
						ui:'plain',
						iconMask:true,
						xtype:'button',
						iconCls:'compose',
						docked:'right',
						go:'left_ChangeWithdrawalDayVW'
					}
					]
				
				},
				policyDetail,
				coverages				
			]		
   }
});