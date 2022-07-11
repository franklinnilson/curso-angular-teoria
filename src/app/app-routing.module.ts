import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { EventsComponent } from "./components/events/events.component";


import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { PipeOperatorsComponent } from "./components/pipe-operators/pipe-operators.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";
import { ListColorsComponent } from "./components/list-colors/list-colors.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'list/:id', component: ItemDetailComponent},
  {path: 'events', component: EventsComponent},
  {path: 'emitter', component: EmitterComponent},
  {path: 'pipe-operators', component: PipeOperatorsComponent},
  {path: 'two-way-binding', component: TwoWayBindingComponent},
  {path: 'parent-data', component: ParentDataComponent},
  {path: 'if-render', component: IfRenderComponent},
  {path: 'list-colors', component: ListColorsComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }