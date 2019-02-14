$('#test').on('click',function(){
    alert('test');
    returnAll(1);

})

function returnAll(result){

              var content = '<table id = "alleSpelers" class="table table-bordered table-striped table-hover table-condensed">';
             content += '<thead id = tableHeader>';
             content += '<tr> <th> Speler ID </th>';
             content += '<th> Naam </th>';
             content += '<th> Geboortedatum </th>';
             content += '<th> Gewonnenpartijen </th>';
             content += '<th> Verlorenparijen </th>';
             content += '<th> Gelijkspel </th>';
             content += '</thead>';
             content += '<tbody id = "tablebody">';

//            $.each(result, function (index, result) {
//
//                 content += "<tr id = 'spelerRow'>";
//                 content += "<td style='cursor: pointer;' id='verander'> " + result.id + "</td>";
//                 content += '<td>' + result.voornaam + ' ' + result.tussenvoegsel + ' '+ result.achternaam+ '</td>';
//                 content += "<td>" + result.geboortedatum + "</td>";
//                 content += "<td>" + result.gewonnenPartijen + "</td>";
//                 content += "<td>" + result.verlorenPartijen + "</td>";
//                 content += "<td>" + result.remises+ "</td>";
//                 content += "</tr>";
//})
//             content += '</tbody> </table> <div class = "row"></div>';

             $("#alleSpelersDiv").html(content);
             $('#alleSpelers').DataTable();
            }

