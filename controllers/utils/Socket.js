import { io } from "socket.io-client";
import { domainURL } from "./constants";
const socket = io.connect(domainURL);
export default socket;