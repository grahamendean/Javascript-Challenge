// YOUR CODE HERE!
var tbody = d3.select('tbody');

function showTable(jsData) {
    tbody.html('');

    jsData.forEach(obj => {
        var row = tbody.append('tr');
        
        Object.values(obj).forEach(val => {
            var cell = row.append('td');
            
            cell.text(val);
        })
    });
};

showTable(data);

//create a click on "Filter Table"
var form = d3.select('form');
// form.on("change",runEnter);    
var button = d3.select('button');
button.on('click', runEnter);
var inputs = d3.selectAll('input');
//clicking function
inputs.on('change', runEnter)


var filteredData = data;

function runEnter() {

    var key = d3.select(this).property('id');
    var value = d3.select(this).property('value');

    if(value){
        filteredData.filter(obj => obj[key] == value);
    };

    showTable(filteredData);
}





//     d3.event.preventDefault();
//     tbody.html('');
//     var date_time = d3.select("#datetime");
//     var value = date_time.property('value');
//     var city = d3.select("#city");
//     var city_value = city.property('value');
//     var state = d3.select("#state");
//     var state_value = state.property('value');
//     var country = d3.select("#country");
//     var country_value = country.property('value');
//     var shape = d3.select("#shape");
//     var shape_value = shape.property('value');
    
//     var filterData = data.filter(obj => (obj.datetime === value) || (obj.city === city_value) || 
//         (obj.state === state_value) || (obj.country === country_value) || (obj.shape === shape_value));
//     console.log(filterData)
// //filter the data 
//     filterData.forEach(function(text_input) {
//         var row = tbody.append("tr");
//         Object.entries(text_input).forEach(function([key, value]) {
//             console.log(key,value);
//             var cell = row.append("td");
//             cell.text(value);
//         })
//     })
// };

