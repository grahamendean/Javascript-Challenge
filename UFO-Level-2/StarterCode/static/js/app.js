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
button.on('click', handleClick);
var inputs = d3.selectAll('input');
//clicking function
inputs.on('change', runEnter)

var filteredData = data;

function runEnter() {

    var key = d3.select(this).property('id');
    var value = d3.select(this).property('value');

    console.log(key,value);
    
    if(value){
        filteredData = filteredData.filter(obj => obj[key] == value);
    };

    showTable(filteredData);
}

function handleClick() {
    d3.event.preventDefault();
    inputs.property('value','');
    filteredData = data;
    showTable(data);
}



