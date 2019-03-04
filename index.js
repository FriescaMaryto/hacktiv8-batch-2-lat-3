function search(){
    var input, filter, table, tr, td, i, txtValue;
    input= document.getElementById("data");
    filter= input.value.toUpperCase();
    table= document.getElementById("tablePrint");
    tr=table.getElementsByTagName("tr");
    for(i=0;i<tr.length;i++){
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
    }
}

var results= [{
            name: "Alderaan",
            rotation_period: 24,
            orbital_period: 364,
            diameter: 12500,
            climate: "temperate",
            gravity: "1 standard",
            terrain: ["grasslands", "mountains"],
            surface_water: 40,
            population: 2000000000,
            residents: [
                "https://swapi.co/api/people/5/",
                "https://swapi.co/api/people/68/",
                "https://swapi.co/api/people/81/"
            ],
            films: [
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/1/"
            ],
            created: "2014-12-10T11:35:48.479000Z",
            edited: "2014-12-20T20:58:18.420000Z",
            url: "https://swapi.co/api/planets/2/"
        },
        {
            name: "Yavin IV",
            rotation_period: 24,
            orbital_period: 4818,
            diameter: 10200,
            climate: ["temperate","tropical"],
            gravity: "1 standard",
            terrain: ["jungle", "rainforests"],
            surface_water: 8,
            population: 1000,
            residents: [""],
            films: "https://swapi.co/api/films/1/",
            created: "2014-12-10T11:37:19.144000Z",
            edited: "2014-12-20T20:58:18.421000Z",
            url: "https://swapi.co/api/planets/3/"

        },
        {
            name: "Hoth",
            rotation_period: 23,
            orbital_period: 549,
            diameter: 7200,
            climate: "frozen",
            gravity: "1.1 standard",
            terrain: ["tundra", "ice caves", "mountain ranges"],
            surface_water: 100,
            population: "unknown",
            residents: [""],
            films: "https://swapi.co/api/films/2/",
            created: "2014-12-10T11:39:13.934000Z",
            edited: "2014-12-20T20:58:18.423000Z",
            url: "https://swapi.co/api/planets/4/"
        },
        {
            name: "Dagobah",
            rotation_period: 23,
            orbital_period: 341,
            diameter: 8900,
            climate: "murky",
            gravity: "1.1 standard",
            terrain: ["tundra", "ice caves", "mountain ranges"],
            surface_water: 100,
            population: "unknown",
            residents: [""],
            films: "https://swapi.co/api/films/2/",
            created: "2014-12-10T11:39:13.934000Z",
            edited: "2014-12-20T20:58:18.423000Z",
            url: "https://swapi.co/api/planets/4/"
        }
    ];


    var myTable= "<table><tr><th style='width: 100px; color: black;'>Name</th>";
    myTable+= "<th style='width: 100px; color: black;'>Rotation Period</th>";
    myTable+= "<th style='width: 100px; color: black;'>Orbital Period</th>";
    myTable+= "<th style='width: 100px; color: black;'>Diameter</th>";
    myTable+= "<th style='width: 100px; color: black;'>Climate</th>";
    myTable+= "<th style='width: 100px; color: black;'>Gravity</th>";
    myTable+= "<th style='width: 100px; color: black;'>Terrain</th>";
    myTable+= "<th style='width: 100px; color: black;'>Surface Water</th>";
    myTable+="<th style='width: 100px; color: black;'>Population</th></tr>";

   for (var i=0; i<results.length; i++) {
    //myTable+="<tr><td style='width: 100px;'>Number " + i + " is:</td>";
    //results[i] = results[i].toFixed(3);
    myTable+="<td style='width: 100px;'>" + results[i].name + "</td>";
    myTable+="<td style='width: 100px;'>" + results[i].rotation_period + "</td>";
    myTable+="<td style='width: 100px;'>" + results[i].orbital_period + "</td>";
    myTable+="<td style='width: 100px;'>" + results[i].diameter + "</td>";
    myTable+="<td style='width: 100px;'>" + results[i].climate + "</td>";
    myTable+="<td style='width: 100px;'>" + results[i].gravity + "</td>";
    myTable+="<td style='width: 100px;'>" + results[i].terrain + "</td>";
    myTable+="<td style='width: 100px;'>" + results[i].surface_water + "</td>";
    myTable+="<td style='width: 100px;'>" + results[i].population + "</td></tr>";
  }
   myTable+="</table>";

   document.getElementById('tablePrint').innerHTML = myTable;
