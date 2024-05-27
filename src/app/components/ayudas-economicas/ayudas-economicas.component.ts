import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ayudas-economicas',
  templateUrl: './ayudas-economicas.component.html',
  styleUrls: ['./ayudas-economicas.component.css']
})
export class AyudasEconomicasComponent {
  title = 'localstorage'
  myforde!:FormGroup;
  resultado!: string;
  
  constructor(private formBuilder: FormBuilder, private router: Router,private toastr: ToastrService) {
    this. myforde= this.formBuilder.group({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required,]),
    NDate: new FormControl('', Validators.required),    
    address: new FormControl('', [Validators.required, ]),
    pais: new FormControl('', [Validators.required, ]),
    ciudad: new FormControl('', [Validators.required, ]),
    archivo:  new FormControl('', [Validators.required, ]),
  });
}

  ngOnInit():void{}

  onSubmit() {
    if (this.myforde.value) {
      localStorage.setItem("formdata", JSON.stringify(this.myforde.value));
      this.toastr.success('¡Los datos se han subido correctamente!', 'Éxito');
      this.router.navigate(['/acerca-de-nosotros']);
    } 
  }  

  }


