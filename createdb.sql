BEGIN;

create table users (
	userid INT PRIMARY KEY,
	name VARCHAR(50),
	surname VARCHAR(50),
	groupid INT
);

create table usergroups (
	groupid INT PRIMARY KEY,
	name VARCHAR(50)
);
insert into usergroups (groupid, name) values (0, 'Infant');
insert into usergroups (groupid, name) values (1, 'Kid');
insert into usergroups (groupid, name) values (2, 'Beginner');
insert into usergroups (groupid, name) values (3, 'Intermediate');
insert into usergroups (groupid, name) values (4, 'Upper Intermediate');
insert into usergroups (groupid, name) values (5, 'Advanced');
insert into usergroups (groupid, name) values (6, 'Upper Advanced');
insert into usergroups (groupid, name) values (7, 'Master');

ALTER TABLE users
	ADD FOREIGN KEY (groupid) REFERENCES usergroups (groupid);
    
COMMIT;
