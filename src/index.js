/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


 const url= "https://platzi-avo.vercel.app/api/avo";

 window
 .fetch(url)
 .then((respuesta) => respuesta.json())
 .then((responseJson) => {
     responseJson.data.array.forEach((item) => {
 
         const imagen = document.createElement("img");
        
 
         const title = document.createElement("h2");
         document.body.appendChild(title);
 
         const price = document.createElement("div");
         document.body.appendChild(price);
         
         console.log(item.name);  
     });
  
 });
