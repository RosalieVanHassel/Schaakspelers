//$('#toonAlleSchakers').on('click',function(){
$(document).ready(function(){
    getAlleSchakers();

})
 function getAlleSchakers(){
    $.ajax({
            type:'get',
            url: '/alleSchakers',
            success: function(result) {
                console.log(result);
                returnAll(result);
            }
        });
}
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

            $.each(result, function (index, result) {

                 content += "<tr id = 'spelerRow'>";
                 content += "<td style='cursor: pointer;' id='verander'> " + result.id + "</td>";

                 if(result.tussenvoegsel == null){
                 content += '<td>' + result.voornaam + ' ' + result.achternaam+ '</td>';
                 }else{
                 content += '<td>' + result.voornaam + ' ' + result.tussenvoegsel + ' '+ result.achternaam+ '</td>';
                 }

                 content += "<td>" + result.geboortedatum + "</td>";
                 content += "<td>" + result.gewonnenPartijen + "</td>";
                 content += "<td>" + result.verlorenPartijen + "</td>";
                 content += "<td>" + result.remises+ "</td>";
                 content += "</tr>";
})
             content += '</tbody> </table> <div class = "row"></div>';

             $("#alleSpelersDiv").html(content);
             $('#alleSpelers').DataTable();
            }
//
//$('#voegToe').on('click',function(){
//    var content = '<form id="formId"><label>Voornaam</label><input id="voornaam" value="Piet" type="text"><br>'
//    content += '<label>Tussenvoegsel</label><input id="tussenvoegsel"  value="Piet" type="text"><br>'
//    content += '<label>Achternaam</label><input id="achternaam"  value="Piet" type="text"><br>'
//    content += '<label>Geboortedatum</label><input id="geboortedatum"  value="1989-10-22" type="date"><br>'
//    content += '<label>Spellen gewonnen</label><input id="gewonnen"  value="3" type="text"><br>'
//    content += '<label>Spellen verloren</label><input id="verloren"  value="4" type="text"><br>'
//    content += '<label>Gelijkspel</label><input id="gelijkspel"  value="4" type="text"><br>'
//    content += '<input id="confirmNewGuest" type="submit" value = "Submit"/>'
//    //content += '<button id="submitSpeler" type="submit">Voeg toe</button></form>'
//
//    $("#voegToeDiv").html(content);
//    console.log(document.getElementById('voornaam').value);
//      //submitFunction();
//})


//$(document).ready(function(){
//    document.getElementById('formId').hide()
//})


$("#formId").submit(function () {
     var nieuweSpelerForm = $(this).serializeArray();
     var nieuweSpeler = {};
    $(nieuweSpelerForm).each(function(i, field) {
        nieuweSpeler[field.name] = field.value
    });
   console.log(nieuweSpeler);


        $.ajax({
            type: "POST",
            url : "/voegSpelerToe",
            data : JSON.stringify(nieuweSpeler),
            contentType: "application/json; charset=utf-8", // this
            dataType: "json", // and this
            success : function(result) {

            }

        });
getAlleSchakers();



})
//
//function submitFunction(){
//    $('#submitSpeler').on('click',function(){
// alert('hoi')
//alert('nieuw speler'+document.getElementById('voornaam').value );
//
//})}