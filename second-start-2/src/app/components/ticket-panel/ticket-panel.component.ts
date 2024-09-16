import { Component, input, OnInit, signal } from '@angular/core';
import { TicketDetailsComponent } from '../ticket-details/ticket-details.component';
import { TicketComponent } from '../ticket/ticket.component';
import { Ticket } from '../../models/ticket.model';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-ticket-panel',
  standalone: true,
  imports: [TicketDetailsComponent, TicketComponent, NgClass],
  templateUrl: './ticket-panel.component.html',
  styleUrl: './ticket-panel.component.scss',
})
export class TicketPanelComponent implements OnInit {
  ticketList = input<Ticket[]>([]);
  filteredTickets = signal<Ticket[]>([]);
  selectedTicket = signal<Ticket>(null);
  isDetailsShown = signal(false);

  ngOnInit(): void {
    this.filteredTickets.set(this.ticketList());
  }

  onSelectTicket(ticket: Ticket) {
    this.isDetailsShown.set(true);
    console.log(`hello`);
    this.selectedTicket.set(ticket);
    console.log(this.selectedTicket());
  }
}
