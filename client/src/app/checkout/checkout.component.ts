import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private fb: FormBuilder, private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAddressFormValues();
  }

  checkoutForm = this.fb.group({
    addressForm: this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Street: ['', Validators.required],
      City: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
    }),
    deliveryForm: this.fb.group({
      DeliveryMethod: ['', Validators.required]
    }),
    paymentForm: this.fb.group({
      nameOnCard: ['', Validators.required]
    })
  })

  getAddressFormValues() {
    this.accountService.getUserAddress().subscribe({
      next: address => {
        address && this.checkoutForm.get('addressForm')?.patchValue(address)
      }
    })
  }
}