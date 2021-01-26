<script>
    import { Router, Link, Route } from "svelte-routing";
    import DB from "../DB.svelte";
    import "@polymer/paper-card";
    import Header from "../component/header.svelte"
    let books = [];
    let pageTitle = "BookAPP - Accueil";
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
<DB bind:documents={books} initsrc="./books.json" collection="books"/>
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
            <Link to="delete"><mwc-icon-button icon="delete"></mwc-icon-button></Link>
            <Link to="edit"><mwc-icon-button icon="edit"></mwc-icon-button></Link>
          </nav>
        </div>
    </div>
    </paper-card>
{/each}