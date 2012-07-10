
Ext.define('PET.view.tablet.MainVW', {
    extend: 'Ext.Container',
    requires: [
        'Ext.dataview.NestedList',
        'Ext.navigation.Bar'
    ],
    config: {
				name:'mainView',
				id:'tablet_MainVW',
        fullscreen: true,
        tabBarPosition: 'bottom',
        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left',
                duration: 250
            }
        },
        items: [
            {
                id: 'tabletMenu',
                xtype : 'nestedlist',

                docked: 'left',
                width : 250,
              
                scrollable:true,

                showAnimation:'SlideIn',
                store:{
                    type: 'tree',
                    id: 'NestedListStore',
                    model:'PET.model.MenuItem',
                    root: {},
                    data:[
                        {
                        "text": "Home",
                        "leaf":true

                        },
                        {
                            "text":"Customer Info",
                            "leaf":true,
                            "viewName":"CustInfoVW"
                        },
                        {
                            "text":"Payment Info",
                            "children":[
                                {
                                  "text":"Payment Info",
                                    "leaf":true
                                },
                                {
                                    "text":"Payment History",
                                    "leaf":true
                                }
                            ]
                        },
                        {
                            "text":"Pet Info",
                            "leaf":true
                        },
                        {
                            "text":"Claim",
                            "leaf":true
                        },
                        {
                            "text":"Document",
                            "leaf":true
                        }
                   ]
                },


                displayField: 'text'

            },
            {
                xtype:'container',
                layout:{type:'card',animation:'slide',direction:'left'},

                id:'tabletContent',
                items:[
                    {
                        xtype:'HomeVW'
                    },
                    {
                        xtype:'CustInfoVW'

                    },
                    {
                        xtype:'PaymentInfoVW'
                    },
                    {
                        xtype:'PaymentHistoryVW'
                    },
                    {
                        xtype:'PetInfoVW'
                    },
                    {
                        xtype:'ClaimVW'
                    },
                    {
                        xtype:'DocumentVW'
                    }

                ]

            }


            

        ]
    }
});
