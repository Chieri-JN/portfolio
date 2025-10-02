<script>
    import projects from '$lib/projects.json';
    import Project from "$lib/Project.svelte";
</script>
<svelte:head>
	<title>Home</title>
</svelte:head>

<h1 class = "Title">
    Chieri Nnadozie
</h1>
<img class = "fit-picture"
        src="https://lh3.googleusercontent.com/pw/AP1GczOcjQ386bhugGS5MLAefwI7H6bVtOn4McHvEeKFnUqvdRD-gwOGjhJhS-fEflImIaLUweOcR76_V7TvpsgrKbz3cr5kitOGUw0bKpXX-UcgtkA9z4I=w2400"
alt="Photo of me"/>
<p>Senior at CMU studying CS, HCI and Design</p>

<div class="projects">
    {#each [projects[0], projects[3], projects[7]] as p}
        <Project data={p} hLevel=3 />

    {/each}
</div>