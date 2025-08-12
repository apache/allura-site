Title: Apache Allura 1.18.0 released
Date: 2025-08-12
Tags: release
Slug: allura-1.18.0
Summary: Version 1.18.0 of Allura released

#### What's New?

Apache Allura 1.18.0 has been released.

For full details of all the changes and fixes, see the [CHANGES file](https://forge-allura.apache.org/p/allura/git/ci/master/tree/CHANGES). 

#### New Security Settings

To upgrade to stronger password hashing with an existing .ini file, see `auth.password.algorithm` and `auth.password.algorithm.old` in development.ini.  The adjacent comments explain the possible values.  For LDAP users, see `auth.ldap.password.algorithm`.

To require logins from new locations with MFA to verify a code by email, add this to your existing .ini file (enabled by default for new installs):
```
auth.email_auth_code.enabled = true
```

To enforce stricter login session handling, add this to your existing .ini file (enabled by default for new installs).  You may wish to run Allura 1.18.0 without this setting for a few weeks to allow users to log in from their existing sessions before enforcing it.
```
auth.reject_untracked_sessions = true
```

#### Breaking Changes

Python 3.8 is no longer supported.  Python 3.9 through 3.11 are supported in this release.

#### Upgrade Instructions

To install updated dependencies, run: `pip install -r requirements.txt --no-deps --upgrade --upgrade-strategy=only-if-needed`

Run: `paster ensure_index development.ini` in the Allura dir

If using docker, rebuild the allura image and restart containers.

Also, see the sections above about security settings.

Feel free to ask any questions on the [dev mailing list](https://lists.apache.org/list.html?dev@allura.apache.org).

#### Get 1.18.0

[Download Allura](https://allura.apache.org/download.html) and [install it](https://forge-allura.apache.org/docs/getting_started/installation.html) today.
