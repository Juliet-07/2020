# Pages

pages refer to an overall component body. Its a sub entity that consumes a component, uses an
 utility, relies on a global configuration and still has sub-routines within its folder for managing view specific tasks.
 
Because we are using [NextJs](https://nextjs.org/docs), pages automatically reflect our routing system.

    --- pages
	    --- 404.jsx
	    --- about
	        --- 404.jsx
	        --- about.card.header.style.js
	    --- dashboard
	        --- 404.jsx
	        --- dashboard.card.header.style.js
            --- courses
                --- 404.jsx
                --- courses.card.header.style.js
