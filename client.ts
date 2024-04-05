import { Kafka, KafkaConfig } from 'kafkajs';

const kafkaConfig: KafkaConfig = { brokers: ['kafka:9092'] }
const kafka = new Kafka(kafkaConfig)

export default kafka;
