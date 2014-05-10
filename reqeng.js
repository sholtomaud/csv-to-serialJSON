//Copyright (C) 2014 Sholto Maud

//Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

//The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


var xlsxj = require("xlsx-to-json"),
	Converter = require("csvtojson").core.Converter,
	fs = require("fs"),
	inquirer = require("inquirer"),
	glob = require("glob");

console.log("Generate Gaffa code from .csv requirements file")




glob("*.csv", function (err,files){
	var questions = [
		{
	 		type: "list",
		    name: "file",
		    message: "What .csv file would you like to use??",
		    choices: files,
		    when: function( answers ) {
		      return answers.comments !== "Nope, all good!";
		    }
	  	}];
	  
	inquirer.prompt(questions, function( selected ) {
	    // Use user feedback for... whatever!!
	    console.log("\nReturn:");
	    console.log(JSON.stringify(selected,null, "  "));


	    //Converter Class
		
		var csvFileName = selected.file;
		var fileStream = fs.createReadStream(csvFileName);
		
		console.log(fileStream);
		//new converter instance
		var csvConverter = new Converter({constructResult:true});

		//end_parsed will be emitted once parsing finished
		csvConverter.on("end_parsed",function(jsonObj){
		   console.log(jsonObj); //here is your result json object
		});

		//read from file
		fileStream.pipe(csvConverter);


/*
		xlsxj({
		    input: selected.file, 
		    output: null
		  }, function(err, result) {
		    if(err) {
		      console.error(err);
		    }else {
		      console.log(result);
		    }
		 });
*/

	});
});





/*
  
*/  