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
             content += '<th>  </th>';
             content += '<th> Verlorenparijen </th>';
             content += '<th>  </th>';
             content += '<th> Gelijkspel </th>';
             content += '<th>  </th>';
             content += '<th> Delete </th>';
             content += '</thead>';
             content += '<tbody id = "tablebody">';

            $.each(result, function (index, result) {
                    var spelerId = result.id
                 content += "<tr id = 'spelerRow'>";
                 content += "<td style='cursor: pointer;' id='verander'> " + result.id + "</td>";

                 if(result.tussenvoegsel == null){
                    content += '<td>' + result.voornaam + ' ' + result.achternaam+ '</td>';
                 }else{
                    content += '<td>' + result.voornaam+' '+result.tussenvoegsel+' '+result.achternaam+'</td>';
                 }

                 content += "<td>" + result.geboortedatum + "</td>";
                 content += "<td>" + result.gewonnenPartijen + "</td>";
                 content += "<td><button id='gewonnen'>+</button></td>"
                 content += "<td>" + result.verlorenPartijen + "</td>";
                 content += "<td><button id='verloren'>+</button></td>"
                 content += "<td>" + result.remises+ "</td>";
                 content += "<td><button id='gelijkspel'>+</button></td>"
                 content += "<td><button id='deleteButton' >X</button></td>";
                 content += "</tr>";

        })
             content += '</tbody> </table> <div class = "row"></div>';

             $("#alleSpelersDiv").html(content);
             $('#alleSpelers').DataTable();
}

$("#formId").submit(function () {
     var nieuweSpelerForm = $(this).serializeArray();
     var nieuweSpeler = {};
    $(nieuweSpelerForm).each(function(i, field) {
        nieuweSpeler[field.name] = field.value
    });
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

$(document).on('click','#deleteButton',function(){
if (confirm('Weet je het zeker dat je deze speler wilt verwijderen?')) {
    var idOfDelete =this.parentElement.parentElement.querySelector('#verander').innerText
        jQuery.ajax({
            url: '/spelerdelete/' + idOfDelete,
            type: 'DELETE',
            success: function() {
getAlleSchakers();
            }
        });
        }
})

$(document).on('click', '#gewonnen', function () {
    var idForChange =this.parentElement.parentElement.querySelector('#verander').innerText
    $.ajax({
        type: 'put',
        url: '/speleraanpassen/win/' + idForChange,
        success: function () {
            getAlleSchakers();
        }
    });
});

$(document).on('click', '#verloren', function () {
    var idForChange =this.parentElement.parentElement.querySelector('#verander').innerText
    $.ajax({
        type: 'put',
        url: '/speleraanpassen/verlies/' + idForChange,
        success: function () {
            getAlleSchakers();
        }
    });
});
$(document).on('click', '#gelijkspel', function () {
    var idForChange =this.parentElement.parentElement.querySelector('#verander').innerText
    $.ajax({
        type: 'put',
        url: '/speleraanpassen/gelijk/' + idForChange,
        success: function () {
            getAlleSchakers();
        }
    });
});