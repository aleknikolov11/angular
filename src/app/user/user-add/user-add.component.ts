import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-user-add',
    templateUrl: './user-add.component.html',
    styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
    public form: FormGroup;
    public msg: string;

    /**
     * UserAddComponent constructor.
     *
     * @param {HttpClient} httpClient
     * @param {FormBuilder} formBuilder
     */
    constructor(private httpClient: HttpClient,
                private formBuilder: FormBuilder) {
    }

    public ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            surname: ['', [Validators.required, Validators.minLength(2)]],
            description: null
        });
    }

    public submit(): void {
        this.httpClient.post('http://localhost:8090/users', this.form.value).subscribe((response) => {
                this.msg = 'Success!';
            },
            (error: HttpErrorResponse) => {
                this.msg = 'Internal server error!';
                if (error.status === 409) {
                    this.msg = 'Conflict!';
                }
            });
    }
}
