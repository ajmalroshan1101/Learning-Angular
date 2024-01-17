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
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class CustomRoutingModule {

}