var linkedimg=document.getElementsByClassName("item-img")
var lightboxitem=document.getElementById("lightbox-item");
var lightboxcontainer=document.getElementById("lightbox-container");
var nextt=document.getElementById("next");
var prev=document.getElementById("previous");
var arr=[];
var count=0;
var clo=document.getElementById("close");
var arr2=[];
//console.log(lightboxcontainer


var http= new XMLHttpRequest();
http.open("Get" ,"https://jsonplaceholder.typicode.com/posts");
http.send();
http.addEventListener("readystatechange",function(){

    if(http.readyState == 4 && http.status == 200){
       arr2=JSON.parse( http.response);
       console.log(arr2);
       displayy();
    }
    
})
function displayy() {
    var cartoona=``;
    for (let i = 0; i < arr2.length; i++) {
        cartoona +=`<div class="col-lg-3">
        <h3>`+arr2[i].title+`</h3>
         
        <p>`+arr2[i].body+`</p>
         </div>` ;
        
        
        
    }
 document.getElementById("sss").innerHTML=cartoona;

    
}

for(var i=0 ; i<linkedimg.length ;i++){
            arr.push(linkedimg[i]);
            
            

    
            arr[i].addEventListener("click" , function(e){

                count=arr.indexOf(e.target);

                lightboxcontainer.style.display="flex";
                var imgsrc=e.target.getAttribute('src');
            
                  
                  lightboxitem.style.backgroundImage="url("+imgsrc+")";
                  


            
            })

            
        }
        

        function next(){
            count++;
            

            lightboxitem.style.backgroundImage="url("+arr[count].getAttribute('src')+")"

           
        }
        nextt.addEventListener("click" , next);



        function prevv(){

            count--
            lightboxitem.style.backgroundImage="url("+arr[count].getAttribute('src')+")"
        }

        prev.addEventListener("click" , prevv);


        function cloo(){

            lightboxcontainer.style.display="none";


        }
        clo.addEventListener("click" , cloo);


       /* lightboxcontainer.addEventListener("click" , function(e){

            if(e.target!= lightboxitem)

           { lightboxcontainer.style.display="none";}



        })*/







        var http=new XMLHttpRequest;
        http.open("get","")




    


    


    
