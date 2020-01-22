# appsscript-ci

Testing Google Appscript with Circle-CI

## Installation

Use the package manager [yarn](https://yarnpkg.com/lang/en/) to install [clasp](https://github.com/google/clasp).

```bash
yarn add --dev clasp
```

## Development

Clone the repo

```bash
git clone git@github.com:paint-it-green/appsscript-ci.git
```

Proceed to src folder

```bash
cd appsscript-ci/src
```

Login to google apps script via clasp using `clasp login`. Skip this if you're already logged in.

Create a copy of appsscript-ci

```bash
clasp create --title [projectname] --type docs
```

To test your changes run these commands:


```bash
clasp push && clasp open
```