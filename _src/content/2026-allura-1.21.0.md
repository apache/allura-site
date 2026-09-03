Title: Apache Allura 1.21.0 released, with security fixes
Date: 2026-09-03
Tags: release
Slug: allura-1.21.0
Summary: Version 1.21.0 of Allura released, with security fixes

#### What's New?

Apache Allura 1.21.0 has been released.

#### Security Fixes

##### CVE-2026-80180: Stored XSS via markdown HTML processing  

Severity: critical<br>

**Description:**<br>
Stored XSS via markdown HTML processing in Apache Allura.

This issue affects Apache Allura: from through 1.20.0.

**Mitigation:**<br>
Users are recommended to upgrade to version 1.21.0, which fixes the issue.

**Credit:**<br>
This issue was discovered by n0mi1k.

##### CVE-2026-80181: Server-side request forgery

Severity: important<br>

**Description:**<br>
Apache Allura's webhooks are vulnerable to Server-Side Request Forgery (SSRF).

This issue affects Apache Allura: through 1.20.0.

**Mitigation:**<br>
Users are recommended to upgrade to version 1.21.0, which fixes the issue.

**Credit:**<br>
This issue was discovered by n0mi1k.

##### CVE-2026-81270: Information exposure via search 

Severity: moderate<br>

**Description:**<br>
Apache Allura: exposure of non-public information via search.

This issue affects Apache Allura: through 1.20.0.

**Mitigation:**<br>
Users are recommended to upgrade to version 1.21.0, which fixes the issue.

**Credit:**<br>
This issue was discovered by n0mi1k.

#####  CVE-2026-80190: Stored XSS via code repositories 

Severity: low<br>

**Description:**<br>
Apache Allura: stored XSS via SVN code repositories.  Git repositories are not known to be affected.  The vulnerability is likely mitigated via default CSP headers.

This issue affects Apache Allura: through 1.20.0.

**Mitigation:**<br>
Users are recommended to upgrade to version 1.21.0, which fixes the issue.

**Credit:**<br>
This issue was discovered by n0mi1k.

#### Other Changes

Repo admins can allow force push on their own git repos.  See Upgrade Instructions for how to enable.

Drop support for `<svg>` tags in Markdown/HTML.

Add mongodb option for the jinja bytecode cache.

For full details of all the changes and fixes, see the [CHANGES file](https://forge-allura.apache.org/p/allura/git/ci/master/tree/CHANGES). 

#### Upgrade Instructions

Upgrade to prior release(s) first.  Stop any running Allura services while upgrading.

Install updated dependencies by running: `pip install -r requirements.txt --no-deps --upgrade --upgrade-strategy=only-if-needed`

To allow repo admins to turn force push on and off for their own git repos, add `scm.force_push.git.enabled = true` to your .ini file and run in the Allura dir (replace your .ini file path):
  `paster script your-ini-file.ini ../scripts/migrations/force-push-sync-from-repo-config.py`
The script reads each git repo's settings and records it in Mongo so the admin page shows the right value.  It does not change any repository.

Feel free to ask any questions on the [dev mailing list](https://lists.apache.org/list.html?dev@allura.apache.org).

#### Get 1.21.0

[Download Allura](https://allura.apache.org/download.html) and [install it](https://forge-allura.apache.org/docs/getting_started/installation.html) today.
