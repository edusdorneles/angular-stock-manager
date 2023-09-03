import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  imports: [RouterModule, ReactiveFormsModule]
})
export class SignInComponent {
  form = this.formBuilder.group({
    email: ["", Validators.email],
    password: ["", Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log("Dados do formulário de login: ", this.form.value)
  }
}
