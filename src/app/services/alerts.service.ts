import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {

  alertError(error: string) {
    console.error(error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ha surgido algún error',
    });
  }

  alertSuccess(title: string) {
    Swal.fire({
      icon: 'success',
      title,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  alertInfo(text: string) {
    Swal.fire({
      icon: 'info',
      title: 'Información',
      text,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: true,
    });
  }

  openLoadingAlert() {
    Swal.fire({
      icon: 'info',
      title: 'Cargando...',
      text: 'Por favor espera',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  closeLoadingAlert() {
    Swal.close();
  }
}
