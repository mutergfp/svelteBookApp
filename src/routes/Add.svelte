<script>
    import Header from "../component/header.svelte"
    import BookForm from "../component/bookForm.svelte"
    let pageTitle = "BookAPP - Ajout"
    export let db
    let book = {}

</script>

<Header title={pageTitle}></Header>
<BookForm db={db} book={book}/>



