# `@edx/browserslist-config`

[![license](https://img.shields.io/npm/l/@edx/paragon)](LICENSE)

Shareable [browserslist](https://github.com/browserslist/browserslist) configuration for edX.

## Supported Browsers

| Browser                       | Version |
| ----------------------------- | ------- |
| Chrome                        | last 2  |
| Chrome for Android            | last 2  |
| Safari                        | last 2  |
| Safari for iOS                | last 2  |
| Edge                          | last 2  |
| Firefox                       | last 2  |
| Firefox for Android           | last 2  |

You can list all supported browsers by running:

```shell
$ npx browserslist "last 2 chrome versions, last 2 safari versions, last 2 edge versions, last 2 firefox versions, last 2 chromeandroid versions, last 2 firefoxandroid versions, last 2 ios versions"
```

Learn more by visiting the [browser support page on the edX Support Portal](https://support.edx.org/hc/en-us/articles/206211848-What-are-the-system-requirements-and-supported-browsers-on-edX-).

## Installation

Install the module.

```shell
$ npm install -D @edx/browserslist-config
```

## Usage

### package.json

```json
{
  "browserslist": ["extends @edx/browserslist-config"]
}
```