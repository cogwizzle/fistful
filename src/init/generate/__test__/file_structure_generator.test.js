import fs from 'fs';
import FileStructureGenerator from '../file_structure_generator';

/**
 * Test the FileStructureGenerator class.
 */

const TEST_FOLDER_NAME = 'testFolderName';
const TEST_FILE_NAME = 'testFileName';
const TEST_FILE_CONTENT = 'testContent';

it('FileStructureGenerator\'s function buildFolder shall create a folder in the current working directories path.', (done) => {
  let generator = new FileStructureGenerator();
  let results = generator.buildFolder(TEST_FOLDER_NAME);
  expect(results).toBeTruthy();
  fs.stat(process.cwd() + '/' + TEST_FOLDER_NAME, (err, stats) => {
    if(err){throw new Error(err);}
    expect(stats.isDirectory()).toBeTruthy();
    fs.rmdir(process.cwd() + '/' + TEST_FOLDER_NAME, (err) => {
      if(err){throw new Error("There was a problem removing test directory." + err);}
      done();
    });
  });
});

it('FileStructureGenerator\'s function buildFile shall create a markdown file in a specified directory.', (done) => {
  let generator = new FileStructureGenerator();
  let results = generator.buildFile(TEST_FILE_NAME, process.cwd(), TEST_FILE_CONTENT);

  expect(results).toBeTruthy();
  fs.stat(process.cwd() + '/' + TEST_FILE_NAME, (err, stats) => {
    if(err){throw new Error(err);}
    expect(stats.isFile()).toBeTruthy();
    fs.readFile(process.cwd() + '/' + TEST_FILE_NAME, 'utf8', (err, data) => {
      if(err){throw new Error(err);}
      expect(data).toEqual(TEST_FILE_CONTENT);
      fs.unlink(process.cwd() + '/' + TEST_FILE_NAME, (err) => {
        if(err){throw new Error("There was a problem removing test file." + err);}
        done();
      });
    });
  });
});

it('FileStructureGenerator\'s function generate shall create a file and folder for each file and folder in the list.', (done) => {
  let generator = new FileStructureGenerator();
  let path = process.cwd() + '/' + TEST_FOLDER_NAME;
  let fullPathFile = path + '/' + TEST_FILE_NAME;

  generator.folders = [TEST_FOLDER_NAME];
  generator.files = [{'name' : TEST_FILE_NAME, 'path' : path, 'content' : TEST_FILE_CONTENT}];

  let results = generator.generate();

  expect(results).toBeTruthy();
  fs.stat(path, (err, stats) => {

    if(err){throw new Error(err)}
    expect(stats.isDirectory()).toBeTruthy();

    fs.stat(path + '/' + TEST_FILE_NAME, (err, stats) => {

      if(err){throw new Error(err);}
      expect(stats.isFile()).toBeTruthy();

      fs.readFile(fullPathFile, 'utf8', (err, data) => {

        if(err){throw new Error(err);}
        expect(data).toEqual(TEST_FILE_CONTENT);

        fs.unlink(fullPathFile, (err) => {

          if(err){throw new Error("There was a problem removing test file." + err);}
          fs.rmdir(process.cwd() + '/' + TEST_FOLDER_NAME, (err) => {
            if(err){throw new Error("There was a problem removing test directory." + err);}
            done();
          });
        });
      });
    });
  });
});
