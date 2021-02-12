<script>
    import Header from "../component/header.svelte"
    import BookForm from "../component/bookForm.svelte"
    let pageTitle = "BookAPP - Ajout"
    export let db
</script>

<Header title={pageTitle} ></Header>
<BookForm db={db}/>



