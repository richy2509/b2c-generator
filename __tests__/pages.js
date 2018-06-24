'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const pageName = 'landing';
const _fileTypes = [
  {
    type: 'freermarker',
    extension: '.ftl'
  },
  {
    type: 'Style',
    extension: '.scss'
  },
  {
    type: 'Markdown',
    extension: '.md'
  },
  {
    type: 'Scripts',
    extension: '.ts'
  }
];

describe('generator-genesis-cms:pages', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/pages'))
      .withPrompts({ pageName: pageName });
  });

  _fileTypes.forEach(fileType => {
    it('creates freemarker file', () => {
      assert.file([`generated/${pageName}/${pageName}${fileType.extension}`]);
      assert.fileContent(`generated/${pageName}/${pageName}${fileType.extension}`, pageName);
    });
  })
});
