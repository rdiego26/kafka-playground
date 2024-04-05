import kafka from './client';
import * as process from "process";
const group = process.argv[2] || 'default-group';

const TOPIC: string = 'STORE_NEW_PRODUCT';

async function init() {
    const consumer = kafka.consumer({ groupId: group });
    console.log("Consumer connecting...");
    await consumer.connect();
    console.log("Consumer Connection Success...");

    await consumer.subscribe({ topic: TOPIC, fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log(
                `${group}: [${topic}]: PART:${partition}:`,
                message?.value?.toString()
            );
        },
    });
}

init();
