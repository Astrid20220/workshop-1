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
        //url imagen
        //imagen.className =
           // "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
        imagen.src = `${baseUrl}${item.image}`;
        //crear titulo
        const title = document.createElement("h2");
        title.className = 'text-xl text-blue-900';
        title.textContent = item.name;

        //crear precio
        const price = document.createElement("div");
        price.textContent = formatPrice(item.price);

        const taste = document.createElement("p");
        taste.textContent = item.sku;

        const container = document.createElement("div");
        container.append(imagen, title, price, taste);

        todosLosItems.push(container);
    });

    appNode.append(...todosLosItems);
})
