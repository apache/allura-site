We're using [Pelican][1] to generate static site.
All source files are placed in the `_src/` directory.
Generated content is placed under root directory.

# Bootstrapping pelican

    ~$ mkvirtualenv allura-site
    ~$ pip install pelican markdown

# Working on site

    ~$ cd _src

In two separate terminal windows run the following commands:

    ~$ make regenerate  # watch source files and regenerate site
    ~$ make serve       # serve generated site at http://localhost:8000

When changes are looking good - commit them (including generated files).

[1]: http://blog.getpelican.com/
