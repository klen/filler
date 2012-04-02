clean:
	find $(CURDIR) -name "*.orig" -delete

test:
	chromium-browser game.html
