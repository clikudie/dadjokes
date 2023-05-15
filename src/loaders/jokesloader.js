import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let jokesData = null;

async function loadJokes() {
    const fileContent = await fs.readFile(path.join(__dirname, 'data.json'), 'utf8');
    jokesData = JSON.parse(fileContent);
}

export { loadJokes, jokesData };