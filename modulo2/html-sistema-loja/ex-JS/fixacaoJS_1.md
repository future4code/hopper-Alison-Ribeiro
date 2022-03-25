```js
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
let salarioFuncionario = 2000

let comissao = ((qtdeCarrosVendidos * 100) + (valorTotalVendas*0.05))
return salarioFuncionario + comissao
}
```