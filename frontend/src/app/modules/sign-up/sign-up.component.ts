import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  standalone: true,
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  imports: [RouterModule, ReactiveFormsModule, CommonModule]
})
export class SignUpComponent {
  form = this.formBuilder.group({
    name: ["", Validators.required],
    email: ["", Validators.email],
    password: ["", Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toast: ToastrService,
    private router: Router
  ) {}

  onSubmit() {
    if(this.form.value && this.form.valid) {
      const { name, email, password } = this.form.value;

      this.userService.signUp({ name: name as string, email: email as string, password: password as string })
      .subscribe({
        next: () => {
          this.toast.success("Conta criada, realize o login.")
          this.router.navigate(['/sign-in'])
          this.form.reset();
        },
        error: () => {
          this.toast.error("Erro ao criar usuário.");
        }
      })
    }
  }
}
