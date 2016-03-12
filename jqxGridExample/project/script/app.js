
        $(document).ready(function () {
            var data = generatedata(500);
            var source =
            {
                localdata: data,
                datafields:
                [
                    { name: 'name', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'date', type: 'date'},
                    { name: 'quantity', type: 'number' }
                ],
                datatype: "array"
            };

            var dataAdapter = new $.jqx.dataAdapter(source);

            $("#jqxgrid").jqxGrid(
            {
                width: 850,
                source: dataAdapter,
                showfilterrow: true,
                filterable: true,
                selectionmode: 'multiplecellsextended',
                columns: [
                  { text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215 },
                  {
                      text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220
                  },
                  { text: 'Available', datafield: 'available', columntype: 'checkbox', filtertype: 'bool', width: 67 },
                  { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
                  { text: 'Qty.', datafield: 'quantity', filtertype: 'number',  cellsalign: 'right' }
                ]
            });
            $('#clearfilteringbutton').jqxButton({ height: 25});
            $('#clearfilteringbutton').click(function () {
                $("#jqxgrid").jqxGrid('clearfilters');
            });
        });