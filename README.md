# KNMI Keycloak Theme

This theme has been developed using Keycloak 3.4.1.

## Installing

When mounting this theme in the themedir make sure the directory name === "`knmi_theme`".

## Developing

Navigate to the directory where you've checked your theme out and run (this uses a temporary H2 database, see [this blogpost on how to use Keycloak with Docker](https://murb.nl/articles/291-developing-keycloak-templates-with-docker/)):

    docker-compose up

This should automatically create an admin user for you (admin/Pa55w0rd)

## Localisation

This theme has beend eveloped with localisation in mind, but current UI only supports a switching locale (Nederlands (Dutch) <=> English)

### Some remarks

* Translations can be changed set in the messages directory. Be careful when using UTF-8 characters, use the ascii notation (e.g. `\u00eb` instead of `ë`).

## Modifying the template

Whilst it is a copy of the default Keycloak-theme, most of the templates are inherited from the base template. When upgrading make sure the copied files from base
still match the variables required:

* `/login/*.ftl`
* `messages/*`
* `/account/*.ftl`

## Todo

* Optionally: Distributable Theme / build script
* Think of a correct way of referencing Terms & Conditions (preferably configurable?)