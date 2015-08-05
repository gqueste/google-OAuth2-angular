# google-OAuth2-angular
Angular module for client side Google authentication through OAuth2.

Wraps the code on the official page for the [Google API Client Library for Javascript](https://developers.google.com/api-client-library/javascript/start/start-js)

## Module
The module can be found under `app/scripts/components/google-auth`.

Dependencies required ->
Add to your `index`:

    <script src="https://apis.google.com/js/client.js"></script>

### Methods
* `fetchGoogleMail` : launches the authentication process. If it succeeds, userMail is initiated with a `mail` attribute
* `getUserMail` : Returns the object userMail. Has a `mail` attribute or a `error` attribute
* `isConnected` : Returns if the user has been authenticated.

### Use

You will need a clientID and an APIKey provided by [Google](https://developers.google.com/api-client-library/javascript/features/authentication) 
to place in the `google-auth.factory.js` factory.

Inject `google.auth` into your module.

Call `GoogleAuthentication` to reach the factory methods. `fetchGoogleMail` will launch a pop-up for the user to connect to their Google account.

The call is asynchronous. As a result, you can detect the connection success by watching `getUserMail` or `isConnected`.

See `app/scripts/pages/index` for an example.

### Example
(The example needs a clientID and an APIKey in order to run)

Launch the application by running `npm install` and then `npm start`

The click on the Authorize button will launch the authentication.

## Get Google keys

In the Google console Developer, create a new project and require credentials. Indicate the URL of the web application
as Redirect Urls and Javascript origins.

In the Consent screen, you will be able to edit all the information displayed to the user when the application will require
access.