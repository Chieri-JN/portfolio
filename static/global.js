function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

let navLinks = $$("nav a");
let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname)
currentLink?.classList.add("current");

// $$('nav').forEach(n => n.remove());

const ARE_WE_HOME = document.documentElement.classList.contains('home');

let pages = [
    { url: '.', title: 'Home' },
    { url: 'projects', title: 'Projects' },
    { url: 'photography', title: 'Photography' },
    { url: 'cv', title: 'CV' },
    { url: 'https://github.com/Chieri-JN', title: 'GitHub' },
    { url: 'https://drive.google.com/file/d/1GXt8NmCjheccrPx1D7HaUZamUhs0K3zx/view?usp=sharing', title: 'Resume' },
    { url: 'contact', title: 'Contact' }
];

let nav = document.createElement('nav');
nav.className = 'nav-bar';
let ul = document.createElement('ul');
// nav.append(ul); 

document.body.prepend(nav);
for (let p of pages) {
	let url = p.url;
	let title = p.title;
    url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;

    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;

    if (a.host !== location.host) {
        a.target = '_blank';
    }

    a.classList.toggle("current", a.host === location.host && a.pathname === location.pathname);

    let li = document.createElement('li');

    // nav.append(a);
    li.append(a);
    ul.append(li);
    // nav.append(ul)
    

}


document.body.insertAdjacentHTML("afterbegin", `
    <label class="color-scheme">
        Theme:
        <select id="color-scheme">
            <option value="light dark">Automatic</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </label>
`);

const colorSchemeSelect = document.querySelector('#color-scheme');
colorSchemeSelect.addEventListener("input", function (event) {
    // console.log("color scheme changed to", event.target.value);
    document.documentElement.style.setProperty("color-scheme", event.target.value);

});









