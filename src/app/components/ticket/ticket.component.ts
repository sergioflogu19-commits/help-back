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
    this.tiket = new TicketModel();
    this.tickets.forEach((value) => {
      if (value.id_ticket == id) {
        this.tiket = value;
      }
    });
    this.modalService.open(content, { size: 'lg' });
  }

}
