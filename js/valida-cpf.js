function ValidaCpf(campo) {
  const cpf = campo.value.replace(/\.|-/g, "");
  validaNumerosRepetidos(cpf);

  console.log(cpf);
  console.log(validaNumerosRepetidos(cpf));
}

function validaNumerosRepetidos(cpf) {
  var arrayCPF = cpf.split("");
  var numerosRepetidos = true;
  for (let i = 1; i < arrayCPF.length; i++) {
    arrayCPF[i - 1] == arrayCPF[i]
      ? numerosRepetidos
      : (numerosRepetidos = false);
    if (!numerosRepetidos) {
      return numerosRepetidos;
    }
  }
  return numerosRepetidos;
}

export default ValidaCpf;
