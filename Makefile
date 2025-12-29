install:
	npm ci

gendiff:
	node bin/gendiff.js

lint:
	npx eslint .

test:
	npx jest

test2:
	npm test -- --coverage --coverageProvider=v8

