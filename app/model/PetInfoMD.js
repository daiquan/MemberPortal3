Ext.define('PET.model.PetInfoMD',{
	extend:'Ext.data.Model',
	config:{
		fields:[
		{name:'DateOfBirth',type:'date'},
		{name:'Age',type:'float'},
		{name:'Gender',type:'string'},
		{name:'Sprayed',type:'string'},
		{name:'PetIdentifier',type:'string'},
		{name:'PolicyNumber',type:'string'},
		{name:'Product',type:'string'},
		{name:'EffDate',type:'date'},
		{name:'Premium',type:'float'},
		{name:'vet',type:'string'},
		{name:'Status',type:'string'},
		{name:'PetName',type:'string'},
		{name:'Breed',type:'string'},
		{name:'Image',type:'string'}

		]
	}

});