'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  _extensionHandled() {
    return ['.ftl', '.scss', '.md', '.ts'];
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the terrific ${chalk.red('generator-genesis-cms')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'pageName',
        message: 'Page name ?'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this._extensionHandled().forEach(extension => {
      this.fs.copyTpl(
        this.templatePath(`index${extension}`),
        this.destinationPath(`generated/${this.props.pageName}/${this.props.pageName}${extension}`),
        {
          pageName: this.props.pageName
        }
      );
    });
  }

  install() {}
};
