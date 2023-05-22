let numero = prompt("Digite um número inteiro entre 1 e 365 : ")

if (numero < 1) {
    return prompt("ERRO: O número digitado é menor que 0. Atualize a página e tente novamente.");
} else if (numero > 365) {
    return prompt("ERRO: O número digitado é menor que 0. Atualize a página e tente novamente.");
} else if (!Number.isInteger(numero)) {
    return prompt("ERRO: O número digitado não é inteiro. Atualize a página e tente novamente.");
} else {
    if (numero <= 31) {
        return prompt(numero + " de janeiro de 2023")
    } else if (31 < numero <= 59) {
        numero = numero - 31;
        return prompt(numero + " de fevereiro de 2023")
    } else if (59 < numero <= 90) {
        numero = numero - 59;
        return prompt(numero + " de março de 2023")
    } else if (90 < numero <= 120) {
        numero = numero - 90;
        return prompt(numero + " de abril de 2023")
    } else if (120 < numero <= 151) {
        numero = numero - 118;
        return prompt(numero + " de maio de 2023")
    } else if (151 < numero <= 181) {
        numero = numero - 151;
        return prompt(numero + " de junho de 2023")
    } else if (181 < numero <= 212) {
        numero = numero - 181;
        return prompt(numero + " de julho de 2023")
    } else if (212 < numero <= 243) {
        numero = numero - 212;
        return prompt(numero + " de agosto de 2023")
    } else if (243 < numero <= 273) {
        numero = numero - 243;
        return prompt(numero + " de setembro de 2023")
    } else if (273 < numero <= 304) {
        numero = numero - 273;
        return prompt(numero + " de outubro de 2023")
    } else if (304 < numero <= 334) {
        numero = numero - 304;
        return prompt(numero + " de novembro de 2023")
    } else if (334 < numero <= 365) {
        numero = numero - 334;
        return prompt(numero + " de dezembro de 2023")
    };    
};