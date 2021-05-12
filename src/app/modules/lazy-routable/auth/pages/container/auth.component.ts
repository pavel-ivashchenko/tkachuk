
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ToastService } from '@app/modules/ui/toast';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
