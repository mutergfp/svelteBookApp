<script>
    import Header from "../component/header.svelte"
    import BookForm from "../component/bookForm.svelte"
    let pageTitle = "BookAPP - Modification"
    let book = {}
    export let db = null
    export let idBook = null

    $: if(idBook){
        console.log(idBook)
    }

    $: if(db){
        if(idBook){
           load()
        }
    }

    async function load(){
        book = await db.load_book(idBook)
        console.log(book)
    }
</script>

<Header title={pageTitle} ></Header>




