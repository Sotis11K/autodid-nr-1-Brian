 
 $(document).ready(function(){

    allUsers =[];
    $.getJSON('assets/people.json', function(datas) {
        allUsers = datas;
    });
    var maxLength = 0;
    $(".click").click(function(event){

        

        if(maxLength == 1){
            return
        }  
        else if(maxLength < 1){
                $.each(allUsers, function(i, user){
                $('.container').append("<div class='container-images'></div>");
                $('.container-images').eq(i).append('<img src="assets/img.jpg"></img><br>');
                $('.container-images').eq(i).append('ID: '+user.ID+'<br>');
                $('.container-images').eq(i).append('Name: '+user.name+'<br>');
                $('.container-images').eq(i).append('Company: '+user.company+'<br>');
                $('.container-images').eq(i).append('Email: '+user.email+'<br>');
                $('.container-images').eq(i).append('Country: '+user.country+'<br>');
                $('.container-images').eq(i).append('Job: '+user.jobTitle+'<br>');
                $('.container-images').eq(i).append('Favorite fruit: '+user.favoriteFruit+'<br>');
                maxLength++;


            
        }

    )}


    });
    
})
    



 




