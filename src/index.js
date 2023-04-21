import "air-datepicker/air-datepicker.css";
import "../node_modules/paginationjs/dist/pagination.css";
import "nouislider/dist/nouislider.css";
import "./scss/main.scss";
import "./pages/kit/form-elements/form-elements.pug";
import "./components/index.js";
let template = require("./pages/kit/form-elements/form-elements.pug");
let locals = {
    users: 5,
};

document.querySelector("main").innerHTML = template(locals);
