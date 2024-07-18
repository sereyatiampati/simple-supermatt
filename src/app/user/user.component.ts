import { Component, computed, EventEmitter, Input, input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //using Input decorator 
    @Input({required: true}) avatar!: string; //the exclamation simply tells typescript that we know that this will definetely be to some value even if though typescript can't see it from this code
    @Input({required:true}) name!: string;
    @Output() select = new EventEmitter();


     
    //using input signal function
    // avatar = input.required<string>(); //to tell angular that the value will be set outside this component and it will be required we use: avarar = input.required<string>();
    // name = input.required<string>();
    // imagePath = computed(() => '/users/'+ this.avatar())

    get imagePath() {
      return '/users/' + this.avatar
    }

  onSelectUser() {

  }
}
 