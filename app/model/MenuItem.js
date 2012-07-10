Ext.define('PET.model.MenuItem', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'text', type: 'string'},
            {name: 'viewName', type: 'string'}
        ]
    }
});