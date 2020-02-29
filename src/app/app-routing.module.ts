import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormbuttonComponent } from "./formbutton/formbutton.component";
import { MyformComponent } from "./myform/myform.component";

const routes: Routes = [
  { path: "formbutton", component: FormbuttonComponent },
  { path: "myform", component: MyformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponent = [FormbuttonComponent, MyformComponent];
