Title: Apache Allura 1.15.0 released
Date: 2023-09-18
Tags: release
Slug: allura-1.15.0
Summary: Version 1.15.0 of Allura released

#### What's New?

Apache Allura 1.15.0 has been released, after a long time since 1.14.0.  This release adds support for more Python versions (see next section) and Content-Security-Policy headers.  Many other fixes and improvements are also included, they relate to SEO, performance and different parts of Allura.

For full details of all the changes and fixes, see the [CHANGES file](https://forge-allura.apache.org/p/allura/git/ci/master/tree/CHANGES). 

#### Python 3.7 through 3.11 supported

This release supports Python 3.7 through Python 3.11

The next release will drop support for Python 3.7 so please upgrade your Python version soon, to stay compatible with future Allura releases.

#### Upgrade Instructions

To install updated dependencies, run: `pip install -r requirements.txt --no-deps --upgrade --upgrade-strategy=only-if-needed`

Run: `paster ensure_index development.ini` in Allura dir

If switching to a new version of Python, you will need to make a completely new python virtual environment,
and run `pip install ...` in it, and then use it to run Allura.

If using docker, rebuild the allura image and restart containers.

Feel free to ask any questions on the [dev mailing list](https://lists.apache.org/list.html?dev@allura.apache.org).

#### Get 1.15.0

[Download Allura](//allura.apache.org/download.html) and [install it](https://forge-allura.apache.org/docs/getting_started/installation.html) today.
