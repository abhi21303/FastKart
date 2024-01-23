const slides = document.querySelectorAll(".slideimg")
var counter = 0;

slides.forEach(
    (slide, index)=>{
        slide.style.left =  `${index * 100}%`
    }
    
    )
    const prev=()=>{
        if(counter!=0){
            counter--
            slideImage()
        }
    }
    const next=()=>{
        if(counter<slides.length-1){
        
            counter++
            slideImage()
        }
    }
    const slideImage=()=>{
        slides.forEach(
            (slide)=>{
                slide.style.transform = `translateX(-${counter * 100}%)`
            }
        )
    }
    