//script.js//

let container = document.querySelector('.container');
let squares16 = document.querySelector('#squares16');
let squares64 = document.querySelector('#squares64');
let squares100 = document.querySelector('#squares100');

let red = document.querySelector('#red');
let orange = document.querySelector('#orange');
let yellow = document.querySelector('#yellow');
let green= document.querySelector('#green');
let blue = document.querySelector('#blue');
let purple=document.querySelector('#purple');
let rainbow= document.querySelector('#rainbow');
let white=document.querySelector('#white');

//button 16X16 grid
squares16.addEventListener('click',()=>{
    container.innerHTML="";
    for (let i=0;i<256;i++){
            let box=document.createElement('div');
            box.style.backgroundColor="white";
            
            box.style.width="31px";
            box.style.height="32px";
            container.appendChild(box);
        
       
        yellow.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#fff020";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })
        blue.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#3363ff";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })

        green.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#3edf4b";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })

        orange.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#fe9000";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })

        red.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#fd004c";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })
        white.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#ffffff";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })
        purple.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#b102b7";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })


        rainbow.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor=randomColor();
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })

        
    }
    
})
 
//Default 16X16 grid with no boxes filled

window.addEventListener('load',()=>{
    for (let i=0;i<256;i++){
        let box=document.createElement('div');
        box.style.backgroundColor="white";
        box.style.width="31px";
        box.style.height="32px";
        container.appendChild(box);     
    }
})


//64X64 grid

squares64.addEventListener('click',()=>{
    container.innerHTML="";
    for (let i=0;i<4092;i++){
        let box=document.createElement('div');

        box.style.backgroundColor="white";
        box.style.width="7.55px";
        box.style.height="8.1px";
        container.appendChild(box);

        yellow.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#fff020";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })

        red.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#fd004c";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })

        orange.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#fe9000";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })

        blue.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#3363ff";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })
        green.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#3edf4b";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })
        white.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#ffffff";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })
        purple.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#b102b7";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })
        rainbow.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor=randomColor();
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })

    }
})

//100X100 grid
squares100.addEventListener('click',()=>{
    container.innerHTML="";
    for (let i=1;i<9997;i++){
        let box=document.createElement('div');

        box.style.backgroundColor="white";
        box.style.color="white";
        box.style.width="5.1px";
        box.style.height="5.1px";
        container.appendChild(box);

        yellow.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#fff020";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })

        red.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#fd004c";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })

        orange.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#fe9000";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })

        blue.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#3363ff";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })
        green.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#3edf4b";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })
        white.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#ffffff";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })
        purple.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor="#b102b7";
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })
        rainbow.addEventListener('click',()=>{
            box.addEventListener('mouseover',()=>{
                box.style.backgroundColor=randomColor();
                box.style.transitionDuration="2s"; 
            
            })
            box.addEventListener('mouseleave',()=>{
                box.style.transitionDuration="50s"
             })

        })


    }
})




//Function to create random colors from an array
randomColor()
function randomColor(){
    let array=['#fd004c','#fe9000','#fff020','#3edf4b','#3363ff','violet','indigo'];
    
    return (array[(Math.floor(Math.random()*array.length))])
        
}




   
    




