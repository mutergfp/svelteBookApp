<script>
 let books = [];
 import TinyDB from './TinyDB.svelte';
</script>

<h1>Tiny Amazon</h1>
<TinyDB bind:documents={books} initsrc="./books.json" collection="books"/>
<ul>
  {#each books as b}
  <li>{b.title}</li>
  {/each}
</ul>
