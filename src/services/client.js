// importScripts('signalr.js');
import { signalR } from "@microsoft/signalr";

let connection = new signalR.HubConnectionBuilder()
    .withUrl("https://example.com/signalr/chat")
    .build();

connection.on("send", data => {
    console.log(data);
});

connection.start()
    .then(() => connection.invoke("send", "Hello"));









// import { Kafka } from 'kafkajs';
// // import { io } from "socket.io-client";
// import ws from 'websocket';

// const ENDPOINT = 'ws://localhost:5000';
// // const socket = io(ENDPOINT);

// var client = new ws.Client();
// export async function getSocket() {
// 	return client
// }
// const kafka = new Kafka({ clientId: 'my-app', brokers: ['kafka1:9092', 'kafka2:9092'], })
// const consumer = kafka.consumer({ groupId: 'test-group' })
// await consumer.connect()
// await consumer.subscribe({ topic: `${topic}`, fromBeginning: true })
// await consumer.run({
// 	eachMessage: async ({ topic, partition, message }) => {
// 		console.log({
// 			value: message.value.toString(),
// 		})
// 	},
// })