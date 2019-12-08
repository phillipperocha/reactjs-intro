const path = require('path')

module.exports = {
  // precisamos configurar o nosso arquivo de entrada
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // Onde ele vai jogar o bundle, o código transpilado pelo webpack
  // Para isso criaremos uma pasta chamada public para jogar o bundle
  output: {
    path: path.resolve(__dirname, 'public'),
    // Nome do arquivo que ficará
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  // criaremos uma configuração chamada models e aqui teremos regras
  module: {
    // nas regras diremos para cada tipo de arquivo, qual regra vai ser utilizada
    rules: [
      {
        // Ou seja, toda vez que encontrarmos um arquivo javascript, o babel deve transpilar esse arquivo
        // Ele vai entrar caso se encaixe nessa expressão regular abaixo
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }

}