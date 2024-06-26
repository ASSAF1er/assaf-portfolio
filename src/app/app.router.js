import { RouterComponent, defineRouter } from "rasengan";
import Home from "@app/home.page";
import About from "./about.page";
import Contact from "./contact.page";
import Works from "./works.page";
import AppLayout from "@app/app.layout";
import Reviews from "./reviews.page";
import Blank from "./blank.page";

class AppRouter extends RouterComponent {}

export default defineRouter({
  imports: [],
  layout: AppLayout,
  pages: [Home, About, Works, Contact, Reviews, Blank],
})(AppRouter);
