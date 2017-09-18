DROP DATABASE IF EXISTS catfacts;

CREATE DATABASE catfacts;

\c catfacts;

CREATE TABLE facts (
  id SERIAL PRIMARY KEY,
  fact VARCHAR NOT NULL
);

INSERT INTO facts (fact) VALUES ('Cats fart.');
INSERT INTO facts (fact) VALUES ('Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.');
INSERT INTO facts (fact) VALUES ('Cats have over 20 muscles that control their ears.');
INSERT INTO facts (fact) VALUES ('Cats sleep 70% of their lives.');
INSERT INTO facts (fact) VALUES ('A group of cats is called a clowder.');
INSERT INTO facts (fact) VALUES ('A cat ran for mayor of Mexico City in 2013.');
INSERT INTO facts (fact) VALUES ('In tigers and tabbies, the middle of the tongue is covered in backward-pointing spines, used for breaking off and gripping meat.');
INSERT INTO facts (fact) VALUES ('When cats grimace, they are usually taste-scenting They have an extra organ that, with some breathing control, allows the cats to taste-sense the air.');
INSERT INTO facts (fact) VALUES ('Cats can''t taste sweetness.');
INSERT INTO facts (fact) VALUES ('Owning a cat can reduce the risk of stroke and heart attack by a third.');
INSERT INTO facts (fact) VALUES ('Wikipedia has a recording of a cat meowing because why not?');
INSERT INTO facts (fact) VALUES ('The world''s largest cat measured 48.5 inches long.');
INSERT INTO facts (fact) VALUES ('Evidence suggests domesticated cats have been around since 3600 B.C., 2,000 years before Egypt''s pharaohs.');
INSERT INTO facts (fact) VALUES ('A cat''s purr may be a form of self-healing, as it can be a sign of nervousness as well as contentment.');
INSERT INTO facts (fact) VALUES ('Similarly, the frequency of a domestic cat''s purr is the same at which muscles and bones repair themselves.');
INSERT INTO facts (fact) VALUES ('Adult cats only meow to communicate with humans.');
INSERT INTO facts (fact) VALUES ('The world''s richest cat is worth $13 million after his human passed away and left her fortune to him.');
INSERT INTO facts (fact) VALUES ('Your cat recognizes your voice but just acts too cool to care (probably because they are).');
INSERT INTO facts (fact) VALUES ('Cats are often lactose intolerant, so stop givin'' them milk!');
INSERT INTO facts (fact) VALUES ('Cats can''t eat raw fish');
