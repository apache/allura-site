Title: Apache Allura 1.16.0 released with critical security fix
Date: 2023-11-06
Tags: release
Slug: allura-1.16.0
Summary: Version 1.16.0 of Allura released with critical security fix

#### What's New?

Apache Allura 1.16.0 has been released.  It has a critical security fix and also drops Python 3.7 support.

For full details of all the changes and fixes, see the [CHANGES file](https://forge-allura.apache.org/p/allura/git/ci/master/tree/CHANGES). 

#### Critical Security Fix

CVE-2023-46851 sensitive information exposure via import 

Severity: Critical<br>
Versions Affected: 1.0.1 through 1.15.0

**Description:**<br>
Allura Discussion and Allura Forum importing does not restrict URL values specified in attachments. Project administrators can run these imports, which could cause Allura to read local files and expose them.  Exposing internal files then can lead to other exploits, like session hijacking, or remote code execution.

**Mitigation:**<br>
Users of Allura should upgrade to Allura 1.16.0 immediately.

If you are unable to upgrade, set this in your .ini config file:

```
disable_entry_points.allura.importers = forge-tracker, forge-discussion
```

That same .ini setting is also recommend for users who want maximum security on their Allura instance and don't need those importers available.

**Credit:**<br>
This issue was discovered by Stefan Schiller (Sonar)

#### Python 3.8 through 3.11 supported

This release drops support for Python 3.7 and supports Python 3.8 through Python 3.11

#### Upgrade Instructions

To install updated dependencies, run: `pip install -r requirements.txt --no-deps --upgrade --upgrade-strategy=only-if-needed`

Run: `paster ensure_index development.ini` in Allura dir

If switching to a new version of Python, you will need to make a completely new python virtual environment,
and run `pip install ...` in it, and then use it to run Allura.

If using docker, rebuild the allura image and restart containers.

Feel free to ask any questions on the [dev mailing list](https://lists.apache.org/list.html?dev@allura.apache.org).

#### Get 1.16.0

[Download Allura](//allura.apache.org/download.html) and [install it](https://forge-allura.apache.org/docs/getting_started/installation.html) today.
