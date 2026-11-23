Title: Apache Allura 1.23.0 released, with security fix
Date: 2026-11-23
Tags: release
Slug: allura-1.23.0
Summary: Version 1.23.0 of Allura released, with security fix

#### What's New?

Apache Allura 1.23.0 has been released.

#### Security Fixes

##### CVE-2026-135660: XSS in Ticket Tracker

Severity: critical<br>

**Description:**<br>
XSS vulnerability in Apache Allura's ticket tracking tool.

This issue affects Apache Allura through 1.22.1.

**Mitigation:**<br>
Users are recommended to upgrade to version 1.23.0, which fixes the issue.


#### Other Changes

Additional security hardening and package updates.

Python 3.15 is fully supported now.

The ForgeChat tool has been removed.

OAuth2 support for DCR (Dynamic Client Registration), CIMD (Client ID Metadata Documents), and scopes are available.
See the new `oauth2.*` settings in `development.ini` for more information on how to enable and use it. 

For full details of all the changes and fixes, see the [CHANGES file](https://forge-allura.apache.org/p/allura/git/ci/master/tree/CHANGES). 

#### Upgrade Instructions

Upgrade to prior release(s) first.  Stop any running Allura services while upgrading.

Install updated dependencies by running: `pip install -r requirements.txt --no-deps --upgrade --upgrade-strategy=only-if-needed`

If you used the ForgeChat tool previously, run:
```
pip uninstall -y ForgeChat
```

And in mongo, run:
```
  // Check how many there are first:
  db.getSiblingDB("project-data").config.countDocuments({ tool_name: /^chat$/i })
  // Then remove them:
  db.getSiblingDB("project-data").config.deleteMany({ tool_name: /^chat$/i })
```

Feel free to ask any questions on the [dev mailing list](https://lists.apache.org/list.html?dev@allura.apache.org).

#### Get 1.23.0

[Download Allura](https://allura.apache.org/download.html) and [install it](https://forge-allura.apache.org/docs/getting_started/installation.html) today.
