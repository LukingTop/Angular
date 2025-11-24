import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-aluno', 
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aluno.html',
  styleUrls: ['./aluno.css']
})
export class AlunoComponent {

  dadosAluno = {
    nome: 'Ana Clara Silva',
    matricula: '2025.1.0045',
    foto: 'https://cdn-icons-png.flaticon.com/512/201/201634.png'
  };

  curso: string = 'Ciência da Computação';

  matriculaAtiva: boolean = true;

  alternarMatricula(): void {
    this.matriculaAtiva = !this.matriculaAtiva;
  }

  getCorStatus(): string {
    return this.matriculaAtiva ? 'green' : 'red';
  }
}