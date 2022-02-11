let totalCalories = 0;





function getCalories (query){

$.ajax({
    method: 'GET',
    url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
    headers: { 'X-Api-Key': 'o7Vl+wl2wg6RAxxPA/meUw==OXz8mZ5Ksv3yqUiG' },
    contentType: 'application/json',
    success: function (result) {
        console.log(result);
        const results = result.items
        for (let i = 0; i < results.length; i++) {

            const calories = results[i].calories
            totalCalories = totalCalories + calories
           $("#displayCalories").text("Amount of calories in " + query + " is " + calories + " cal ")
        }
        
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});



}

    $("#myButton").click(  function() {
    var query = $("#searchCalories").val()
    getCalories(query);
    })