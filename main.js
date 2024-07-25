// loading
$(document).ready(function(e){

    $('#loading').fadeOut(1500 ,function(){
        $('body').css({'overflow':'visible'})
    })
})

$('.link').click(function(){
    var thisClass=$(this).attr('href')
    var top=$(thisClass).offset().top
    $('html , body ').animate({ 
        scrollTop: top
    },2000); 
});
var allData=[]
async function myFilm(){
var myData =await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44')
var response =await myData.json()
allData=response.results
console.log(allData[0].vote_count);
displayData()
console.log(allData);
}
myFilm()
var iconPath=allData.backdrop_path
var imageUrl = `https://image.tmdb.org/t/p/w500${iconPath}`;
var base='https://image.tmdb.org/t/p/w500'
function displayData(){
        var box=""
for(var i=0;i<allData.length;i++){

var math =Math.floor(allData[i].vote_average*10)/10
        box +=`  
        <div class="content">
            <img src="${base + allData[i].poster_path}" alt="mmmmmmm">
            <div class="hovers">
            <h1>${allData[i]. title || allData[i].name}</h1>
            <P>${allData[i].overview}</P>
            <h4>  Release_date :${allData[i].release_date || allData[i].first_air_date}</h4>
            <span>${math}</span>
            

            </div>
        </div>`

}

console.log();
document.getElementById('demo').innerHTML=box
}

// ***********************************search ********************************//
var search=document.getElementById('search')

search.addEventListener('input',function(){
    var x=''
    var term=search.value
    for(var i=0;i<allData.length;i++){
        var math =Math.floor(allData[i].vote_average*10)/10
        if(allData[i]. title || allData[i].name.toLowerCase().includes(term.toLowerCase())==true){
            x +=`  
            <div class="content">
            <img src="${base + allData[i].poster_path}" alt="mmmmmmm">

                <div class="hovers">
                    <h1>${allData[i]. title || allData[i].name}</h1>
                    <P>${allData[i].overview}</P>
                    <h4>  Release_date :${allData[i].release_date }</h4>
                    <span>${math}</span>
                </div>
            </div>`
        }

        document.getElementById('demo').innerHTML=x

    }


})

$('.close ').click(function(){
    let sideWidth=$('.box').outerWidth();
    let optionLeft=$('.optionSide').offset().left;
        if(optionLeft===0){
            $('.optionSide').css({left:`-${sideWidth}px` ,transition:'left 1s', function(){
                $('.box-top').slideUp(500)
            }});
            $('.close').removeClass('fa-xmark').addClass('fa-align-justify');

        }
        else if(optionLeft!==0){

                $('.optionSide').css({left:`0` ,transition:'left 1s' , function(){
                    $('.box-top').slideDown(1500)
                }});
                $('.close').removeClass('fa-align-justify').addClass('fa-xmark');   

        }

})

// ***********************************************regex**********************************//

// regex name 
    var names = document.getElementById('name');
    names.addEventListener('input',function(){
        var regex = /^[A-Za-z]+$/;
        console.log(regex);
            if(regex.test(names.value) || names.value==0) {
            document.getElementById('nameP').innerHTML=""
        $(this).css('border-bottom', ' rgb(106, 104, 104) 2px solid');
    } 
    else {
        document.getElementById('nameP').innerText="invalid name, only characters allowed"
        $(this).css('border-bottom', '2px solid rgb(214, 46, 51)');
    }
    })
    // regex email 
    var email =document.getElementById('email')
    email.addEventListener('input',function(){
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(emailRegex.test(email.value) || email.value==0) {
            document.getElementById('emailP').innerHTML=""
        $(this).css('border-bottom', ' rgb(106, 104, 104) 2px solid');
    } 
    else {
        document.getElementById('emailP').innerText="invalid Email, try example@domain.com"
        $(this).css('border-bottom', '2px solid rgb(214, 46, 51)');
    }
    })
    // regex phone 
var phone=document.getElementById('phone')
phone.addEventListener('input',function(){
    var phoneRegex = /^01[0125][0-9]{8}$/;
        if(phoneRegex.test(phone.value) || phone.value==0) {
        document.getElementById('phoneP').innerHTML=""
    $(this).css('border-bottom', ' rgb(106, 104, 104) 2px solid');
} 
else {
    document.getElementById('phoneP').innerText="invalid Phone Number"
    $(this).css('border-bottom', '2px solid rgb(214, 46, 51)');
}
})
// regex age
    var age=document.getElementById('age')
    age.addEventListener('input',function(){
        var ageRegex = /^(1[7-9]|[2-9]d+)$/;
            if(ageRegex.test(age.value) || age.value==0) {
            document.getElementById('agesP').innerHTML=""
        $(this).css('border-bottom', ' rgb(106, 104, 104) 2px solid');
    } 
    else {
        document.getElementById('agesP').innerText="Your age must be over 16+"
        $(this).css('border-bottom', '2px solid rgb(214, 46, 51)');
    }
    })
    var password=document.getElementById('password')
    password.addEventListener('input',function(){
        var passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$/
            if(passwordReg.test(password.value) || password.value==0) {
            document.getElementById('passwordP').innerHTML=""
        $(this).css('border-bottom', ' rgb(106, 104, 104) 2px solid');
    } 
    else {
        document.getElementById('passwordP').innerText="Password must contain numbers & Letters at least 8 Characters"
        $(this).css('border-bottom', '2px solid rgb(214, 46, 51)');
    }
    })
    var rePassword=document.getElementById('repassword')
    rePassword.addEventListener('input',function(){
        if(password.value==rePassword.value){
            document.getElementById('passwordP').innerHTML=""
        $(this).css('border-bottom', ' rgb(106, 104, 104) 2px solid');        }
        else{
            document.getElementById('passwordP').innerText="Password not match"
            $(this).css('border-bottom', '2px solid rgb(214, 46, 51)');        }
    })

$('.arrow').click(function(){ 
    $('html , body ').animate({ 
        scrollTop: 0 
    },1500); 
});

