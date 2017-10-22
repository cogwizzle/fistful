import ConfigGenerator from './config_generator';

/**
 * Builder for config generators.
 */
export default class ConfigGeneratorBuilder{

  /**
   * Default constructor.
   */
  constructor(){
    this._filename = "config.json";
    this._theme = "fire";
    this._name;
    this._tagline;
  }

  /**
   * Get the name of ConfigGeneratorBuilder.
   *
   * @return {string} name of ConfigGeneratorBuilder.
   */
  get name() {
    return this._name;
  }

  /**
   * Set the name of ConfigGeneratorBuilder.
   *
   * @param {string} value name of ConfigGeneratorBuilder.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Set the name of ConfigGeneratorBuilder.
   * @param {string} value Name of ConfigGeneratorBuilder to be set.
   *
   * @return {ConfigGeneratorBuilder} This instance of ConfigGeneratorBuilder.
   */
  withName(value) {
    this.name = value;
    return this;
  }

  /**
   * Get the tagline of ConfigGeneratorBuilder.
   *
   * @return {string} tagline of ConfigGeneratorBuilder.
   */
  get tagline() {
    return this._tagline;
  }

  /**
   * Set the tagline of ConfigGeneratorBuilder.
   *
   * @param {string} value tagline of ConfigGeneratorBuilder.
   */
  set tagline(value) {
    this._tagline = value;
  }

  /**
   * Set the tagline of ConfigGeneratorBuilder.
   * @param {string} value Tagline of ConfigGeneratorBuilder to be set.
   *
   * @return {ConfigGeneratorBuilder} This instance of ConfigGeneratorBuilder.
   */
  withTagline(value) {
    this.tagline = value;
    return this;
  }

  /**
   * Get the theme of ConfigGeneratorBuilder.
   *
   * @return {string} theme of ConfigGeneratorBuilder.
   */
  get theme() {
    return this._theme;
  }

  /**
   * Set the theme of ConfigGeneratorBuilder.
   *
   * @param {string} value theme of ConfigGeneratorBuilder.
   */
  set theme(value) {
    this._theme = value;
  }

  /**
   * Set the theme of ConfigGeneratorBuilder.
   * @param {string} value Theme of ConfigGeneratorBuilder to be set.
   *
   * @return {ConfigGeneratorBuilder} This instance of ConfigGeneratorBuilder.
   */
  withTheme(value) {
    this.theme = value;
    return this;
  }

  /**
   * Get the filename of ConfigGeneratorBuilder.
   *
   * @return {string} filename of ConfigGeneratorBuilder.
   */
  get filename() {
    return this._filename;
  }

  /**
   * Set the filename of ConfigGeneratorBuilder.
   *
   * @param {string} value filename of ConfigGeneratorBuilder.
   */
  set filename(value) {
    this._filename = value;
  }

  /**
   * Set the filename of ConfigGeneratorBuilder.
   * @param {string} value Filename of ConfigGeneratorBuilder to be set.
   *
   * @return {ConfigGeneratorBuilder} This instance of ConfigGeneratorBuilder.
   */
  withFilename(value) {
    this.filename = value;
    return this;
  }

  /**
   * Validates if the config generator can be built.
   *
   * @param onSuccess Function called when all requirements are met to build ConfigGenerator.
   * @param onError Function called when all requirements are not met to build ConfigGenerator.
   * @return Success/Error function results.
   */
  validate(onSuccess, onError){
    // Fields to validate exists.
    let validationFields = [
      'name',
      'tagline',
      'theme',
      'filename'
    ];

    let errorMessage = ""; // Initialize blank errorMessage.

    // Loop through all fields and ensure that all required fields exists.
    validationFields.map((field) => {
      if(!this[field]){
        errorMessage += field + " is required to build a ConfigGenerator.\n";
      }
    });

    // If there are no errors.
    if(!errorMessage){

      // Call success function.
      return onSuccess();

    // If errors exists.
    }else{

      // Call the error function.
      return onError("Failed to build ConfigGenerator.\n" + errorMessage);
    }
  }

  /**
   * Build config generator builder.
   *
   * @return {ConfigGenerator} ConfigGenerator.
   */
  build(){
    return this.validate(() => {
      let generator = new ConfigGenerator();
      generator.name = this.name;
      generator.tagline = this.tagline;
      generator.theme = this.theme;
      generator.filename = this.filename;
      return generator;
    },
    (err) => {
      throw new Error(err);
    });
  }
}
