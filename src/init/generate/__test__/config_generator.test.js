import ConfigGenerator from '../config_generator';
import fs from 'fs';

const TEST_NAME = 'testName';
const TEST_TAGLINE = 'testTagline';
const TEST_THEME = 'testTheme';
const TEST_FILENAME = 'test.json';

it('ConfigGenerator\'s function generate shall generate a configuration file for a fistful project when all fields required are populated.', (done) => {
  let generator = new ConfigGenerator();
  generator.name = TEST_NAME;
  generator.tagline = TEST_TAGLINE;
  generator.theme = TEST_THEME;
  generator.filename = TEST_FILENAME;
  let expectedResults = 'test.json';
  let results = generator.generate();
  expect(expectedResults).toEqual(results);
  let file = process.cwd() + '/' + TEST_FILENAME;
  fs.stat(file, (err, stats) => {
    if(err){throw new Error(err);}
    let contents = fs.readFile(file, 'utf8', (err, contents) => {
      if(err){throw new Error(err);}
      let expectedContents = `{
    "name": "testName",
    "tagline": "testTagline",
    "theme": "testTheme"
}`;
      expect(expectedContents).toEqual(contents);
      fs.unlink(file, (err) => {
        if(err){throw new Error("Unable to remove config file." + err);}
      });
      done()
    });
  });
});

it('ConfigGenerator\'s function generate shall fail throw an exception when the name property is not populated.', () => {
  let generator = new ConfigGenerator();
  generator.tagline = TEST_TAGLINE;
  generator.theme = TEST_THEME;
  generator.filename = TEST_FILENAME;
  expect(() => {
    generator.generate();
  }).toThrow(Error);
});

it('ConfigGenerator\'s function generate shall fail throw an exception when the tagline property is not populated.', () => {
  let generator = new ConfigGenerator();
  generator.name= TEST_NAME;
  generator.theme = TEST_THEME;
  generator.filename = TEST_FILENAME;
  expect(() => {
    generator.generate();
  }).toThrow(Error);
});

it('ConfigGenerator\'s function generate shall fail throw an exception when the theme property is not populated.', () => {
  let generator = new ConfigGenerator();
  generator.name= TEST_NAME;
  generator.tagline = TEST_TAGLINE;
  generator.filename = TEST_FILENAME;
  expect(() => {
    generator.generate();
  }).toThrow(Error);
});

it('ConfigGenerator\'s function generate shall fail throw an exception when the filename property is not populated.', () => {
  let generator = new ConfigGenerator();
  generator.name= TEST_NAME;
  generator.tagline = TEST_TAGLINE;
  generator.theme = TEST_THEME;
  expect(() => {
    generator.generate();
  }).toThrow(Error);
});
