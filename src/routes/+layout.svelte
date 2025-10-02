<script>
	import { page } from '$app/state';
	import "../../static/style.css";

	
	let { children } = $props();
	let pages = [
    { url: '.', title: 'Home' },
    { url: 'projects', title: 'Projects' },
    { url: 'photography', title: 'Photography' },
    { url: 'cv', title: 'CV' },
    { url: 'https://github.com/Chieri-JN', title: 'GitHub' },
    { url: 'https://drive.google.com/file/d/1GXt8NmCjheccrPx1D7HaUZamUhs0K3zx/view?usp=sharing', title: 'Resume' },
	{ url: 'contact', title: 'Contact' }
	];
</script>

<nav class="nav-bar">
  <ul>
    {#each pages as p}
      <li class="crumb">
        <a 
          href={p.url} 
          class:current={page.route.id === p.url}
		  target={ p.url.startsWith("http") ? "_blank" : null }
        >
          {p.title}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<svelte:head>

</svelte:head>

{@render children?.()}
