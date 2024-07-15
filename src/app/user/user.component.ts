import { Component, Input, input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    // @Input({required: true}) avatar!: string; //the exclamation simply tells typescript that we know that this will definetely be to some value even if though typescript can't see it from this code
    // @Input({required:true}) name!: string;

    avatar = input.required<string>(); //to tell angular that the value will be set outside this component and it will be required we use: avarar = input.required<string>();
    name = input.required<string>();


    get imagePath() {
      return '/users/' + this.avatar
    }
  onSelectUser() {}
}
