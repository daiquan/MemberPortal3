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
var profileName=Ext.os.deviceType.toLowerCase();
var previewsView = [];
var mainViewHistory=[];
Ext.application({
    name: 'PET',
profiles: ['Phone', 'Tablet','Desktop'],

controllers:['Login','Home','PaymentInfo','PetInfo','Claim','Document','Customer'],
models:['ErrorMessageMD','CustInfoMD','AddressMD','ContactMD','PaymentInfoMD','PaymentMethodMD','ClaimFormMD','ClaimMD','CoverageMD','DocumentMD','MicrochipMD','PaymentHistoryMD','PetInfoMD','PolicyDetailMD','PracticeMD','LoginMD','ParamMD'],
stores:['CustInfoST','CustPrimaryContactST','CustSecondaryContactST','CustPetAddressST','CustMailingAddressST','DocumentST','ClaimST','ClaimFormST','PaymentInfoST','PaymentMethodST','PaymentHistoryST','PetInfoST','MicrochipST','PracticeST','PolicyDetailST','CoverageST','LoginST'],
views:['HomeVW','ErrorFieldCMP','CustInfoVW','EditPrimaryContactVW','EditSecondaryContactVW','EditPetAddressVW','EditMailingAddressVW','PetInfoVW','PolicyVW','PracticeVW','MicrochipVW','EditMicrochipVW','EditPracticeVW','NewPracticeVW','PaymentInfoVW','PaymentHistoryVW','ChangeWithdrawalDayVW','PaymentMethodVW','RegisterVW','LoginVW','ForgotPasswordVW','ChangePasswordVW','DocumentVW','ClaimFormVW','ClaimVW']



});
