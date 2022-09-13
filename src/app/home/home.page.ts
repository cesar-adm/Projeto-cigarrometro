import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
CigarrosPorDia: number;
AnosFumando: number;
diasPerdido: number = 0;
  constructor() {}

  calcular(){

    
    let cigarrosPorAno = this.CigarrosPorDia * 365;
    let totalCigarros = cigarrosPorAno * this.AnosFumando;
    let minutosPerdidos = totalCigarros * 10;
    let horasPerdidas = minutosPerdidos / 60;
    this.diasPerdido = horasPerdidas / 24;

  }
}
