<script>
    import Header from "../component/header.svelte"
    let pageTitle = "BookAPP - Supression";
    export let db = null
    export let idBook = null

    $: if(idBook){
        console.log(idBook)
    }

    $: if(db){
        if(idBook){
           console.log("ok")
        }
    }

    async function delete_book(){
        await db.delete_book(idBook)
        window.location.href = "/";
    }
</script>

<Header title={pageTitle} ></Header>
Êtes vous sûr de vouloir supprimer ce livre ?
<button on:click={delete_book}>Supprimer</button>