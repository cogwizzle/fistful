import FileStructureGenerator from './file_structure_generator';

/**
 * File structure generator with default values built in.
 */
export default class DefaultFileStructureGenerator extends FileStructureGenerator{

  /**
   * Default constructor.
   */
  constructor(){
    super();
    this._folders = [
      '_post',
      '_pages'
    ];
    this._files = [
      {
        'name' : '10-22-2017_Example.md',
        'path' : process.cwd() + '/_post',
        'content' : `#Welcome to Fistful!
Welcome to your Fistful static site.  This is an example post.  Post are contained inside of the *_post* directory of your project.  Post require the name to start with the date formated as mm-dd-yyyy followed by and underscore (_) and then the name of the post.  The name of the post can be separate words, however, it must have an underscore to represent a space in the title of the post.  Here are a few examples of valid post titles.

 * 10-22-2017_Example.md
 * 10-22-2017_Hello_World.md`
      },
      {
        'name' : 'About.md',
        'path' : process.cwd() + '/_pages',
        'content' : `#About Me
This is a placeholder for an about me page.  This page should be populated with information about the owner of the site.  More pages can be added by adding a markdown file to the _pages directory.  Pages use the file name as the name of the page.  Any spaces in the name should be seperated by underscores.  Here are some examples of valid page titles.

 * About.md
 * About_Us.md`
      }
    ];
  }
}
