Title: Apache Allura 1.22.0 released, with security fixes
Date: 2026-10-12
Tags: release
Slug: allura-1.22.0
Summary: Version 1.22.0 of Allura released, with security fixes

#### What's New?

Apache Allura 1.22.0 has been released.

#### Security Fixes

##### CVE-2026-92116: OAuth1 missing callback validation

Severity: important<br>

**Description:**<br>
OAuth1 callback validation vulnerability in Apache Allura.

This issue affects Apache Allura: from through 1.21.0.

**Mitigation:**<br>
Users are recommended to upgrade to version 1.22.0, which fixes the issue.

**Credit:**<br>
This issue was reported by MopMonk AI.

##### CVE-2026-92119: REST API Mass Assignment

Severity: moderate<br>

**Description:**<br>
REST API Mass Assignment vulnerability in Apache Allura.

This issue affects Apache Allura: through 1.21.0.

**Mitigation:**<br>
Users are recommended to upgrade to version 1.22.0, which fixes the issue.

**Credit:**<br>
This issue was reported by CyberLeo.

##### CVE-2026-92120: Oauth1 Replay Attack

Severity: low<br>

**Description:**<br>
OAuth1 Request Replay Attack vulnerability in Apache Allura.

This issue affects Apache Allura: through 1.21.0.

**Mitigation:**<br>
Users are recommended to upgrade to version 1.22.0, which fixes the issue.

**Credit:**<br>
This issue was reported by CyberLeo.

#### Other Changes

Additional security hardening and support.

Edit support has been added for OAuth1 and OAuth2 app configurations.

OAuth1 applications must now register at least one https:// Redirect URL, and their callback must match one exactly.  Applications registered before this release keep working with any callback until their owner edits them to add a URL.

ForgeChat (IRC archive tool) has been deprecated and scheduled to be removed in next release.  Join the Allura dev team if you would like to support and maintain this tool.

For full details of all the changes and fixes, see the [CHANGES file](https://forge-allura.apache.org/p/allura/git/ci/master/tree/CHANGES). 

#### Upgrade Instructions

Upgrade to prior release(s) first.  Stop any running Allura services while upgrading.

Install updated dependencies by running: `pip install -r requirements.txt --no-deps --upgrade --upgrade-strategy=only-if-needed`

Run in mongo: `db.getSiblingDB('allura').oauth2_access_token.dropIndex('refresh_token_1')`

Then run: `paster ensure_index development.ini` in Allura dir.  Replace your .ini file path.

Feel free to ask any questions on the [dev mailing list](https://lists.apache.org/list.html?dev@allura.apache.org).

#### Get 1.22.0

[Download Allura](https://allura.apache.org/download.html) and [install it](https://forge-allura.apache.org/docs/getting_started/installation.html) today.
