import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from 'src/app/material.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MaterialModule,MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatGridListModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {



 menuItems = [
  { icon: '/assets/images/rice/2.png', title: 'ข้อมูลเฉพาะข้าว' },
  { icon: '/assets/images/rice/3.png', title: 'องค์ความรู้เรื่องข้าว' },
  { icon: '/assets/images/rice/6.png', title: 'ข้อมูลด้านเศรษฐกิจของข้าว' },
  { icon: '/assets/images/rice/7.png', title: 'ข้อมูลเพื่อการวางแผนพัฒนาข้าว' },
  { icon: '/assets/images/rice/8.png', title: 'ข้อมูลเกี่ยวกับเกษตรกร' },
  { icon: '/assets/images/rice/9.png', title: 'โภชนาการ' },
  { icon: '/assets/images/rice/14.png', title: 'สั่งซื้อข้าว' }
];


test(){
  console.log("test")
  alert("Test");
}

}
