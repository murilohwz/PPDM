// Classe Aluno
class Aluno {
  // Atributos públicos
  String nome;
  double nota1;
  double nota2;

  // Construtor
  Aluno(this.nome, this.nota1, this.nota2);

  // Método para calcular a média
  double calcularMedia() {
    return (nota1 + nota2) / 2;
  }
}

void main() {
  // Criando uma lista de alunos
  List<Aluno> alunos = [
    Aluno('Julio Botafacil', 9.5, 9.0),
    Aluno('Isabele Agarra', 5.5, 6.5),
    Aluno('Kaique Primissia', 8.0, 8.5),
    Aluno('Julia Mattos', 2.0, 1.5)
  ];

  // Calculando a média e exibindo alunos aprovados
  for (var aluno in alunos) {
    double media = aluno.calcularMedia();
    if (media >= 7.0) {
      print('${aluno.nome} - Aprovado, Parabéns! Média: ${media.toStringAsFixed(2)}');
    } else {
      print('${aluno.nome} - Reprovado, Decepcionante... Média: ${media.toStringAsFixed(2)}');
    }
  }
}
