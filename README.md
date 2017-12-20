# KNMI Keycloak Theme

This theme has been developed using Keycloak 3.4.1.

## Installing

When mounting this theme in the themedir make sure the directory name === "`knmi_theme`".

## Developing

See [this blogpost on how to use Keycloak with Docker](https://murb.nl/articles/291-developing-keycloak-templates-with-docker/)

Navigate to the directory where you've checked your theme out and run:

docker run -d -it -p 9080:8080 --name keycloak --link mysql:mysql --mount type=bind,source=`pwd`,target=/opt/jboss/keycloak/themes/knmi_theme jboss/keycloak

## Modifying the template

Whilst it is a copy of the default Keycloak-theme, most of the templates are inherited from the base template. When upgrading make sure the copied files from base
still match the variables required:

* `/login/*.ftl`
* `messages/*`

### Some remarks

* Translations can be set in the messages directory. Be careful when using UTF-8 characters, use the ascii notation (e.g. `\u00eb` instead of `ë`).


## Todo

* Distributable Theme / build script