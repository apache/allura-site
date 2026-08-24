Title: Apache Allura 1.20.0 released, with security fix
Date: 2026-08-24
Tags: release
Slug: allura-1.20.0
Summary: Version 1.20.0 of Allura released, with security fix

#### What's New?

Apache Allura 1.20.0 has been released.

#### Security Fix

CVE-2026-75099: Unauthenticated REST disclosure 

Severity: important<br>

**Description:**<br>
Unauthenticated REST disclosure of certain content items in Apache Allura.

This issue affects Apache Allura through 1.19.1.

**Mitigation:**<br>
Users are recommended to upgrade to version 1.20.0, which fixes the issue.

**Credit:**<br>
This issue was discovered by Venkatraman Kumar, securin.io.

#### Other Changes

Field-level encryption of sensitive fields has continued, adding email addresses and some IP addresses in this release.

Support for webp screenshots & attachments has been added, and some rss/atom changes, and more.  For full details of all the changes and fixes, see the [CHANGES file](https://forge-allura.apache.org/p/allura/git/ci/master/tree/CHANGES). 

#### Upgrade Instructions

Upgrade to prior release(s) first.  Stop any running Allura services while upgrading.

Install updated dependencies by running: `pip install -r requirements.txt --no-deps --upgrade --upgrade-strategy=only-if-needed`

Run `scripts/migrations/037-field-encryption.sh`  If using docker, this is the full command (replace your .ini file path): `docker compose run -e INI=docker-dev.ini --rm taskd ../scripts/migrations/037-field-encryption.sh`

Run: `paster ensure_index development.ini --clean` in Allura dir.  Replace your .ini file path

After the new version of Allura is up and running, delete the plaintext versions of the encrypted fields by running `scripts/migrations/038-field-encryption-cleanup.sh`

Feel free to ask any questions on the [dev mailing list](https://lists.apache.org/list.html?dev@allura.apache.org).

#### Get 1.20.0

[Download Allura](https://allura.apache.org/download.html) and [install it](https://forge-allura.apache.org/docs/getting_started/installation.html) today.
