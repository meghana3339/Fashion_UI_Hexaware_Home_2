import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paymentpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paymentpage.component.html',
  styleUrl: './paymentpage.component.css'
})
export class PaymentpageComponent {
  constructor(private router: Router) {}
  newSuccess()
  {
    this.router.navigateByUrl('paymentsuccessful');
  }

}
