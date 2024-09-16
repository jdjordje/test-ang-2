import { Component, input, output } from '@angular/core';
import { Ticket } from '../../models/ticket.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss',
})
export class TicketComponent {
  ticket = input.required<Ticket>();

  ticketOutput = output<Ticket>();

  onTicketSelect() {
    this.ticketOutput.emit(this.ticket());
    console.log(this.ticket().title);
    console.log(`emitted ticket`);
  }
}
