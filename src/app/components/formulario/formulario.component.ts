import { Component , OnInit} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  title = 'localstorage'
  myforde!:FormGroup;
  resultado!: string;
  
  constructor(private formBuilder: FormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private userService: UserService) {

    this.myforde = this.formBuilder.group({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password2: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}$/)]),
    carrera: new FormControl('', [Validators.required, Validators.minLength(2)]),
    nivel: new FormControl('', [Validators.required, Validators.minLength(2)]),
    persona: new FormControl('', [Validators.required, Validators.pattern(/^\d{2}$/)]),
  });
}

  ngOnInit():void{}

  onSubmit() {
    this.userService.register(this.myforde.value)
    .then(response => {
      console.log(response);
      this.toastr.success('¡Los datos se han subido correctamente!', 'Éxito');
      this.router.navigate(['/inicio']);
    })
    .catch(error => console.log(error));
  }

}