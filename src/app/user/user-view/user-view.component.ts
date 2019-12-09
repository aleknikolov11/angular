import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-view',
    templateUrl: './user-view.component.html',
    styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
    public userData: object;
    public msg: string|null = null;

    constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((paramMap) => {
            const userName = paramMap.get('name');
            if (userName) {
                this.http.get('http://localhost:8090/users/' + userName).subscribe((response) => {
                        this.userData = response;
                        console.log(response);
                    },
                    (error: HttpErrorResponse) => {
                        this.msg = 'Internal server error';

                        if (error.status === 404) {
                            this.msg = 'User not found';
                        }
                    });
            }
        });
        //this.http.get('http://localhost:8090/users');
    }

}
