import { Component } from '@angular/core';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  imports: [RouterModule, ReactiveFormsModule]
})
export class SignUpComponent {
  form = this.formBuilder.group({
    email: ["", Validators.email],
    password: ["", Validators.required],
    confirmPassword: ["", Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log("Dados do formulário de criar conta: ", this.form.value)
  }
}
