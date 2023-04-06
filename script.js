onload = () => {
    let key1 = "1cf90c94a80626f94d22ecfd488fdd0b"
    let key2 = "45730d5ca9c3c22953c5d100544b1a79b63ef9177667499e1b262677"
    let city,url
    $("#city").on("input",()=>{
       city = $("#city").val().trim()
    })
    $.getJSON('https://api.ipdata.co?api-key=' + key2, function(data1) {
        city = JSON.stringify(data1.region).slice(1,-1)
        url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+key1+"&units=metric"
     async function getWeather(){
     $(".loader").show()
     $(".con").html("")
     $(".city").html("")
     $(".icon").attr("src","")
     $(".temp").html("")
     try{
     const resp = await fetch(url)
     const data = await resp.json()
     $(".city").html(data.name)
     $(".temp").html(data.main.temp+" C°")
     $(".con").html(data.weather[0].main)
    $(".icon").attr("src","https://openweathermap.org/img/w/"+data.weather[0].icon+".png")
     $(".loader").hide()
     }
     catch(err){
         //console.table("Enter valid location")
         $(".temp").html("Enter valid location")
         $(".con").html("")
         $(".city").html("")
         $(".icon").attr("src","")
         $(".loader").hide()
     }
     }
     getWeather()
    $("#btn").click(()=>{
        $("#city").val("")
        url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+key1+"&units=metric"
        getWeather()
    })
    })
    }