console.log(1);
const lists=  document.getElementsByClassName("item") ;

const left_container =   document.getElementById("left") ;

const right_container = document.getElementById("right") ;


for( list of lists){
    // console.log(list) ;
    list.addEventListener('dragstart',function(event){
       let selected =  event.target ;
       

        right_container.addEventListener('dragover',function(e){
            e.preventDefault;
        })
        right_container.addEventListener('drop',function(e){
            right_container.appendChild(selected) ;
            selected = null ;
        })


        left_container.addEventListener("dragover",function(e){
            e.preventDefault;
        })
        left_container.addEventListener("drop",function(e){
        left_container.appendChild(selected) ;
            selected = null ;
        })

    })
}

