// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {
  
    // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
window.onload = function() {
    var tl = new TimelineMax();//no repeat

    // first page
    tl.to(".text", 5,{ autoAlpha: 1,  
    scale: 1 , 
    transformOrigin: 'center center', 
    stagger: 0.1  });
    tl.to(".image",.5,{ease: Power1.out,
        stagger: 1.5});

    // second page
    tl.from(".container2",{autoAlpha:0})
    tl.from(".product",{ duration: 0.75,
        y: 10, autoAlpha: 0, ease: Power3.out,
        stagger: 1.5})
    tl.from(".button",{ duration: 0.75,
        y: 5, autoAlpha: 0, ease: Power3.out,
        stagger: 1.5})
    tl.to(".text3",1,{ autoAlpha: 0})
    tl.to(".text2",1,{ autoAlpha: 1})
    tl.to(".button",1,{autoAlpha:1})
    tl.to(".product",3,{ autoAlpha: 1})
    tl.to(".text2",1,{ autoAlpha: 0})
    tl.to(".text3",0.3,{ autoAlpha: 1})
    tl.to(".product",0.2,{css:{rotation:3,transformOrigin:"50% 50%"} ,ease:Power2.easeOut });
    tl.to(".product",0.3,{css:{rotation:-3,transformOrigin:"50% 50%"} ,ease:Power2.easeOut});
    tl.to(".product",1,{css:{rotation:0,transformOrigin:"50% 50%"} ,ease:Power2.easeOut});

    
 }
    
})


