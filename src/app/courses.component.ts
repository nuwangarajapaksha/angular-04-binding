import { Component } from '@angular/core';

//01 Property Binding
// @Component({
//   selector: 'courses',
//   template: `
//     <h2>{{ title }}</h2>
//     <h2 [textContent]="title"></h2>
//     <img src="{{ imageUrl }}" />
//     <img [src]="imageUrl" />
//   `,
// })
// export class CoursesComponent {
//   title = 'list of courses';
//   imageUrl =
//     'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages&psig=AOvVaw1JkOBDOWjZJXFUc7JeLFPx&ust=1654231544061000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLi--fD6jfgCFQAAAAAdAAAAABAD';
// }

//02 Attribute Binding
// @Component({
//   selector: 'courses',
//   template: `
//     <img [src]="imageUrl" />
//     <table>
//       <tr>
//         <td [attr.colspan]="colSpan"></td>
//       </tr>
//     </table>
//   `,
// })
// export class CoursesComponent {
//   imageUrl = '';
//   colSpan = 2;
// }

//03 Bootstarp
// @Component({
//   selector: 'courses',
//   template: ` <button class="btn btn-primary">Save</button> `,
// })
// export class CoursesComponent {}

//04 Class Binding
// @Component({
//   selector: 'courses',
//   template: `
//     <button class="btn btn-primary" [class.active]="isActive">Save</button>
//   `,
// })
// export class CoursesComponent {
//   isActive = true;
// }

//05 Style Binding
// @Component({
//   selector: 'courses',
//   template: `
//     <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
//   `,
// })
// export class CoursesComponent {
//   isActive = false;
// }

//06 Event Binding
// @Component({
//   selector: 'courses',
//   template: `
//     <div (click)="onDivClicked()">
//       <button (click)="onSave($event)">Save</button>
//     </div>
//   `,
// })
// export class CoursesComponent {
//   onDivClicked() {
//     console.log('Div Was Clicked');
//   }
//   onSave($event: any) {
//     $event.stopPropagation();
//     console.log('Button Was Clicked', $event);
//   }
// }

//06 Event Filtering *not use this type
// @Component({
//   selector: 'courses',
//   template: ` <input (keyup)="onKeyUp($event)" /> `,
// })
// export class CoursesComponent {
//   onKeyUp($event: any) {
//     if ($event.keyCode == 13) console.log('Enter Was pressed');
//   }
// }

//07 Event Filtering
// @Component({
//   selector: 'courses',
//   template: ` <input (keyup.enter)="onKeyUp()" /> `,
// })
// export class CoursesComponent {
//   onKeyUp() {
//     console.log('Enter Was pressed');
//   }
// }

//08 Tow-way Binding
// @Component({
//   selector: 'courses',
//   template: ` <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" /> `,
// })
// export class CoursesComponent {
//   email = 'me@example.com';
//   onKeyUp() {
//     console.log(this.email);
//   }
// }

//09 Built-in Pipes
// @Component({
//   selector: 'courses',
//   template: `
//     {{ course.title | uppercase | lowercase }}<br />
//     {{ course.students | number }}<br />
//     {{ course.rating | number: '2.1-1' }}<br />
//     {{ course.price | currency: 'AUD':true:'3.2-2' }}<br />
//     {{ course.releaseDate | date: 'shortDate' }}<br />
//   `,
// })
// export class CoursesComponent {
//   course = {
//     title: 'The Complete Angular Course',
//     rating: 4.9745,
//     students: 30123,
//     price: 190.95,
//     releaseDate: new Date(2016, 3, 1),
//   };
// }

//09 Custom Pipes
// @Component({
//   selector: 'courses',
//   template: ` {{ text | summary }} `,
// })
// export class CoursesComponent {
//   text = 'I am Nuwanga';
// }

//10 Custom Pipes
@Component({
  selector: 'courses',
  template: ` {{ text | summary: 10 }} `,
})
export class CoursesComponent {
  text = 'I am Nuwanga';
}
