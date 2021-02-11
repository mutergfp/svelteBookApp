<script>
    import Header from "../component/header.svelte"
    import BookForm from "../component/bookForm.svelte"
    import DB from "../DB.svelte"
    let pageTitle = "BookAPP - Modification"
    let book
    export let db = null
    export let idBook = null

    $: if(idBook){
        console.log(idBook)
    }

    $: if(db){
        console.log(db)
    }
</script>

<Header title={pageTitle} ></Header>
{idBook}



