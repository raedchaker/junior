import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-demande-licence-athlete-promotion',
  templateUrl: './form-demande-licence-athlete-promotion.component.html',
  styleUrls: ['./form-demande-licence-athlete-promotion.component.scss']
})
export class FormDemandeLicenceAthletePromotionComponent implements OnInit {
  sexes = ['Homme', 'Femme'];
  licenceAthleteFormPromotion: FormGroup;
  montant = -1;
  ext = true;
  constructor() { }

  ngOnInit() {
    this.licenceAthleteFormPromotion = new FormGroup({
      club: new FormControl(null, Validators.required),
      ligue: new FormControl(null, Validators.required),
      nom: new FormControl(null, Validators.required),
      prenom: new FormControl(null, Validators.required),
      dateNaissance: new FormControl(null, Validators.required),
      lieu: new FormControl(null, Validators.required),
      poids: new FormControl(null, Validators.required),
      taille: new FormControl(null, Validators.required),
      sexe: new FormControl(null, Validators.required),
      nationalite: new FormControl(null, Validators.required),
      categorie: new FormControl(null, Validators.required),
      numAncienneLicence: new FormControl(null, Validators.required),
      adresse: new FormControl(null, Validators.required),
      numTel: new FormControl(null, Validators.required),
    });
  }

}
