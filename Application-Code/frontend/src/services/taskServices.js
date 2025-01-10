import axios from "axios";
const apiUrl = "http://k8s-threetie-mainlb-11c5700e30-116301760.us-east-1.elb.amazonaws.com/api/tasks"; //"http://localhost:8080/api/tasks";
console.log(apiUrl)
export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}
