import kafka from './client';

const TOPIC: string = 'STORE_NEW_ORDER';

async function init() {
    const admin = kafka.admin();
    console.log("Admin connecting...");
    await admin.connect();
    console.log("Admin Connection Success...");

    console.log(`Creating Topic [${TOPIC}]`);

    await admin.createTopics({
        topics: [
            {
                topic: TOPIC,
                numPartitions: 2,
            },
        ],
    });
    console.log(`Topic Created Success [${TOPIC}]`);

    console.log("Disconnecting Admin..");
    await admin.disconnect();
}

void init();
