<script>
    import Header from "../component/header.svelte"
    import BookForm from "../component/bookForm.svelte"
    let pageTitle = "BookAPP - Modification"
    let book = {}
    export let db = null
    export let idBook = null

    $: if(db){
        if(idBook){
           load()
        }
    }

    async function load(){
        book = await db.load_book(idBook)
    }
</script>

<Header title={pageTitle} ></Header>
{#if book != {}}
    <BookForm {book} {db}/>
{/if}



