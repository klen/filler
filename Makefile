clean: _main.js
	rm -f _main.js
	rm -rf libs

static:
	zeta $(CURDIR)

test:
	chromium-browser game.html
