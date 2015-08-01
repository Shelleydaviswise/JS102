var greaterArray = [ ];

var outputString = " ";

var inputArray = function (arr) {
    for (var i = 0; i < arr.length; i++) {
      if (Number(arr[i]) > 25) {
        greaterArray.push(arr[i]);

      }
    } 
  }
  var sortArr = function (arr){
    // console.log(arr);
    return arr.sort();
  }

  var newString = function (arr) {
    for (var i = 0; i < arr.length; i++) {
      outputString += "<div class = 'number'>" + arr[i] + "</div>";
    }
  }

  $(document).ready (function(){

    $('button').click(function() {

        var inputVal = $('#numInput').val();
        // console.log(inputVal);
      

        var firstArray =inputVal.split(",");
        // console.log(firstArray);

        
        var newArray = inputArray(firstArray);
        // console.log(greaterArray);

        var sortedArray = sortArr(greaterArray);
        console.log("sortedArray", sortedArray);

        // var sortedArray = greaterArray.sort();
        // console.log(sortedArray);
        // abbreviated method for sorting into an array

        newString(sortedArray);
        console.log("outputString", outputString);

        $('#output').append(outputString);
      })
   })