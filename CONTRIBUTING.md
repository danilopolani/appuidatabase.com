# Contribute to App UI Database

## Creating a new app

Create a new yaml file at `src/content/apps` by copying another app file. Technologies are a plus, if you don't know them, just leave it as an empty array.  
Remember to put the thumbnail image (can be whatever, but ideally a "cover" image with the logo) in the `src/assets/<appname>` folder.

## Adding screenshot for an app

Place your screenshots in the `src/assets/<appname>/<component-type>` folder; the folders names are following the `ScreenCategory` enum values, so for example `fullscreen`, `dialogs` etc.
Then create (or edit if already exists) a yaml file inside `src/content/screens/<component-type>/<app-name>.yaml` and give to every component screenshots an intuitive name to understand the context and what happens. 
