Title: New admin mode now available!
Date: 2016-01-14
Tags: feature
Slug: admin-toolbar
Summary: Updating your Allura projects has never been easier


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When you use the same tools everyday, it is easy to evaluate how you spend most of your time. Even more apparent are the steps and processes that slow you down. Since all of us on the development team use these tools ourselves, we spent the end of the year discussing what processes have been slowing us down. Have you ever tried to rename a repo or give a user permission to moderate your project’s discussions? Did you even know you could do these things?

_Exactly_. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As we realized where the hitch in the workflow was, we knew there was a more elegant solution. So we set out to build a new admin mode for all projects’ navigation bars. It provides easy access to add new tools to your project, as well as rename, reorder, configure, and delete any tools.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To take this idea from concept to completion, we needed to modernize our frontend tooling. By leveraging Babel we were able to make use of the latest features of Javascript ES2015 and incorporate React and JSX into our workflow. We also wanted to ensure we maintained a clean, consistent style in our frontend code, so we started implementing ESLint. To tie it all together, we then chose Broccoli for our build system because of its incremental rebuilding and its incredibly fast compile times. By utilizing all these resources, we were able to create a new toolbar that approaches customization in a modern way and, as a byproduct, made future frontend endeavours more interesting to work on. 


#### Installing a New Tool

<img src="{filename}/images/toolbar/install.gif" class="drop-shadow" width="815" />

The new Admin Toolbar is easy to find and use. There is a “Add New” link on every page, letting you install a new tool from anywhere.  With improved features like tooltips and real-time validation, the updated experience is more intuitive than ever.

#### Tool Options

<img src="{filename}/images/toolbar/edit.gif" class="drop-shadow" width="815" />

To change any tool settings, use the Lock/Unlock button on the right side of the bar.  This feature makes these options accessible when you need them and inconspicuous when you don’t.  And the gear icon opens up a context menu to manage your tools right from the interface, such as renaming, deleting, or setting specific options.  So you’re always only a few clicks away from all your tool settings.

#### Reordering Tools

<img src="{filename}/images/toolbar/reorder.gif" class="drop-shadow" width="815" />

Some key tools are anchored in place, but many tools are movable by dragging and dropping to the desired location.  Just the unlock button, and then drag and drop them into the order you want.  You can even customize the order within sub-menu dropdowns using this method.


#### Grouping Similar Tools into Dropdowns

<img src="{filename}/images/toolbar/grouping.gif" class="drop-shadow" width="815"/>

When you have multiple tools of the same type, the Grouping Threshold option is available.  It determines if they will all fit in the navigation bar, or automatically be grouped into a dropdown.


Go check it out!