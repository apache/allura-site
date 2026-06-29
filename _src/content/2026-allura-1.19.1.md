Title: Apache Allura 1.19.1 released, with many security fixes
Date: 2026-06-29
Tags: release
Slug: allura-1.19.1
Summary: Version 1.19.1 of Allura released, with many security fixes

#### What's New?

Apache Allura 1.19.1 has been released.  (Version 1.19.0 was skipped)

**Security: a large number of security fixes have been applied, as well as general security hardening in many areas.
We recommend upgrading immediately.**

Field-level encryption of sensitive fields has begun, for some fields.  Future releases will add more fields.

Support for Python 3.13 and 3.14 has been added.

Various other changes, fixes, and performancement impovements are also in this release.  For full details of all the changes and fixes, see the [CHANGES file](https://forge-allura.apache.org/p/allura/git/ci/master/tree/CHANGES). 

#### Breaking Changes

Python 3.9 and 3.10 are no longer supported.  Python 3.11 through 3.14 are supported in this release.

#### Upgrade Instructions

Stop any running Allura services while upgrading.

Install updated dependencies by running: `pip install -r requirements.txt --no-deps --upgrade --upgrade-strategy=only-if-needed`

In your .ini file, set `csp.form_action_urls` to your base URL.

In your .ini file, enable or disable importers like Trac importer as you see fit (see `disable_entry_points` lines in `development.ini`)

Field-level mongo encryption setup:

* Copy the new `ming.*encryption*` lines from development.ini to your own .ini file. 
* Generate a secret key with: python -c 'import base64, secrets; print(base64.b64encode(secrets.token_bytes(96)).decode())'
* Put that secret key in your .ini file in 3 spots:
```
    ming.main.encryption.kms_providers.local.key = ...
    ming.project.encryption.kms_providers.local.key = ...
    ming.task.encryption.kms_providers.local.key = ...
```

Run `scripts/migrations/035-field-encryption.sh`  If using docker, this is the full command (replace your .ini file path): `docker compose run -e INI=docker-dev.ini --rm taskd ../scripts/migrations/035-field-encryption.sh`

Run: `paster ensure_index development.ini --clean` in Allura dir.  Replace your .ini file path

After the new version of Allura is up and running, delete the plaintext versions of the encrypted fields by running `scripts/migrations/036-field-encryption-cleanup.sh`

Feel free to ask any questions on the [dev mailing list](https://lists.apache.org/list.html?dev@allura.apache.org).

#### Get 1.19.1

[Download Allura](https://allura.apache.org/download.html) and [install it](https://forge-allura.apache.org/docs/getting_started/installation.html) today.
