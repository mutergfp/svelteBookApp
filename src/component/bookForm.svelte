<script>
import DB from "./../DB.svelte";
import { onMount } from 'svelte';
import "@polymer/paper-card";
import "@material/mwc-button";
import "@material/mwc-icon-button";
import "@material/mwc-top-app-bar";
let book;

$: if(book){
    console.log(book)
}

onMount(
    () => {
        if(!book){
            book = {
                "author": "",
                "url": "",
                "_id": "",
                "price": "",
                "title": "",
                "img": {
                    "content_type": "",
                    "filename": "",
                    "data": "",
                    "path": ""
                }
            }
        }
    }
);

/*function saveImage(){
    console.log(image)
}*/
</script>
  
<style>

</style>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<form>
    <input bind:value={book.title} placeholder="Titre" />
    <input bind:value={book.author} placeholder="Auteur" />
    <input bind:value={book.price} placeholder="Prix du livre" />
    <input bind:value={book.url} placeholder="URL Amazon du livre" />
    <input bind:value={book.img} accept="image/png, image/jpeg" type="file" placeholder="Prix du livre" />
</form>