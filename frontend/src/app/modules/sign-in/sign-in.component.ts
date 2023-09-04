import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  standalone: true,
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  imports: [RouterModule, ReactiveFormsModule, CommonModule]
})
export class SignInComponent {
  form = this.formBuilder.group({
    email: ["", Validators.email],
    password: ["", Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cookieService: CookieService,
    private toast: ToastrService
  ) {}

  onSubmit() {
    if(this.form.value && this.form.valid) {
      const { email, password } = this.form.value;

      this.userService.signIn({ email: email as string, password: password as string })
      .subscribe({
        next: (res) => {
          if(res) {
            this.cookieService.set('user-token', res?.token)
            this.toast.success(`Bem-vindo de volta, ${res?.name}.`)
            this.form.reset();
          }
        },
        error: () => {
          this.toast.error("Usuário ou senha incorretos.");
        }
      })
    }
  }
}
