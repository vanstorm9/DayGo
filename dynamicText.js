

		
var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var query;


//Declare some global array that holds the ouptuts

var output = [];
var mainCount = 0;


function setup(inputArray,input_size) {
  output = [];
  
  //var outputvalue = document.getElementById('textboxName');
  
  //Get some user input in sentences through the webpage?
  //Get the size of the input.
  
  var url;

  for(var i = 0;i<input_size;i++){
    //Get user input and store into some array
    
    //Change the search query.
    query = "&q="+inputArray[i];
    //Change the url
    url = api + apiKey + query;
    loadJSON(url,filterCB);

    
  }
  
}

//Filter the JSON to receive the most popular result and store the result in the array
function filterCB(data){
  //println(data.data[0].images.mp4);

  println(data.data[Math.floor((Math.random()*data.data.length)+1)].images.fixed_height.mp4);
  
  //Push the filtered result into the output array
  output.push(data.data[Math.floor((Math.random()*data.data.length)+1)].images.fixed_height.mp4);
  document.getElementById('MyVideo').src = output[0];
    document.getElementById('MyVideo').load();
    document.getElementById('MyVideo').play();
    if(!(mainCount >= output.length - 1))
    {
      mainCount++;
    }
}




        $(document).ready(function(){

            var counter = 2;

            $("#addButton").click(function () {

          if(counter>10){
                    alert("Only 10 textboxes allow");
                    return false;
          }

          var newTextBoxDiv = $(document.createElement('div'))
               .attr("id", 'TextBoxDiv' + counter);

          newTextBoxDiv.after().html('<input type="text" name="textbox' + counter +
                '" id="textbox' + counter + '" value="" style="width:35%;">');

          newTextBoxDiv.appendTo("#TextBoxesGroup");


          counter++;
             });

             $("#removeButton").click(function () {
          if(counter==1){
                  alert("No more textbox to remove");
                  return false;
               }

          counter--;

                $("#TextBoxDiv" + counter).remove();

             });

             $("#getButtonValue").click(function () {

          var msg = '';
          var msgAr = [];

          for(i=1; i<counter; i++){
              //msg += "\n Textbox #" + i + " : " + $('#textbox' + i).val();
              msgAr.push($('#textbox' + i).val());
	
          }
                
          		setup(msgAr,i);
              
                
             });

          });
        
