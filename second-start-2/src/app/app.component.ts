import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicketPanelComponent } from './components/ticket-panel/ticket-panel.component';
import { Ticket, TicketStatus } from './models/ticket.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TicketPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = '';

  ticketList: Ticket[] = [
    {
      id: 1,
      title: 'Mouse doesnt work',
      description: 'My mouse stopped working. Please help!',
      assignee: 'Jon Doe',
      status: TicketStatus.NEW,
    },
    {
      id: 2,
      title: 'Monitor doesnt work',
      description: 'My monitor stopped working. Please help!',
      assignee: 'Jane Doe',
      status: TicketStatus.NEW,
    },
    {
      id: 3,
      title: 'Keyboard doesnt work',
      description:
        'My keyboard stopped working. I spilled soda on it. Please help!',
      assignee: 'Jack Smith',
      status: TicketStatus.IN_PROGRESS,
    },
    {
      id: 4,
      title: 'Car doesnt work',
      description: 'My car stopped working. I spilled soda on it. Please help!',
      assignee: 'Jon Doe',
      status: TicketStatus.IN_PROGRESS,
    },
    {
      id: 5,
      title: 'Computer doesnt work',
      description:
        'My computer stopped working. It fell from the third floor! Please help!',
      assignee: 'Nick Jacobs',
      status: TicketStatus.DONE,
    },
  ];

  ngOnInit(): void {
    this.title = `Initialized on init`;
  }
}
