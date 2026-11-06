Title: Apache Allura 1.22.1 released, with security fix
Date: 2026-11-06
Tags: release
Slug: allura-1.22.1
Summary: Version 1.22.1 of Allura released, with security fix

#### What's New?

Apache Allura 1.22.1 has been released.

#### Security Fixes

##### CVE-2026-118196: OAuth1 rebinding

Severity: critical<br>

**Description:**<br>
OAuth 1 rebinding vulnerability in Apache Allura.

This issue affects Apache Allura through 1.22.0.

**Mitigation:**<br>
Users are recommended to upgrade to version 1.22.1, which fixes the issue.

**Credit:**<br>
This issue was reported by hataehoon.


#### Other Changes

Additional security hardening and package updates.

Implement field level encryption for audit log.

For full details of all the changes and fixes, see the [CHANGES file](https://forge-allura.apache.org/p/allura/git/ci/master/tree/CHANGES). 

#### Upgrade Instructions

Upgrade to prior release(s) first.  Stop any running Allura services while upgrading.

Install updated dependencies by running: `pip install -r requirements.txt --no-deps --upgrade --upgrade-strategy=only-if-needed`

Then run: `paster ensure_index development.ini` in Allura dir.  Replace your .ini file path.

Run `scripts/migrations/039-field-encryption.sh`  If using docker, this is the full command (replace your .ini file path): `docker compose run -e INI=docker-dev.ini --rm taskd ../scripts/migrations/039-field-encryption.sh`

After the new version of Allura is up and running, delete the plaintext versions of the encrypted fields by running `scripts/migrations/040-field-encryption-cleanup.sh`

Feel free to ask any questions on the [dev mailing list](https://lists.apache.org/list.html?dev@allura.apache.org).

#### Get 1.22.1

[Download Allura](https://allura.apache.org/download.html) and [install it](https://forge-allura.apache.org/docs/getting_started/installation.html) today.
