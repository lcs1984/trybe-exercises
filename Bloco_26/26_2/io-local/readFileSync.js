// Se nessa mesma função eu utilizasse o fs.readFile não teria resultado,
// pois leva-se um tempo para ler o arquivo. 
// Com isso, ou se utiliza o fs.readFile com promise ou o fs.readFileSync

const fs = require('fs');
const { isSymbol } = require('util')

const nomeDoArquivo = 'meu-arquivo.txt';

try{
    const data = fs.readFileSync(nomeDoArquivo,'utf-8');
    console.log(data);
} catch {
    console.error(`Erro ao ler o arquivo: ${err.path}`);
    console.log(err);
}