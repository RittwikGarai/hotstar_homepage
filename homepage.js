/*---------LightDark----------*/ 
let toggle=document.getElementById("mode");

toggle.addEventListener('click',()=>{
  document.body.classList.toggle('mylight');
})


/*--- Coupon-----------*/ 
function loadCoupon(){
    document.getElementById('coupon').style.display="block";
    document.getElementById('cf').style.opacity="0.5";
    document.getElementById('details').style.opacity="0.5";
  }
  
  const closeCoupon = () => {
    document.getElementById('coupon').style.display="none";
    document.getElementById('cf').style.opacity="1";
    document.getElementById('details').style.opacity="1";
  }


/**--------------Geo Location and Weather--------------- */
let x = document.getElementById('out');
let y = document.getElementById('weather');
let z = document.getElementById('location');
function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText= "Geo Not Supported"
    }
}

function showPosition(data){
    console.log(data)
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
   
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    //api calling
    fetch(url,{method:'GET'})
    //return promise
    .then((res) => res.json())
    // resolve the promise
    .then((data) => {
        z.innerText = `${data.city.name}`
        y.innerText = `${data.list[0].temp.day} °C`
    })

}