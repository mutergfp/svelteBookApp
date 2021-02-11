<script>
    import "@material/mwc-button";
    import "@material/mwc-icon-button";
    import "@material/mwc-top-app-bar";
    export let title = "";    

    function returnHome(){
        window.location.href = "/"
    }
</script>

<mwc-top-app-bar>
    <mwc-icon-button icon="home" slot="navigationIcon" on:click={returnHome}></mwc-icon-button>
    <div slot="title">{title}</div>
    <mwc-icon-button icon="add" slot="actionItems"></mwc-icon-button>
    <div><!-- content --></div>
</mwc-top-app-bar>