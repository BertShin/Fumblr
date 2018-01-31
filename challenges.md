# SessionFormContainer

* Needed to render the SesionFormContainer upon first entry to the site since everything is being loaded onto the main page.
  * added a Redirect to="/signup" from="/" at the bottom of a switch Statement. So if none of the routes match in the hierarchy, user will be forced to the signup page
