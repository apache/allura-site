Title: Apache Allura 1.8.0 released
Date: 2018-02-06
Tags: release
Slug: allura-1.8.0
Summary: Version 1.8.0 of Allura released, with many fixes & improvements and a critical security fix.

#### New Features

Apache Allura 1.8.0 has been released.
It contains a Docker setup for production environments, and improved security and auditing around user logins.
This release also contains a large number of fixes and smaller improvements.  To see all the details, check out the [release changelog](https://forge-allura.apache.org/p/allura/git/ci/master/tree/CHANGES).

#### Important Security Fix

CVE-2018-1299 Apache Allura directory traversal vulnerability

**Versions Affected:**<br>Apache Allura 1.7.0 and earlier

**Description:**<br>
Unauthenticated attackers may retrieve arbitrary files through the Allura web
application.  Some webservers used with Allura, such as Nginx, Apache/mod_wsgi
or paster may prevent the attack from succeeding.  Others, such as gunicorn do
not prevent it and leave Allura vulnerable.

**Mitigation:**<br>
Users of vulnerable webservers with Allura should upgrade to Allura 1.8.0
immediately.

**Credit:**<br>
This issue was discovered by Everardo Padilla Saca

#### Get 1.8.0

[Download Allura](https://www.apache.org/dyn/closer.cgi/allura/) and [install it](https://forge-allura.apache.org/docs/getting_started/installation.html) today.
