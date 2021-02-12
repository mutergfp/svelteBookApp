<script>
    import { Link, navigate } from "svelte-routing";
    import "@material/mwc-button";
    import "@material/mwc-icon-button";
    import "@material/mwc-top-app-bar";
    export let title = "";

    function add(){
        navigate('add')
    }
</script>

<mwc-top-app-bar>
    <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>
    <div slot="title">{title}</div>
    <mwc-icon-button icon="add" on:click={add}></mwc-icon-button>
    <div><!-- content --></div>
</mwc-top-app-bar>
