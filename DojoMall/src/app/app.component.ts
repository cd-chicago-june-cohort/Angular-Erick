import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail!';
  emailArray = [
    {email: 'erick_ruiz23@yahoo.com', importance: true, subject: 'Coding Dojo', content: 'Keep on coding ninja!'},
    {email: 'tania_adame08@yahoo.com', importance: true, subject: 'School', content: 'Keep your grades up!'},
    {email: 'sam@loser.com', importance: false, subject: 'Food', content: 'Lets get White Castle!'},
  ]
}
