import { Component,  } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';



interface Beca {
  id: number;
  estado: string;
  fechaAprobacion: string;
}

@Component({
  selector: 'app-consulta-de-beca',
  templateUrl: './consulta-de-beca.component.html',
  styleUrls: ['./consulta-de-beca.component.css']
})
export class ConsultaDeBecaComponent {

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,

  ) { }

    becas: Beca[] = [
      { id: 1, estado: 'Pendiente', fechaAprobacion: '-' },
      { id: 2, estado: 'Aprobada', fechaAprobacion: '03/05/2023' },
      { id: 3, estado: 'Rechazada', fechaAprobacion: '01/05/2023' },
      { id: 4, estado: 'Pendiente', fechaAprobacion: '-' },
      { id: 5, estado: 'Aprobada', fechaAprobacion: '04/05/2023' },
      { id: 6, estado: 'Rechazada', fechaAprobacion: '02/05/2023' }
    ];
  
    idBecaConsultada: Beca | null = null;
  
    consultarBeca() {
      const idBeca = Number((document.getElementById('id_beca') as HTMLInputElement).value);
      console.log('Consultando beca con ID:', idBeca);
  
      this.idBecaConsultada = this.becas.find(beca => beca.id === idBeca) || null;
    }
  
    onClick() {
      this.userService.logout()
        .then(() => {
          this.toastr.success('¡Cierre de sessión logrado!', 'Éxito');
          this.router.navigate(['/acerca-de-nosotros']);
        })
        .catch(error => console.log(error));
    }
  }
  