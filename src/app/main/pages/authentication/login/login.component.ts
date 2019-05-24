import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { AuthService } from 'app/core/services/auth.service';
import { UserAuth } from 'app/core/model/user-auth.model';
import { User } from 'app/shared/model/user.model';
import { UserService } from 'app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _authService: AuthService,
        private _userService: UserService,
        private _router: Router
    ) {
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    login() {
        if (this.loginForm.valid) {
            const userAuth = new UserAuth(this.loginForm.get('email').value, this.loginForm.get('password').value);
            this._userService.findAll().subscribe(users => {
                for (const i in users) {
                    if (users[i].email == userAuth.username && users[i].password == userAuth.password) {
                        sessionStorage.setItem('user', JSON.stringify(users[i]));
                        this._authService.logged();
                        this._router.navigate(['/home']);
                        break;
                    }
                }
            });
        }
    }
}
