import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-calendrier-competition',
    templateUrl: './calendrier-competition.component.html',
    styleUrls: ['./calendrier-competition.component.scss']
})
export class CalendrierCompetitionComponent implements OnInit {

    listCalendrier = [
        {
            date: '23',
            mois: 'janvier',
            comp: 'comp name',
            jour: 'lundi',
            heure: '12:00',
            lieu: 'tunis manzah'
        },
        {
            date: '02',
            mois: 'mars',
            comp: 'comp name',
            jour: 'lundi',
            heure: '12:00',
            lieu: 'tunis manzah'
        }
    ]

    constructor() {
    }

    ngOnInit() {
    }

}
