// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


function Main() {
    this.citiesDiv = document.getElementById('cities');
    this.statusDiv = document.getElementById('status-key');
    this.dateDiv = document.getElementById('date-columns');
    this.circularDiv = document.getElementById('circular-graphic');
    this.imageDiv = document.getElementById('image');
    // these are for development and will be replaced by data from a datasource
    this.citiesArray = ["Atlanta", "Boise", "Chicago", "Denver", "San Diego"];
    this.datesArray = [
        {
            year: 2020,
            months: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12]
        },
        {
            year: 2021,
            months: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12]
        }]
    LoadInitialData();
}

function LoadInitialData() {
    for (let i = 0; i < this.citiesArray.length; i++) {
        const p = document.createElement('p');
        p.setAttribute('class', 'list-item');
        this.citiesDiv.appendChild(p).appendChild(document.createTextNode(this.citiesArray[i]));
    }
    for (let c = 0; c < this.datesArray.length; c++) {
        const y = document.createElement('p')
        y.setAttribute('class', 'list-item');
        this.dateDiv.appendChild(y).appendChild(document.createTextNode(this.datesArray[c].year));

        AssembleMonthList(this.datesArray[c].months);
    }
}

function AssembleMonthList(months) {
    console.log('months....', months)
    for (let i = 0; i < months; i++) {
        const m = document.createElement('p')
        m.setAttribute('class', 'list-item');
        this.dateDiv.appendChild(m).appendChild(document.createTextNode(parseInt(months[i])));
    }
}

Main();