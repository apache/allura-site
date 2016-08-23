Title: Apache Allura 1.5.0 released
Date: 2016-08-23
Tags: release
Slug: allura-1.5.0
Summary: Version 1.5.0 of Allura: updated icons, editor enhancements, admin functionality, and more.

#### New Features

Apache Allura 1.5.0 has been released.  Major new features include a guided tour after project registration,
improved design for discussions and their attachments, and various usability improvements for merge requests.  Many
of the changes came from work done during Google Summer of Code.

See our [Google Summer of Code Summary]({filename}/2016-allura-gsoc-16-summary.md) for details on all those changes.

There are lots of other fixes and improvements, see the [changelog](https://forge-allura.apache.org/p/allura/git/ci/rel/1.5.0/~/tree/CHANGES) for details.

#### Upgrade notes

No changes are required unless you wish to use the new rate limiting config.  If so, copy all the new
"rate_limits" settings from `development.ini` into your `.ini` file and configure appropriate values.  Then run
`paster ensure_index development.ini`.  Or if you are using Docker, run:
`docker-compose run taskd paster ensure_index docker-dev.ini`

#### Get 1.5.0

[Download Allura](http://www.apache.org/dyn/closer.cgi/allura/) and [install it](https://forge-allura.apache.org/docs/getting_started/installation.html) today.
