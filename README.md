We're using [Pelican][1] to generate static site.
All source files are placed in the `_src/` directory.
Generated content is placed under root directory.

# Bootstrapping pelican

    ~$ python -m venv ../allura-site-venv
    ~$ source ../allura-site-venv/bin/activate
    ~$ pip install pelican markdown

# Working on site

    ~$ cd _src
    ~$ RELATIVE=1 make regenerate  # only use RELATIVE for local dev

Then open the html files directly, or run a little server with:

    ~$ make serve       # serve generated site at http://localhost:8000

When changes are looking good - commit them (including generated files).

    ~$ make html  # for a single publish 

[1]: http://blog.getpelican.com/
