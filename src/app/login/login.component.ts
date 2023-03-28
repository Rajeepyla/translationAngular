import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  loginForm: any;    loading = false;
    submitted = false;
    returnUrl: string | undefined;
  form: any;

    constructor(
      
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
       
    ) {
       
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

       

      
    }
}