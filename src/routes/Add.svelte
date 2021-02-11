<script>
    import Header from "../component/header.svelte"
    import BookForm from "../component/bookForm.svelte"
    import DB from "../DB.svelte"
    let pageTitle = "BookAPP - Modification"
    let book = {};
    export let id

    $: if(id){
        //book = new DB().load_book(id)
        console.log(id)
    }

    $:if(db){
        if(id){
            tmp = db.load_book(id)
            book = db.load_book(id)
            console.log(book)
            //book = new DB().load_book(id)
        }
    }

</script>

<Header title={pageTitle} ></Header>
{#if book != {}}
    <BookForm bind:book={book}/>
{/if}



