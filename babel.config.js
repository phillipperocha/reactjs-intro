module.exports = {
  // Quais presets do babel vamos utilizar, vamos colocar os dois que instalamos
  presets: [
    // Responsável por alterar as funcionalidades do javascript que o navegador
    // ainda não entende, como por exemplo import/export, arrow functions, classes, etc
    "@babel/preset-env",
    // Ele vai transformar as coisas que o navegador não entende do react, como o jsx por ex.
    "@babel/preset-react"
  ]
}