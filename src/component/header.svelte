<script>
    import "@material/mwc-button";
    import "@material/mwc-icon-button";
    import "@material/mwc-top-app-bar";
    export let title = "";
</script>

<mwc-top-app-bar>
    <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>
    <div slot="title">{title}</div>
    <mwc-icon-button icon="add" slot="actionItems"></mwc-icon-button>
    <div><!-- content --></div>
</mwc-top-app-bar>