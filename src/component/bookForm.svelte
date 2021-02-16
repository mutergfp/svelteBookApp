<script>
import { onMount } from 'svelte';
import { navigate } from "svelte-routing";
import "@polymer/paper-card";
import "@material/mwc-button";
import "@material/mwc-icon-button";
import "@material/mwc-top-app-bar";
//export let id;
export let book;
export let db
export let buttonTitle;
let files

$: if(book){
    console.log('book', book)
}

onMount(
    () => {
        if(book == {}){
            book = {
                "author": "",
                "url": "",
                "price": "",
                "title": "",
            }
        }
    }
);

async function saveData(){
    if(files){
        book.img.content_type = files[0].type
        book.img.filename = files[0].name
        book.img.path = 'images/'+files[0].name
        await dataImage()
    }
    if(book._id){
        db.edit(book)
    }else{
        db.add(book)
    }
    navigate('/')
}

async function dataImage(){
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.addEventListener("load", async function () {
            console.log("loading image")
            book.img.data = reader.result.split(",")[1]
            return resolve(book.img.data)

        })
        reader.readAsDataURL(files[0])
    })
    
}
</script>
  
<style>

</style>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<form>
    <input bind:value={book.title} placeholder="Titre" />
    <input bind:value={book.author} placeholder="Auteur" />
    <input bind:value={book.price} placeholder="Prix du livre" />
    <input bind:value={book.url} placeholder="URL Amazon du livre" />
    <input bind:files accept="image/png, image/jpeg" type="file" placeholder="Prix du livre" />
    <button type="button" on:click={saveData} >{buttonTitle}</button>
</form>