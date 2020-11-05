
window.addEventListener("load", function(){
// your code
    var username = localStorage.getItem("username");
    document.getElementById("user").innerHTML = "Welcome " + username + "!";
    var resetValue = "";
    //localStorage.setItem("username", resetValue);
    //alert(username);

    function injectorReview(){
        var rating = document.getElementById('rating').value;
        var comment = document.getElementById('comment').value;

        alert(rating + " Inside injectorReview " + comment);
        document.getElementById('reviewDiv').innerHTML="<div style='Background-color: white;'><p><strong>Rating:</strong> "+rating+"/5</p><br><p>"+comment+"</p><br><p><strong>Submited by:</strong> "+username+"</p><br></div>";
    }

    var data;
    function getanswer(q){

    var hide = document.getElementById('imagePeak');
    hide.style.display = "none";

    $.get("https://www.omdbapi.com/?s="+q+"&apikey=3a5efff2", function(rawdata){
    var rawstring =JSON.stringify(rawdata);
    data =JSON.parse(rawstring);
    //console.log(data);
    var title = data.Search[0].Title;
    var year = data.Search[0].Year;
    var rated = data.Search[0].Rated;
    var genre = data.Search[0].Genre;
    var runtime = data.Search[0].Runtime;
    var director = data.Search[0].Director;
    var imdburl="https://www.imdb.com/title/"+data.Search[0].imdbID+"/";

    var posterurl =data.Search[0].Poster;

    //document.getElementById('answer').innerHTML="<div class='panel panel-primary' style='width: 60%;><div class='panel-heading' style='background-color: #0099cc;'><h1>"+title+"</h1></div><div class='panel-body'><table><tr><td rowspan='2'><img src= '"+posterurl+"' width='40%'></td><td><p style='font-size: 150%;'><strong>Year Released: </strong>"+year+"</p></td></tr><tr><td><p style='font-size: 150%;'><strong>IMDB Page: </strong><a href='"+imdburl+"'target='_blank'>"+imdburl+"</a></p></td></tr></table><br><button class='btn btn-primary btn-block' id='addReview' data-toggle='modal' data-target='#reviewWindow'>Add Review</button><br><h3>Reviews:</h3><hr><p><strong>Rating:</strong> 3/5</p><br><p>I thought the movie was okay but there are better movies out there for sure.</p><br><p><strong>Submited by:</strong> ZCollins</p><hr><br><p><strong>Rating:</strong> 4/5</p><br><p>This movie was weird but awesome.</p><br><p><strong>Submited by:</strong> ARoberts</p><hr><br></div></div>"; });

    document.getElementById('answer').innerHTML="<div class = 'movieDisplayContainer'><h1 style='padding-top: 2%; padding-bottom: 2%; color: white;'><strong>"+title+"</strong></h1><div class='movieDisplayMid'><table><tr><td rowspan='2'><img src= '"+posterurl+"' width='60%'></td><td><p style='font-size: 150%;'><strong>Year Released: </strong>"+year+"</p></td></tr><tr><td><p style='font-size: 150%;'><strong>IMDB Page: </strong><a href='"+imdburl+"'target='_blank'>"+imdburl+"</a></p></td></tr></table><br><br><br><button class='btn btn-primary btn-block' id='addReview' data-toggle='modal' data-target='#reviewWindow'>Add Review</button><br><h3>Reviews:</h3><hr><p><strong>Rating:</strong> 3/5</p><br><p>I thought the movie was okay but there are better movies out there for sure.</p><br><p><strong>Submited by:</strong> ZColl</p><hr><br><p><strong>Rating:</strong> 4/5</p><br><p>This movie was weird but awesome.</p><br><p><strong>Submited by:</strong> ARob</p><hr><br><div id='reviewDiv'> </div></div></div>"; });
    }

    var data;
    function getImage(q){

    var hide = document.getElementById('imagePeak');
    hide.style.display = "block";

    $.get("https://www.omdbapi.com/?s="+q+"&apikey=ba1f4581", function(rawdata){
    var rawstring =JSON.stringify(rawdata);
    data =JSON.parse(rawstring);
    var title = data.Search[0].Title;
    var year = data.Search[0].Year;
    var imdburl="https://www.imdb.com/title/"+data.Search[0].imdbID+"/";

    var posterurl =data.Search[0].Poster;
    document.getElementById('imagePeak').innerHTML="<img src= '"+posterurl+"' width='25%'><br>"; });
    }

});
