 SELECT
 user.ID,
 user.UserName,
 parent.UserName as ParentUserName
 FROM Users user
 JOIN Users parent
 ON user.parent = parent.ID;
