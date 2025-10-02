<script> 
    let { data = {}, hLevel = 2 } = $props();
</script>

<style>
    .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
    /*grid-template-rows : subgrid; */
    gap: 1em;
    align-items: start;
    grid-auto-rows: min-content;

    article {
        /*display: grid;  */
        display: grid;
        grid-template-rows: subgrid;
        grid-row: span 3;
    }
    h2 {
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        line-height: 1.1;
        text-wrap: balance;
    }

    h1 {
        font-size: 400%;
    }
}
</style>

<article>
    <svelte:element this={"h" + hLevel}>{ data.title }</svelte:element>
    <img src={data.image} alt="">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor quos, quod assumenda explicabo odio, nobis ipsa laudantium quas eum veritatis ullam sint porro minima modi molestias doloribus cumque odit.</p>
</article>