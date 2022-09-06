let toggle=document.getElementById("mode");

toggle.addEventListener('click',()=>{
  document.body.classList.toggle('mylight');
})

function loadCoupon(){
  document.getElementById('coupon').style.display="block";
  document.getElementById('cf').style.opacity="0.5";
  document.getElementById('footer').style.opacity="0.5";
}

const closeCoupon = () => {
  document.getElementById('coupon').style.display="none";
  document.getElementById('cf').style.opacity="1";
  document.getElementById('footer').style.opacity="1";
}