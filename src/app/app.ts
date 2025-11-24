import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoComponent } from './aluno/aluno';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AlunoComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'portal-aluno';
}

export { AppComponent as App };