import {readFile} from \'fs/promises\'
import {createHash} from \'crypto\'
const html = await readFile(\'index.html\',\'utf8\');
const style = html.match(/<style>([\s\S]*?)<\/style>/)[1];
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
for(const [n,c] of [[\'style\',style],[\'script\',script]]){
  console.log(n+\': sha256-\'+createHash(\'sha256\').update(c).digest(\'base64\'))
}
