<script>
  import { Router, Link, Route } from "svelte-routing";
  import "@material/mwc-button";
  import "@material/mwc-icon-button";
  import "@material/mwc-top-app-bar";
  import Home from "./routes/Home.svelte"
  import Delete from "./routes/Delete.svelte"
  import Edit from "./routes/Edit.svelte"

  let books = [];
  export let url = ""
</script>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
<main>
  <Router url="{url}">

    <!-- On bind les routes aux composants-->
    <div>
      <Route path="edit" component="{Edit}" />
      <Route path="delete" component="{Delete}" />
      <Route path="edit/:id" component="{Edit}"/>
      <Route path="/"><Home /></Route>
    </div>
</Router>
</main>
