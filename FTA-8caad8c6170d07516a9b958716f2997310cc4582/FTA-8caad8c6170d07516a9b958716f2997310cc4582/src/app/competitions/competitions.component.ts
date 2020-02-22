import {Component, OnInit} from '@angular/core';
import competitions from '../competitions.json';

@Component({
    selector: 'app-competitions',
    templateUrl: './competitions.component.html',
    styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {

    public competitionsList: {
        id: number, name: string, description: string, type: string, result: string,
        bilan: string, record: string, image: string
    }[] = competitions;

    constructor() {


    }

    ngOnInit() {
    }

}
