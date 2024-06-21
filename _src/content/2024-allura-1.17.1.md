Title: Apache Allura 1.17.1 released, with security fix
Date: 2024-06-21
Tags: release
Slug: allura-1.17.1
Summary: Version 1.17.1 of Allura released, with security fix

#### What's New?

Apache Allura 1.17.1 has been released.  It includes a security fix.

For full details of all the changes and fixes, see the [CHANGES file](https://forge-allura.apache.org/p/allura/git/ci/master/tree/CHANGES). 

#### Security Fix

CVE-2024-38379 Stored authenticated XSS

Severity: Moderate<br>
Versions Affected: 1.4.0 through 1.17.0

**Description:**<br>
Apache Allura's neighborhood settings are vulnerable to a stored XSS attack.  Only neighborhood admins can access these settings, so the scope of risk is limited to configurations where neighborhood admins are not fully trusted.

**Mitigation:**<br>
Users of Allura should upgrade to Allura 1.17.1.

If you are unable to upgrade, review your neighborhood admins and ensure they are all fully trusted users.

**Credit:**<br>
This issue was discovered by Ömer "WASP" Akincir.


#### Breaking Changes for Custom Extensions

[#8556](https://forge-allura.apache.org/p/allura/tickets/8556/) deprecated the `has_access(..)()` syntax in 1.17.0, and support for it is now removed.  Custom extensions using this syntax will need to remove the second `()` so that it is just `has_access(..)`.  

#### Upgrade Instructions

If using docker, rebuild the allura image and restart containers.

Feel free to ask any questions on the [dev mailing list](https://lists.apache.org/list.html?dev@allura.apache.org).

#### Get 1.17.1

[Download Allura](//allura.apache.org/download.html) and [install it](https://forge-allura.apache.org/docs/getting_started/installation.html) today.
