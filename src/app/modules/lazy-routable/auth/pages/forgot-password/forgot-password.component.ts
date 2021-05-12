
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@app/modules/ui/toast';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.form = this.initForm();
  }
  
  public onSubmit(): void {
    this.toastService.show({
      text: 'Toast message',
      type: 'success'
    });
  }
  
  private initForm(): FormGroup {
    return this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
    });
  }

}

// https://stackblitz.com/edit/angular-toast-service?file=src%2Fapp%2Ftoast%2Ftoast.module.ts
