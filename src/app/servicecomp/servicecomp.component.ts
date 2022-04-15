import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/model/product';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-servicecomp',
  templateUrl: './servicecomp.component.html',
  styleUrls: ['./servicecomp.component.css']
})
export class ServicecompComponent implements OnInit {
proobj:Product[];
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }
   displaypro()
   {
      this.service.getallproduct().subscribe((res:Product[])=>{this.proobj=res});

   }

}
