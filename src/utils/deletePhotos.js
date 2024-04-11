import fs from 'fs';
import { promisify } from 'util';
import path from 'path'
const __dirname = path.resolve()
const unlinkAsync = promisify(fs.unlink);

export const deleteMultipleFiles = async (filesPath , filesName) => {
  try {
    // Use Promise.all to delete files concurrently
    await Promise.all(filesName.map(async (fileName) => {
      await unlinkAsync( path.join(__dirname, 'public', filesPath,fileName));
    }));
  } catch (err) {
    console.error('Error deleting files:', err);
  }
};
