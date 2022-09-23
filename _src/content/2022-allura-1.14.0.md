Title: Apache Allura 1.14.0 released
Date: 2022-09-23
Tags: release
Slug: allura-1.14.0
Summary: Version 1.14.0 of Allura released

#### What's New?

Apache Allura 1.14.0 has been released, after a long time since 1.13.0.  It includes a new app/tool, SEO improvements
and a huge list of small fixes and improvements.  The highlights are:

 * Added ForgeFiles app for uploading and managing file releases.
 * Many SEO improvements related to links, redirects, canonical and noindex tags.

For full details of all the changes and fixes, see the [release notes](https://forge-allura.apache.org/p/allura/git/ci/master/tree/CHANGES). 

#### Only Python 3.7 supported

This release drops support for Python 2.7 and 3.6, and only supports Python 3.7.

#### Upgrade Instructions

To install updated dependencies, run: `pip install -r requirements.txt --no-deps --upgrade --upgrade-strategy=only-if-needed`

Run: `./rebuild-all.bash` to get new ForgeFiles app available

Run: `paster ensure_index development.ini` in Allura dir

If switching from Python 3.6 to 3.7, you will need to make a completely new python virtual environment,
and run `pip install ...` in it, and then use it to run Allura.  If you're still on Python 2, you probably should upgrade
to the previous release 1.13.0 first, following its upgrade instructions, and then switch to Python 3 before doing the 1.14.0 upgrade.

If using docker, rebuild the allura image and restart containers.

Feel free to ask any questions on the [dev mailing list](https://lists.apache.org/list.html?dev@allura.apache.org).

#### Get 1.14.0

[Download Allura](//allura.apache.org/download.html) and [install it](https://forge-allura.apache.org/docs/getting_started/installation.html) today.
