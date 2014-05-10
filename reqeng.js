//Copyright (C) 2014 Sholto Maud

//Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

//The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

console.log('requireing google-spreadsheet');
var GoogleSpreadsheet = require("google-spreadsheet");

console.log('getting spreadsheet with key');
var my_sheet = new GoogleSpreadsheet('0Ak7zX9keQNghdC1KejgxRVo1Wl9XcnlvNGRZSXAyWUE');

// without auth -- read only
// # is worksheet id - IDs start at 1
//my_sheet.getRows( 1, function(err, row_data){
//    console.log( 'pulled in '+row_data.length + ' rows ')
//})

console.log('authenticating');
// set auth to be able to edit/add/delete
my_sheet.setAuth('sholto.maud@gmail.com','AIzaSyAIHvxiuGuzLqxBartg-1GPsDf4iFir6xE', function(err){
    my_sheet.getInfo( function( err, sheet_info ){
        console.log( sheet_info + ' is loaded' );
        // use worksheet object if you want to forget about ids
        sheet_info.worksheets[0].getRows( function( err, rows ){
            //rows[0].colname = 'new val';
            //rows[0].save();
            //rows[0].del();
        	console.log('rows');
 	      	console.log(rows);
        });
    });

    // column names are set by google based on the first row of your sheet
    //my_sheet.addRow( 2, { colname: 'col value'} );
/*
    my_sheet.getRows( 1, {
        start: 1,            // start index
        num: 100            // number of rows to pull
    	}, function(err, row_data){
       	console.log('row_data');
       	console.log(row_data);
        // do something...
    });
*/

});