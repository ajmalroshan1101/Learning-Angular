import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

import { TestComponent } from "../Common/Test/test.component";
import { HeaderComponent } from "../header/header.component";
import { RoutingChildComponent } from "../Common/routingcomponent/routingchild.component";

const routes:Routes = [

    {
        path:'',
        component:RoutingChildComponent
    },
    {
        path:'testcompo',
        component:TestComponent
    },
    {
        path:'headcompo',
        component:HeaderComponent
    },
    // Child route example (it is just an example not used in th application )
    // {
    //     path: 'products',
    //     component: ProductsComponent, // Parent component
    //     children: [
    //       { path: '', redirectTo: 'all', pathMatch: 'full' }, // Redirect to 'all' child route by default
    //       { path: 'all', component: AllProductsComponent }, // Child route for all products
    //       { path: 'electronics', component: ElectronicsComponent }, // Child route for electronics category
    //       { path: 'apparel', component: ApparelComponent }, // Child route for apparel category
    //       { path: ':category', component: CategoryComponent } // Dynamic child route for any category
    //     ]
    //   },
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class CustomRoutingModule {

}