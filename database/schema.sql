DROP DATABASE IF EXISTS catfacts;

CREATE DATABASE catfacts;

USE catfacts;

CREATE TABLE facts (
  id int NOT NULL AUTO_INCREMENT,
  fact text NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO facts (id, fact) VALUES (1, "Cats fart.");
INSERT INTO facts (id, fact) VALUES (2, "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.");
INSERT INTO facts (id, fact) VALUES (3, "Cats have over 20 muscles that control their ears.");
INSERT INTO facts (id, fact) VALUES (4, "Cats sleep 70% of their lives.");
INSERT INTO facts (id, fact) VALUES (5, "A group of cats is called a clowder.");
INSERT INTO facts (id, fact) VALUES (6, "A cat ran for mayor of Mexico City in 2013.");
INSERT INTO facts (id, fact) VALUES (7, "In tigers and tabbies, the middle of the tongue is covered in backward-pointing spines, used for breaking off and gripping meat.");
INSERT INTO facts (id, fact) VALUES (8, "When cats grimace, they are usually taste-scenting They have an extra organ that, with some breathing control, allows the cats to taste-sense the air.");
INSERT INTO facts (id, fact) VALUES (9, "Cats can't taste sweetness.");
INSERT INTO facts (id, fact) VALUES (10, "Owning a cat can reduce the risk of stroke and heart attack by a third.");
INSERT INTO facts (id, fact) VALUES (11, "Wikipedia has a recording of a cat meowing because why not?");
INSERT INTO facts (id, fact) VALUES (12, "The world's largest cat measured 48.5 inches long.");
INSERT INTO facts (id, fact) VALUES (13, "Evidence suggests domesticated cats have been around since 3600 B.C., 2,000 years before Egypt's pharaohs.");
INSERT INTO facts (id, fact) VALUES (14, "A cat's purr may be a form of self-healing, as it can be a sign of nervousness as well as contentment.");
INSERT INTO facts (id, fact) VALUES (15, "Similarly, the frequency of a domestic cat's purr is the same at which muscles and bones repair themselves.");
INSERT INTO facts (id, fact) VALUES (16, "Adult cats only meow to communicate with humans.");
INSERT INTO facts (id, fact) VALUES (17, "The world's richest cat is worth $13 million after his human passed away and left her fortune to him.");
INSERT INTO facts (id, fact) VALUES (18, "Your cat recognizes your voice but just acts too cool to care (probably because they are).");
INSERT INTO facts (id, fact) VALUES (19, "Cats are often lactose intolerant, so stop givin' them milk!");
INSERT INTO facts (id, fact) VALUES (20, "Cats can't eat raw fish");
