import { serve } from "https://deno.land/std@0.125.0/http/server.ts";

console.log("http://localhost:8000/");


//  Hola mundo con deno en Typescript
serve((req) => new Response("Hello World by Typescript\n"), { port: 8000 });

// Peticion Fecht a PokeApi
window.fetch('https://pokeapi.co/api/v2/pokemon/5')
    .then(response => response.json())
    .then(data => {

        localStorage.setItem('name', data.name);


    });
