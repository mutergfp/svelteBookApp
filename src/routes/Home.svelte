<script>
    import { Router, Link, Route } from "svelte-routing";
    import "@polymer/paper-card";
    import Header from "../component/header.svelte"
    export let books = [];
    export let idBook = null
    let pageTitle = "BookAPP - Accueil";

    $: if(books){
      console.log(books)
    }

  
</script>

<style>
    paper-card {
      width: 100%;
      margin-top: 3px;
      margin-bottom: 3px;
    }
  
    .card-info{
      display:flex;
      justify-content: space-between;
    }
  
    mwc-icon-button{
      margin-right: 2em;
      --mdc-icon-size: 50px;
    }
</style>

<Header title={pageTitle} ></Header>
{#each books as book}
    <paper-card heading={book.title}>
    <div class="card-info">
        <div>
            <img src="data:image/jpeg;base64, {book.img.data}" alt="{book.title}" title="{book.title}"/>
            <div class="card-content">
            Ecrit par {book.author} au prix de {book.price}
            </div>
        </div>
        <div class="card-action">
          <nav>
            <Link to="delete/{book._id}"><mwc-icon-button icon="delete"></mwc-icon-button></Link>
            <Link to="edit/"><mwc-icon-button icon="edit" onclick="{() => {idBook = book._id}}"></mwc-icon-button></Link>
          </nav>
        </div>
    </div>
    </paper-card>
{/each}