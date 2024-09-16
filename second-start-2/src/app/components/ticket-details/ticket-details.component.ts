import { Component, input } from '@angular/core';
import { Ticket } from '../../models/ticket.model';
import { CommonModule, NgClass } from '@angular/common';
import { TicketComponent } from '../ticket/ticket.component';

@Component({
  selector: 'app-ticket-details',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.scss',
})
export class TicketDetailsComponent {
  selectedTicket = input<Ticket>(null);
}
