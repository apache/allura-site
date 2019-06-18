Title: Apache Allura 1.11.0 released
Date: 2019-06-18
Tags: release
Slug: allura-1.11.0
Summary: Version 1.11.0 of Allura released, with many fixes & improvements and a critical security fix.

#### New Features

Apache Allura 1.11.0 has been released, with new features including:

* Reaction support for comments:

![Reaction screenshot]({filename}/images/2019-reactions.png)

* Option to subscribe to forums and other types of threads, when posting

![Subscribe when posting screenshot]({filename}/images/2019-post-subscribe.png)

* @username mentions in markdown editor

![Username mentioning screenshot]({filename}/images/2019-usernames.png)

* Optional HaveIBeenPwned checks for password changes

#### Important Security Fix

CVE-2019-10085 Apache Allura XSS vulnerability in ticket user dropdown selector

Severity: Important<br>
Versions Affected: 1.10.0 and earlier

**Description:**<br>
A vulnerability exists for stored XSS on the user dropdown selector when
creating or editing tickets.  The XSS executes when a user engages with that
dropdown on that page.

**Mitigation:**<br>
Users of Allura should upgrade to Allura 1.11.0 immediately.

**Credit:**<br>
This issue was discovered by Bob "Wombat" Hogg


There are many smaller improvements and fixes as well.  To see all the details and upgrade instructions, check out the [release changelog](https://forge-allura.apache.org/p/allura/git/ci/master/tree/CHANGES).


#### Get 1.11.0

[Download Allura](http://www.apache.org/dyn/closer.cgi/allura/) and [install it](https://forge-allura.apache.org/docs/getting_started/installation.html) today.
