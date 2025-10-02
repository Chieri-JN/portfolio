<svelte:head>
	<title>Contact me</title>
</svelte:head>

    <h1>Contact Me</h1>
    <form class = "contactForm" action = "mailto:cnnadozi@andrew.cmu.edu" method="POST" enctype="text/plain">
        <label for="email">Email
            <input name="email" type="email" id="email">
        </label>

        <label for="subject">Subject
            <input name="subject" type="text" id="subject">
        </label>

        <label for="body">Body
            <textarea name="body" id="body"></textarea>
        </label>

        <button> Submit</button>
    </form>
    <script type="module" src="../global.js"></script>