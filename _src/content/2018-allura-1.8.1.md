Title: Apache Allura 1.8.1 released
Date: 2018-03-14
Tags: release
Slug: allura-1.8.1
Summary: Version 1.8.1 of Allura released, with many fixes & improvements and a critical security fix.

#### New Features

Apache Allura 1.8.1 has been released.
It contains a several improvements around spam prevention and content quality on discussions.  It also includes a few performance optimizations, along with a number of fixes and smaller improvements.  To see all the details, check out the [release changelog](https://forge-allura.apache.org/p/allura/git/ci/master/tree/CHANGES).

#### Important Security Fix


CVE-2018-1319 Apache Allura HTTP response splitting

Severity: Important<br>
Versions Affected: All

**Description:**<br>
Attackers may craft URLs that cause HTTP response splitting.  If a victim goes
to a maliciously crafted URL, unwanted results may occur including XSS or
service denial for the victim's browsing session.

**Mitigation:**<br>
Users of Allura should upgrade to Allura 1.8.1 immediately.

**Credit:**<br>
This issue was discovered by Everardo Padilla Saca


#### Get 1.8.1

[Download Allura](https://www.apache.org/dyn/closer.cgi/allura/) and [install it](https://forge-allura.apache.org/docs/getting_started/installation.html) today.
