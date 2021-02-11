<script>
 import { onMount } from 'svelte';
 import PouchDB from 'pouchdb-browser';
 export let documents;
 export let initsrc;
 export let collection;
 let db;

// Si db n'est plus 'undefined' alors
// on appelle load_books automatiquement
 $: if (db) { load_books(); }


 
 onMount(
   async () => {
     const pdb = new PouchDB(collection);
     await pdb.info(); // Notre BD est disponible
     db = pdb; // db devient non nulle et donc déclenche load_books
   }
 );

 async function load_books() {
   if (!db) return;
   const r = await db.info();
   if (r.update_seq === 0) { // si il n'y a rien en base
     const res = await fetch(initsrc);
     const docs = await res.json();
     db.bulkDocs(docs); // on lance la construction de la bd avec les données lues dans le fichier
   }
    // on requête la BD
     const zdocs = await db.allDocs({include_docs: true});
     console.log(zdocs);
     // on charge les données dans documents
   documents = zdocs.rows.map(d => d.doc);
 }

 export async function load_book(id) {
    if(!db){
      console.log('no bdd')
     return
    }   
    const dbData = await db.get(id)
    console.log(dbData)
 }
</script>
