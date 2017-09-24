//When button is pressed then data is showed

// $('button').click(function(){
$('#search').keyup(function(){  
var value=$('#search').val();
var val=new RegExp(value,"i");

$.getJSON('data.json',function(data){
    
    var output='<ol>';
    $.each(data,function(index,value){
        
        if(value.name.search(val) != -1)
        {
            output += '<li>';
            output += '<h4>'+ value.name +'</h4>';
            output += '<img src="images/'+ value.shortname +'_tn.jpg" alt="'+ value.name +'" />';
            output += '<p>'+ value.bio +'</p>';
            output += '</li>';
        }
    });
    output +="</ol>";
    $('#update').html(output);
});
});