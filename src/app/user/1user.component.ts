import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


const randomIndex=Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);


  //with signal -angular automatically analyses whether you are reading some signal value inside that of the function that you passed to computed if thats the case angular again  sets up a subscription to that signal that being used there- so to the selected user signal in this case and whenever that new signal receives  a new value and only then angular wil recompute the image path here
  //basically ensures imagePath is tracked automatically since it is of type signal(can be seen on hovering on it)
  imagePath = computed(() => '/users/'+ this.selectedUser().avatar)

  //without signal
  // get imagePath() { 
  //   return '/users/' + this.selectedUser.avatar
  // }

  onSelectUser() {
    console.log("Clicked!");
    const randomIndex=Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
