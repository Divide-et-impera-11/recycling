import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'
import { OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../utils/validation'

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
    //..
    credentials: TokenPayload = {
        id: 0,
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        role: 0,
    }
    //for form validation
    form: FormGroup;
    submitted = false;

    constructor(
        private auth: AuthenticationService,
        private router: Router,
        private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {
        this.form = this.formBuilder.group(
            {
                fullname: ['', Validators.required],
                username: [
                    '',
                    [
                        Validators.required,
                        Validators.minLength(6),
                        Validators.maxLength(20)
                    ]
                ],
                email: ['', [Validators.required, Validators.email]],
                password: [
                    '',
                    [
                        Validators.required,
                        Validators.minLength(6),
                        Validators.maxLength(40)
                    ]
                ],
                confirmPassword: ['', Validators.required],
                acceptTerms: [false, Validators.requiredTrue]
            },
            {
                validators: [Validation.match('password', 'confirmPassword')]
            }
        );
    }
    get f(): { [key: string]: AbstractControl } {
        return this.form.controls;
    }
    onSubmit(): void {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        console.log(JSON.stringify(this.form.value, null, 2));
    }
    onReset(): void {
        this.submitted = false;
        this.form.reset();
    }

    register() {
        this.auth.register(this.credentials).subscribe(
            () => {
                this.router.navigateByUrl('/register')
            },
            err => {
                console.error(err)
            }
        )
    }
}



