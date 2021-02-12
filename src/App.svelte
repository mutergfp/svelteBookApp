<script>
  import { Router, Link, Route } from "svelte-routing";
  import "@material/mwc-button";
  import "@material/mwc-icon-button";
  import "@material/mwc-top-app-bar";
  import DB from "./DB.svelte";
  import Home from "./routes/Home.svelte"
  import Delete from "./routes/Delete.svelte"
  import Edit from "./routes/Edit.svelte"
  import Add from "./routes/Add.svelte"
  let books = []
  let db = null
  let idBook= null
  export let url = ""
</script>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
<main>
  <DB bind:this={db} bind:documents={books} initsrc="./books.json" collection="books"/>
  <Router url="{url}">
    <!-- On bind les routes aux composants-->
    <div>
      <!-- <Route path="edit" component="{Edit}" /> -->
      <Route path="add"><Add {db}/></Route>
      <Route path="delete"><Delete {db} {idBook} /></Route>
      <Route path="edit"><Edit {db} {idBook}/></Route>
      <Route path="/"><Home {books} bind:idBook={idBook}/></Route>
    </div>
  </Router>
</main>
