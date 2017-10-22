import fs from 'fs';

/**
 * Generates the default file structure for fistful projects.
 */
export default class FileStructureGenerator{

  /**
   * Get the folders of FileStructureGenerator.
   *
   * @return {string[]} folders of FileStructureGenerator.
   */
  get folders() {
    return this._folders;
  }

  /**
   * Set the folders of FileStructureGenerator.
   *
   * @param {string[]} value folders of FileStructureGenerator.
   */
  set folders(value) {
    this._folders = value;
  }

  /**
   * Get the files of FileStructureGenerator.
   *
   * @return {object[]} files of FileStructureGenerator.
   */
  get files() {
    return this._files;
  }

  /**
   * Set the files of FileStructureGenerator.
   *
   * @param {object[]} value files of FileStructureGenerator.
   */
  set files(value) {
    this._files = value;
  }
  
  /**
   * Builds the folder structure for fistful.
   *
   * @param {string} folderName Name of the folder to build.
   * @return {number} 1;
   */
  buildFolder(folderName){
    let fullPath = process.cwd() + '/' + folderName;

    try{
      fs.mkdirSync(fullPath);
    }catch(err){
      if('EEXIST' == err.code){
        console.log('Skipping creating ' + folderName + ' because folder already exists.');
      }else{
        throw new Error('Unable to create folder ' + folderName + '.' + err);
      }
    }

    return 1;
  }

  /**
   * Build a markdown file based on the content passed.
   *
   * @param {string} name Name of the file to be generated.
   * @param {string} path File path of the file to be generated.
   * @param {string} content Contents of the file to be generated.
   * @return {number} 1
   */
  buildFile(name, path, content){
    let fullFileName = path + '/' + name;

    fs.writeFileSync(fullFileName, content);
    
    return 1;
  }

  /**
   * Generate default project structure in current working directory.
   *
   * @return {number} 1
   */
  generate(){
    // Generate all folders
    this.folders.map((folder) => {
      this.buildFolder(folder);
    });

    // Generate all files.
    this.files.map((file) => {
      this.buildFile(file.name, file.path, file.content);
    });

    return 1;
  }
}
