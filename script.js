//  setTimeout(function(){ 
//     document.getElementById("advertisingBtn").click();
//  }, 3000);

const scrolls = document.querySelectorAll("a[href*='#']")
for ( let scroll of scrolls){
    scroll.addEventListener('click',function(scrolling){
      scrolling.preventDefault()
      const blockId = scroll.getAttribute("href")
      document.querySelector('' + blockId).scrollIntoView({
        behavior:'smooth', block:"start"
      })
    })
}