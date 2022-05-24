# `@edx/browserslist-config`

[![license](https://img.shields.io/npm/l/@edx/browserslist-config)](LICENSE) [![npm](https://img.shields.io/npm/v/@edx/browserslist-config)](https://www.npmjs.com/package/@edx/browserslist-config)

Shareable [browserslist](https://github.com/browserslist/browserslist) configuration for Open edX. If our supported browsers changes in the future, this will be the primary place to update for all consumers (e.g., micro-frontends).

## What is Browserslist?

[Browserslist](https://github.com/browserslist/browserslist) is a tool to share target browsers and Node.js versions between different frontend tools (e.g., autoprefixer, babel, etc.).

See [documentation](https://github.com/browserslist/browserslist#shareable-configs) on shareable `browserslist` configurations for more details.

## Supported Browsers

### Desktop

| Browser                       | Version |
| ----------------------------- | ------- |
| Chrome                        | last 2  |
| Safari                        | last 2  |
| Edge                          | last 2  |
| Firefox                       | last 2  |

### Mobile

| Browser                       | Version |
| ----------------------------- | ------- |
| Chrome for Android            | last 3  |
| Safari for iOS                | last 3  |
| Firefox for Android           | last 3  |

### List all supported browsers

You can list all supported browsers by running:

```shell
npm install
npm run supported
```

Learn more by visiting the [browser support page on the edX Support Portal](https://support.edx.org/hc/en-us/articles/206211848-What-are-the-system-requirements-and-supported-browsers-on-edX-).

## Installation and usage

Install the package in your repository:

```shell
$ npm install -D @edx/browserslist-config
```

In your `package.json` file:

```json
{
  "browserslist": ["extends @edx/browserslist-config"]
}
```
