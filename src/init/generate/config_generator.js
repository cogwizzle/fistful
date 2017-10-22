import fs from 'fs';

/**
 * Generates a configurtion file for the project.
 */
export default class ConfigGenerator {

  /**
   * Get the name of ConfigGenerator.
   *
   * @return {string} name of ConfigGenerator.
   */
  get name() {
    return this._name;
  }

  /**
   * Set the name of ConfigGenerator.
   *
   * @param {string} value name of ConfigGenerator.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Get the tagline of ConfigGenerator.
   *
   * @return {string} tagline of ConfigGenerator.
   */
  get tagline() {
    return this._tagline;
  }

  /**
   * Set the tagline of ConfigGenerator.
   *
   * @param {string} value tagline of ConfigGenerator.
   */
  set tagline(value) {
    this._tagline = value;
  }

  /**
   * Get the theme of ConfigGenerator.
   *
   * @return {string} theme of ConfigGenerator.
   */
  get theme() {
    return this._theme;
  }

  /**
   * Set the theme of ConfigGenerator.
   *
   * @param {string} value theme of ConfigGenerator.
   */
  set theme(value) {
    this._theme = value;
  }

  /**
   * Get the filename of ConfigGenerator.
   *
   * @return {string} filename of ConfigGenerator.
   */
  get filename() {
    return this._filename;
  }

  /**
   * Set the filename of ConfigGenerator.
   *
   * @param {string} value filename of ConfigGenerator.
   */
  set filename(value) {
    this._filename = value;
  }

  /**
   * Generate a configuration file.
   *
   * @return {string} configuration file that was generated.
   */
  generate(){
    if(this.name && this.tagline && this.theme && this.filename){
      let config = {
        name : this.name,
        tagline : this.tagline,
        theme : this.theme
      };
      fs.writeFileSync(process.cwd() + '/' + this.filename, JSON.stringify(config, null, 4));
      return this.filename;
    }else{
      throw new Error("Failed to generate a config file because all required properties were not set.");
    }
  }
}

module.exports = ConfigGenerator;
