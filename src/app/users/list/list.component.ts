import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListUsersComponent implements OnInit {
  collection = {count: 1000, data: []};
  config = {
    itensPerPage: 10,
    currentPaga: 1,
    totalItens: this.collection.count,
  };
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public responsive: boolean = true;
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Próximo'};

  constructor() { }

  ngOnInit(): void {
    this.populateElements();
  }

  populateElements() {
    for(let i = 0; i < this.collection.count; i++){
      this.collection.data.push({
        nome: 'teste' + i,
        email: 'email' + i + '@contactura.com',
        perfil: 'admin'
        });
      }
    }

  onPageChange(event){
  this.config.currentPaga = event;
  }
}