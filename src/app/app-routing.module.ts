import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { IgxGridModule } from "igniteui-angular";
export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent, data: { text: "Home" } }
];
@NgModule({
    imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
