# kafka-playground
Playing with kafka.



## Commands
- Setup the containers
```bash
docker-compose up -d
```

- Setup the topic
```bash
docker-compose exec kafka kafka-topics.sh --create --topic YOUR_TOPIC  --partitions 1 --replication-factor 1 --bootstrap-server kafka:9092
```

- List the topics
```bash
docker-compose exec kafka kafka-topics.sh --list --zookeeper zookeeper:2181
```

- Setup a consumer
```bash
docker-compose exec kafka kafka-console-consumer.sh --topic YOUR_TOPIC --from-beginning --bootstrap-server kafka:9092
```

- Produce a message
```bash
docker-compose exec kafka kafka-console-producer.sh --topic YOUR_TOPIC --broker-list localhost:9092
```
After running the command above, you can type your message and press enter.
