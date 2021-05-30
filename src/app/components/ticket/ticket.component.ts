import { Component, OnInit } from '@angular/core';
import {TicketService} from '../../services/ticket.service';
import {TicketModel} from '../../models/ticket.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  public tickets: TicketModel[] = [];
  public tiket: TicketModel;
  public usuarioTicket: string;
  public fechaTicket: string;

  constructor(
    private ticketService: TicketService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.listado();
  }

  private listado(){
    this.ticketService.listado().subscribe((resp: any) => {
      if (resp.respuesta){
        this.tickets = resp.tickets;
      }
    });
  }

  public detalle(id: number, content){
    let cust = {
      usuario: localStorage.getItem('usuario'),
      idTicket: id
    };
    this.ticketService.elegir(cust).subscribe((resp: any) => {
      if (resp.respuesta){
        this.usuarioTicket = resp.usuario;
        this.fechaTicket = resp.fechaTicket;
        this.tiket = new TicketModel();
        this.tickets.forEach((value) => {
          if (value.id_ticket == id) {
            this.tiket = value;
          }
        });
        this.modalService.open(content, { size: 'lg' });
      }
    });
  }

  public tomarTicket(id: number){
    let cust = {
      usuario: localStorage.getItem('usuario'),
      idTicket: id
    };
    this.ticketService.tomar(cust).subscribe((resp: any) => {
      if (resp.respuesta){
        this.listado();
        this.modalService.dismissAll();
      }
    });
  }

  public terminarTicket(id: number){
    let cust = {
      idTicket: id
    };
    this.ticketService.terminar(cust).subscribe((resp: any) => {
      if (resp.respuesta){
        this.listado();
        this.modalService.dismissAll();
      }
    });
  }
}


