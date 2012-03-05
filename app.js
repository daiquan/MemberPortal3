Ext.Loader.setConfig({
    enabled: true,
    paths: {
        Ext: 'touch/src'
    }
});
Ext.require([
    'Ext.form.Panel',
    'Ext.form.FieldSet',
    'Ext.field.Text',
    'Ext.field.Password',
    'Ext.field.Email',
    'Ext.field.Url',
    'Ext.field.Checkbox',
    'Ext.field.Spinner',
    'Ext.field.Select',
    'Ext.field.Hidden',
    'Ext.field.DatePicker',
    'Ext.field.TextArea',
    'Ext.field.Slider',
    'Ext.field.Toggle',
    'Ext.field.Radio',
    'Ext.Button',
		'Ext.List',
		'Ext.Toolbar',
    'Ext.data.Store'
]);

var isAuthenticated=false;
var mpToken = null;
var reLoadPage=true;
Ext.application({
    name: 'PET',
controllers:['Login','Home','PaymentInfo','PetInfo','Claim','Document'],
models:['CustInfoMD','AddressMD','ContactMD','PaymentInfoMD','PaymentMethodMD','ClaimFormMD','ClaimMD','CoverageMD','DocumentMD','MicrochipMD','PaymentHistoryMD','PetInfoMD','PolicyDetailMD','PracticeMD','LoginMD','ParamMD'],
stores:['CustInfoST','CustPrimaryContactST','CustSecondaryContactST','CustPetAddressST','CustMailingAddressST','DocumentST','ClaimST','ClaimFormST','PaymentInfoST','PaymentMethodST','PaymentHistoryST','PetInfoST','MicrochipST','PracticeST','PolicyDetailST','CoverageST','LoginST'],
views:['MainVW','HomeVW','CustInfoVW','EditPrimaryContactVW','EditSecondaryContactVW','EditPetAddressVW','EditMailingAddressVW','PetInfoVW','PolicyVW','PracticeVW','MicrochipVW','EditMicrochipVW','EditPracticeVW','NewPracticeVW','PaymentInfoVW','PaymentHistoryVW','ChangeWithdrawalDayVW','PaymentMethodVW','RegisterVW','LoginVW','ForgotPasswordVW','ChangePasswordVW','DocumentVW','ClaimFormVW','ClaimVW'],


    launch: function() {
       	Ext.Viewport.setLayout({type: 'card', animation: {type: 'slide',direction:'left'}});
				
				var landingPage;
				//isAuthenticated=true;
       if(isAuthenticated){
					
					var landingPage=Ext.create('PET.view.MainVW');
				}
				else{
					//var landingPage = this.createView('HomeVW');
					//console.log(app);
					
					var landingPage=Ext.create('PET.view.LoginVW');
				}
       
      
       
       Ext.Viewport.add(landingPage);
    }
});
