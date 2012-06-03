Ext.define('PET.view.ErrorFieldCMP', {
	id:"errorFieldCMP",
    extend: 'Ext.Component',
		xtype:'ErrorFieldCMP',
    config: {

			style:'background-color:yellow;height:25px;width:100%;color:red;',
			html:'error',
			name:'',
			//styleHtmlContent:true,
/*
      cls: 'errorfield',
      tpl: [
          '    <ul>',
          '        <tpl for=".">',
          '            <li>test{_field} {_message}</li>',
          '        </tpl>',
          '    </ul>'
      ],*/

			hidden:true
   }
});

//{_field} {_message}