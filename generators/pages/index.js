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
    this.fs.copyTpl(
      this.templatePath('index.ftl'),
      this.destinationPath(`generated/${this.props.pageName}/${this.props.pageName}.ftl`),
      {
        pageName: this.props.pageName
      }
    );
    this.fs.copyTpl(
      this.templatePath('index.scss'),
      this.destinationPath(`generated/${this.props.pageName}/${this.props.pageName}.scss`),
      {
        pageName: this.props.pageName
      }
    );
    this.fs.copyTpl(
      this.templatePath('index.md'),
      this.destinationPath(`generated/${this.props.pageName}/${this.props.pageName}.md`),
      {
        pageName: this.props.pageName
      }
    );
    this.fs.copyTpl(
      this.templatePath('index.ts'),
      this.destinationPath(`generated/${this.props.pageName}/${this.props.pageName}.ts`),
      {
        pageName: this.props.pageName
      }
    );
  }

  install() {}
};
