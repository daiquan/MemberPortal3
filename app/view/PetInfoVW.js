var petInfoList={
	xtype:'list',
	id:'lstPetInfo',
	store:'PetInfoST',
	disableSelection:true,
	itemTpl:
		'<span style="float:left;width:35%;margin-top:10px;"><img src="https://www.petsecure.com/Portal/Content/Petsecure/images/cat.jpg" width="100"/></span>'+
	
		'<div style="float:left;width:65%;">'+
			'<div style="background:#DFE0E9;line-height:1.8em;" ><h3 style="margin:10px;"><b>{PetName} | {Breed}</b></h3></div>'+
			

			'<div style="line-height:1.3em;"><div style="float:left;">Date of Birth: </div><div style="text-align:left;margin-left:130px">{DateOfBirth}</div></div>'+
			'<div><div style="float:left;">Age:</div><div style="text-align:left;margin-left:130px">{Age}</div></div>'+
			'<div><div style="float:left;">Gender:</div><div style="text-align:left;margin-left:130px">{Gender}</div></div>'+
			'<div><div style="float:left;">Sprayed/Neutered:</div><div style="text-align:left;margin-left:130px">{Sprayed}</div></div>'+
			'<div><div style="float:left;">Pet Identifier:</div><div style="text-align:left;margin-left:130px">{PetIdentifier}</div></div>'+

			'<div><div style="float:left;"><b>Policy #: </b></div><div style="text-align:left;margin-left:130px"><b>{PolicyNumber}</b></div></div>'+
			'<div><div style="float:left;">Product:</div><div style="text-align:left;margin-left:130px">{Product}</div></div>'+
			'<div><div style="float:left;">Eff Date:</div><div style="text-align:left;margin-left:130px">{EffDate}</div></div>'+
'<div><div style="float:left;">Status:</div><div style="text-align:left;margin-left:130px">{Status}</div></div>'+
			'<div><div style="float:left;">Monthly Premium:</div style="text-align:left;margin-left:130px"><div>{Premium}</div></div>'+

		'</div>'
	
	
}
Ext.define('PET.view.PetInfoVW', {
	id:"PetInfoVW",
    extend: 'Ext.Panel',
		xtype:'PetInfoVW',
    config: {
			title:'Pet',
			iconCls: 'twitter',
			layout:'fit',
 	   items: 
			[
				{
					xtype:'toolbar',
					title:'Pet Info',
					docked:'top',
					defaults:{
						ui:'plain',
						iconMask:true,
						xtype:'button'
					},
					items:[
					{
						
						iconCls:'reply',
						go:'right_HomeVW',
						docked:'left'
					}
					
					]
				
				},
				petInfoList
				
			]		
   }
});