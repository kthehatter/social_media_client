import { io } from "socket.io-client";
import { domainURL } from "./constants";
//const socket = io.connect(domainURL);
const socket = io.connect(domainURL+"/api/");
export default socket;