$(document).ready(function(){

    //click event for city search
    $("#search-btn, #searched").on("click", function(){
        console.log(this);
        let clickBtn = $(event.target)[0];
        let city = "";
        if (clickBtn.id === "search") {
            city = $("#search").val().trim().toUpperCase();
            console.log(this)
        } else if( clickBtn.classname === ("#searched")){
            city = clickBtn.innerText;
        }
        if( city == "") return;

        updateLocalStorage(city);
        getCurrentWeather(city);
        getForcastWeather(city);
        console.log(this)
    })

    function convertDate(UNIXtimestamp){
        let convertDate = "";
        let a = new Date(UNIXtimestamp * 1000);
        let months = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        convertDate = month + " " + date + ", " + year;
        return convertDate;
        console.log(this)
    }

    

})



//create a function that will connect to the api

//creat a button function that will exicute the search

//creat a function to populate text

//create a function that will populate the 