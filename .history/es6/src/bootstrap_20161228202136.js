import { alpha } from "./js/one";
import * as airbnb from "./js/airbnb";
import { tab } from "./js/three";

require("./sass/main.scss");
require('./coffee/main.coffee');


message(alpha);
message(tab);
message("tab");

function message(mess) {
    console.warn(mess);
}