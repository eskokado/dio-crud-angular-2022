import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 0;
  text = 'hello world!';
  date = new Date;
  pessoa = {
    nome: 'Edson Shideki Kokado',
    idade: '53',
    profissao: 'Programador'
  };
  nomes = ['Edson', 'João', 'shideki'];
  nomesPromisse: any;
  nomes$: any;

  constructor(private upperCasePipe: UpperCasePipe) {
  }

  ngOnInit(): void {
    // this.text = this.upperCasePipe.transform(this.text)
  }

  mudaValor() {
    this.text = 'novo texto';
  }

  add(text: string) {
    this.nomes.push(text);
  }

  addToPromisse(text: string) {
    this.nomes.push(text);
    this.nomesPromisse = new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.nomes), 2000)
    })
  }

  addToObservable(text: string) {
    this.nomes.push(text);
    this.nomes$ = interval(2000).pipe(map(valor => this.nomes));
  }

}