import Service from "./Service";
import LocalService from "./LocalService";

// Implements Service Provider
const service: Service = new LocalService();

export default service;
