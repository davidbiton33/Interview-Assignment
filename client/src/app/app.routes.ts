import { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		loadComponent: () =>
			import("./pages/about-page/about-page.component").then(
				(m) => m.AboutPageComponent,
			),
	},
	{
		path: "all-babies",
		loadComponent: () =>
			import("./pages/home-page/home-page.component").then(
				(m) => m.HomePageComponent,
			),
	},
	{
		path: "add-baby",
		loadComponent: () =>
			import("./pages/add-baby-page/add-baby-page.component").then(
				(m) => m.AddBabyPageComponent,
			),
	},
	{
		path: "edit-baby/:id",
		loadComponent: () =>
			import("./pages/edit-baby-page/edit-baby-page.component").then(
				(m) => m.EditBabyPageComponent,
			),
	},
];
