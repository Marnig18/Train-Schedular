
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
</head>

<body>
<script type="text/javascript">


var parameters = $.param({
    api_key : "9jcmruut6uygxzfd399dh5bd",
    query : "running",
    category: "event",
    state: "CA",
    radius: "50",
    per_page:"1",
    start_date: "2017-06-09.."
})



$.ajax({
	url: "https://active-access-app.herokuapp.com/v2/search?" + parameters
	method:"get"
}).done(function(response){
	console.log(response)
});


</script>
</body>
</html>


