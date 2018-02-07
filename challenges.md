
* Needed to render the SesionFormContainer upon first entry to the site since everything is being loaded onto the main page.
  * added a Redirect to="/signup" from="/" at the bottom of a switch Statement. So if none of the routes match in the hierarchy, user will be forced to the signup page

* Errors from invalid credentials and invalid signups were carrying over when clicking the link switching from signing up and logging in.
  * to fix this, created a new action and returned null when clicking the link. If the prop errors is null, we return an empty array.

* Had a hard time figuring out how the layout for all components
  * implemented everything as a FlexBox and Styled accordingly
  * Went for a minimalistic design with subtle box shadows

* Figured out how to implement the giphy api and integrate that into my form
  * used viewbox to size the GIF svg

* Implemented an onClick event listener to scroll to the top of the page when the main logo is clicked on the dashboard.
