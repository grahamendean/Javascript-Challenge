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
    
var button = d3.select('button');
var input = d3.select('input');

button.on('click', handleFilter);

function handleFilter() {
    d3.event.preventDefault();

    var filterData = data;
    var value = input.property('value');
    tbody.html('');

    if(value) {
        filterData.filter(obj => obj.datetime === value)
    };

    showTable(filterData);
};