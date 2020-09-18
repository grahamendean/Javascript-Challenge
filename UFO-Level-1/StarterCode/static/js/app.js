var tbody = d3.select('tbody');

function showTable(jsData) {
    
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
    
var button = d3.select('button');
var input = d3.select('input');
//clicking function
button.on('click', function() {
    tbody.html('');
    var date_time = d3.select("#datetime");
    var value = date_time.property('value');
    var filterData = data.filter(obj => obj.datetime === value);
    console.log(filterData)
//filter the data 
    filterData.forEach(function(text_input) {
        var row = tbody.append("tr");
        Object.entries(text_input).forEach(function([key, value]) {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        })
    })
});