function loadCanadaData() {
    var request;
    request = new XMLHttpRequest(); 
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var canadaData = this.responseText;
            var regCityNames = /^.*[a-z\A-Z]+/gm;
            var regCityPopulation = /[0-9]+.*$/gm;
            var cities = canadaData.match(regCityNames);
            var populations = canadaData.match(regCityPopulation);
            displayTable(cities, populations);
        }
    };
    request.open("GET", "canada.txt");
    request.send();
}

function loadMexicoData() {
    var request;
    request = new XMLHttpRequest(); 
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var mexicoData = this.responseText;
            var regCityNames = /^.*[a-z\A-Z]+/gm;
            var regCityPopulation = /[0-9]+.*$/gm;
            var cities = mexicoData.match(regCityNames);
            var populations = mexicoData.match(regCityPopulation);
            displayTable(cities, populations);
            
        }
    };
    request.open("GET", "mexico.txt");
    request.send();
}

function loadUsaData() {
    var request;
    request = new XMLHttpRequest(); 
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var usaData = this.responseText;
            var regCityNames = /^.*[a-z\A-Z]+/gm;
            var regCityPopulation = /[0-9]+.*$/gm;
            var cities = usaData.match(regCityNames);
            var populations = usaData.match(regCityPopulation);
            displayTable(cities, populations);
        }
    };
    request.open("GET", "usa.txt");
    request.send();
}

function loadRussiaData() {
    var request;
    request = new XMLHttpRequest(); 
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var russiaData = this.responseText;
            var regCityNames = /^.*[a-z\A-Z]+/gm;
            var regCityPopulation = /[0-9]+.*$/gm;
            var cities = russiaData.match(regCityNames);
            var populations = russiaData.match(regCityPopulation);
            displayTable(cities, populations);
        }
    };
    request.open("GET", "russia.txt");
    request.send();
}


function displayTable(cities, populations) {
    var table;
    table ="<tr><th>City</th><th>Population</th></tr>";
    /*Loops through two lists and display their data on a table*/
    for(i = 0; i < cities.length; i++) {
        table += "<tr><td>" + cities[i] + "</td><td>" + populations[i] + "</td></tr>";
    }
    document.getElementById("cityData").innerHTML = table;
}

function readJSON(){
    /*evaluate input and read user JSON*/

    var json, request;
    json = document.getElementById("input").value;
    request = new XMLHttpRequest(); 

    //validate user input
    regJson1 = /json\.txt/i;
    regJson2 = /json1\.txt/i;
    var json1 = regJson1.test(json);
    var json2 = regJson2.test(json);
    
    //Reads the required file or displays alert
    if(json1){
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var jsonData = JSON.parse(request.responseText);
                displayJSON(jsonData);
                return

            }
        }
        request.open("GET", "json.txt");
        request.send();
    }
    if(json2){
        
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var jsonData = JSON.parse(request.responseText);
                displayJSON(jsonData);
                return
            }
        }
        request.open("GET", "json1.txt");
        request.send();
    }
    if(!json1 & !json2){
        document.getElementById("jsonData").innerHTML = "";
        document.getElementById("inputAlert").innerHTML = "Document doesn't exist on server";
    }
}

function displayJSON(data){
    //turn off alert
    document.getElementById("inputAlert").innerHTML = "";
    document.getElementById("jsonData").innerHTML = "<p>Loading...</p>";
    var html;
    html = "";
    //Create message to display student info
    for(i = 0; i < data.students.length; i++){
        html += "<h4>" + data.students[i].first + " " + data.students[i].last + "</h4><p>Address: " + data.students[i].address.city + ", " + 
        data.students[i].address.state + ", " + data.students[i].address.zip + "</p><p>Major: " + data.students[i].major + "</br></br>GPA: " + 
        data.students[i].gpa+"</p></br></br>"; 

    }
    document.getElementById("jsonData").innerHTML = html; 

}
