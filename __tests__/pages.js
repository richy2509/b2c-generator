'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const pageName = 'landing';

describe('generator-genesis-cms:pages', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/pages'))
      .withPrompts({ pageName: pageName });
  });

  it('creates freemarker file', () => {
    assert.file([`generated/${pageName}/${pageName}.ftl`]);
    assert.fileContent(`generated/${pageName}/${pageName}.ftl`, pageName);
  });
  it('creates scss file', () => {
    assert.file([`generated/${pageName}/${pageName}.scss`]);
    assert.fileContent(`generated/${pageName}/${pageName}.scss`, pageName);
  });
  it('creates markdwon file', () => {
    assert.file([`generated/${pageName}/${pageName}.md`]);
    assert.fileContent(`generated/${pageName}/${pageName}.md`, pageName);
  });
  it('creates typescript file', () => {
    assert.file([`generated/${pageName}/${pageName}.ts`]);
    assert.fileContent(`generated/${pageName}/${pageName}.ts`, pageName);
  });
});
